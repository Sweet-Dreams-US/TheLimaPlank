import type { Business } from '@/data/businesses';

type BusinessTileProps = {
  business: Business;
  variant?: 'card' | 'hero' | 'thumb';
  className?: string;
};

/**
 * Editorial placeholder for storefront imagery — large monogram, accent wash,
 * grain, and a faint compass mark in the bottom corner. Used everywhere a
 * photo would eventually live so the layout doesn't shift when imagery
 * arrives. Swap the inner `<svg>` for a real <Image> later.
 */
export function BusinessTile({ business, variant = 'card', className = '' }: BusinessTileProps) {
  const monogram = business.shortName.replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase();
  const sizeClass =
    variant === 'hero'
      ? 'text-[clamp(8rem,22vw,22rem)]'
      : variant === 'thumb'
        ? 'text-[clamp(3rem,8vw,6rem)]'
        : 'text-[clamp(5rem,14vw,12rem)]';

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 100% at 0% 0%, ${business.accentSoft} 0%, ${business.accent} 55%, ${shade(business.accent, -25)} 100%)`,
      }}
    >
      {/* monogram layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-display font-bold leading-none ${sizeClass}`}
          style={{
            color: shade(business.accent, -40),
            opacity: 0.22,
            transform: 'translateY(-4%)',
          }}
        >
          {monogram}
        </span>
      </div>

      {/* horizontal plank texture lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 38px, rgba(0,0,0,0.18) 38px, rgba(0,0,0,0.18) 39px)',
        }}
      />

      {/* speckle overlay */}
      <div aria-hidden className="absolute inset-0 bg-speckle opacity-30 mix-blend-multiply" />

      {/* corner accent stamp */}
      {variant !== 'thumb' && (
        <div
          className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 flex items-center gap-2 rounded-full border border-current/40 bg-black/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em]"
          style={{ color: shade(business.accent, -55) }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: shade(business.accent, -55),
              boxShadow: `0 0 0 3px ${business.accentSoft}66`,
            }}
          />
          {business.category.split('·')[0].trim()}
        </div>
      )}

      {/* top edge plank seam */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: shade(business.accent, -50) }}
      />
    </div>
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
