import type { Business } from '@/data/businesses';
import { asset } from '@/lib/asset-path';

type BusinessTileProps = {
  business: Business;
  variant?: 'card' | 'hero' | 'thumb';
  className?: string;
  priority?: boolean;
};

/**
 * Photographic tile for a storefront. Loads /businesses/<slug>.webp by default
 * and renders a layered color-wash + monogram fallback for the small
 * block-map thumbnails (where a real photo would never read at ~40px wide)
 * or any business without a published image (coming-soon listings).
 */
export function BusinessTile({
  business,
  variant = 'card',
  className = '',
  priority = false,
}: BusinessTileProps) {
  // Real photo on cards/heroes — designed monogram fallback on tiny thumbs
  const usePhoto = variant !== 'thumb';

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* color wash sits below the image as a load-in placeholder */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 100% at 0% 0%, ${business.accentSoft} 0%, ${business.accent} 55%, ${shade(business.accent, -25)} 100%)`,
        }}
      />

      {usePhoto ? (
        <>
          <img
            src={asset(`/businesses/${business.slug}.webp`)}
            alt={`${business.name} — ${business.category.split('·')[0].trim()}`}
            loading={priority || variant === 'hero' ? 'eager' : 'lazy'}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* film-grain speckle (very subtle) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-speckle opacity-[0.12] mix-blend-multiply"
          />
        </>
      ) : (
        // Monogram fallback — used for tiny thumbs and businesses w/o photos.
        <Monogram business={business} />
      )}

      {/* top edge plank seam */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
        style={{ background: shade(business.accent, -50) }}
      />

      {/* corner category stamp — only on cards/heroes */}
      {variant !== 'thumb' && (
        <div
          className="pointer-events-none absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full border border-white/30 bg-black/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-sm sm:bottom-5 sm:right-5"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: business.accentSoft,
              boxShadow: `0 0 0 3px ${business.accent}88`,
            }}
          />
          {business.category.split('·')[0].trim()}
        </div>
      )}
    </div>
  );
}

function Monogram({ business }: { business: Business }) {
  const letter = business.shortName.replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase();
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display font-bold leading-none text-[clamp(2rem,8vw,5rem)]"
          style={{
            color: shade(business.accent, -45),
            opacity: 0.28,
            transform: 'translateY(-4%)',
          }}
        >
          {letter}
        </span>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 22px, rgba(0,0,0,0.18) 22px, rgba(0,0,0,0.18) 23px)',
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-speckle opacity-25 mix-blend-multiply" />
    </>
  );
}

/** lighten/darken a hex by percent (-100..+100) */
function shade(hex: string, percent: number): string {
  const clean = hex.replace('#', '');
  const num = parseInt(
    clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean,
    16,
  );
  const amt = Math.round(2.55 * percent);
  let r = (num >> 16) + amt;
  let g = ((num >> 8) & 0x00ff) + amt;
  let b = (num & 0x0000ff) + amt;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
