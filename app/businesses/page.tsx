import type { Metadata } from 'next';
import Link from 'next/link';
import { listBusinesses } from '@/data/businesses';
import { BusinessTile } from '@/components/business/business-tile';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
  title: 'Businesses',
  description:
    'Browse all eleven storefronts on The Lima Plank — coffee, ceramics, pinball, brine, fitness, and more.',
};

export default function BusinessesPage() {
  const businesses = listBusinesses();

  return (
    <>
      <section className="pt-36 pb-12 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <div className="eyebrow">The Directory · {businesses.length} concepts</div>
          <h1 className="heading-xl mt-4 text-ink-300">
            Pick your{' '}
            <span className="font-script text-ember-400 not-italic font-medium">door.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300/75">
            Every storefront on The Plank is its own world — its own kitchen, its own crowd, its own way of
            doing things. Find the one that matches your afternoon.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-page space-y-20 px-6 lg:px-10 lg:space-y-28">
          {businesses.map((b, i) => (
            <Reveal key={b.slug}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                  i % 2 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <Link
                  href={`/${b.slug}`}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-ink-300/10 lg:col-span-7"
                >
                  <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                    <BusinessTile business={b} variant="hero" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-300/40 via-transparent to-transparent" />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 origin-left transition-transform"
                    style={{ background: b.accent }}
                  />
                  {b.status === 'coming-soon' && (
                    <div className="absolute right-5 top-5">
                      <span className="stamp bg-paper-100/85 text-ink-300 backdrop-blur-sm">
                        Coming soon
                      </span>
                    </div>
                  )}
                </Link>

                <div className="space-y-5 lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: b.accent, boxShadow: `0 0 12px ${b.accent}88` }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-300/60">
                      {b.category}
                    </span>
                  </div>

                  <h2 className="font-display text-4xl leading-[0.95] text-ink-300 sm:text-5xl lg:text-6xl">
                    {b.name}
                  </h2>
                  <p className="font-script text-2xl leading-snug sm:text-3xl" style={{ color: b.accent }}>
                    {b.tagline}
                  </p>

                  <p className="text-lg leading-relaxed text-ink-300/75">{b.blurb}</p>

                  <dl className="grid grid-cols-2 gap-3 border-t border-ink-300/10 pt-4 text-sm">
                    <div>
                      <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ink-300/55">
                        Address
                      </dt>
                      <dd className="text-ink-300/90">{b.address}</dd>
                      <dd className="text-xs text-ink-300/55">{b.city}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ink-300/55">
                        Hours
                      </dt>
                      <dd className="text-ink-300/90">{b.hours[0]?.time ?? '—'}</dd>
                      <dd className="text-xs text-ink-300/55">{b.hours[0]?.label ?? ''}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link href={`/${b.slug}`} className="btn-primary">
                      View {b.shortName}
                    </Link>
                    {b.website && b.status === 'open' && (
                      <a
                        href={b.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        Their website ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
