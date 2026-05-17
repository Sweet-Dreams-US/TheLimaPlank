import Link from 'next/link';
import { districtMeta, listBusinesses } from '@/data/businesses';

export function SiteFooter() {
  const businesses = listBusinesses();
  return (
    <footer className="relative mt-24 border-t border-ink-300/10 bg-plank-500 text-paper-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-wood-grain opacity-50 mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-page px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-brass-200/80">
              {districtMeta.name}
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-paper-100 sm:text-4xl">
              {districtMeta.tagline}
            </h2>
            <p className="mt-6 max-w-md text-paper-100/80 leading-relaxed">
              {districtMeta.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {districtMeta.social.instagram && (
                <a
                  href={districtMeta.social.instagram}
                  className="rounded-full border border-paper-100/30 px-4 py-2 transition hover:border-paper-100/70 hover:bg-paper-100/10"
                >
                  Instagram ↗
                </a>
              )}
              {districtMeta.social.facebook && (
                <a
                  href={districtMeta.social.facebook}
                  className="rounded-full border border-paper-100/30 px-4 py-2 transition hover:border-paper-100/70 hover:bg-paper-100/10"
                >
                  Facebook ↗
                </a>
              )}
              <a
                href={`mailto:${districtMeta.contact.email}`}
                className="rounded-full border border-paper-100/30 px-4 py-2 transition hover:border-paper-100/70 hover:bg-paper-100/10"
              >
                {districtMeta.contact.email} ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-brass-200/80">
              The Storefronts
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 text-paper-100/85 sm:grid-cols-2">
              {businesses.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/${b.slug}`}
                    className="font-display text-lg leading-tight transition hover:text-brass-200"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-brass-200/80">
              Visit
            </div>
            <address className="mt-5 not-italic text-paper-100/85 leading-relaxed">
              100 – 160 The Plank
              <br />
              {districtMeta.city}
            </address>
            <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.32em] text-brass-200/80">
              Hours vary by storefront
            </div>
            <p className="mt-3 text-sm text-paper-100/65 leading-relaxed">
              See each business page for current hours, contact, and seasonal notes.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper-100/10 pt-8 text-sm text-paper-100/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} The Lima Plank. All storefronts independently owned.</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
            Built on a single boardwalk · Lima, Ohio
          </span>
        </div>
      </div>
    </footer>
  );
}
