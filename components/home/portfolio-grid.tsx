import Link from 'next/link';
import type { Business } from '@/data/businesses';
import { BusinessTile } from '@/components/business/business-tile';
import { Reveal } from '@/components/site/reveal';

export function PortfolioGrid({ businesses }: { businesses: Business[] }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-page px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow">The Directory · {businesses.length} shops</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg mt-4 text-ink-300">
              Eleven different rooms in{' '}
              <span className="font-script text-ember-400 not-italic font-medium">one shared block.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300/75">
              Each business owns its own kitchen, chair, wheel, or wall. Pick the door that suits your
              afternoon.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {businesses.map((b, i) => (
            <Reveal key={b.slug} delay={Math.min(i * 0.04, 0.32)}>
              <BusinessCard business={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessCard({ business }: { business: Business }) {
  return (
    <Link
      href={`/${business.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-ink-300/10 bg-linen transition hover:border-ink-300/30 hover:shadow-[0_30px_60px_-30px_rgba(28,22,18,0.35)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <BusinessTile business={business} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-300/55 via-ink-300/0 to-transparent" />
      </div>

      <div className="relative space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.28em]"
            style={{ color: business.accent }}
          >
            {business.category.split('·')[0].trim()}
          </span>
          {business.status === 'coming-soon' && (
            <span className="stamp shrink-0 text-plank-500">Coming soon</span>
          )}
        </div>

        <h3 className="font-display text-2xl leading-tight text-ink-300 sm:text-3xl">
          {business.name}
        </h3>

        <p
          className="font-script text-xl leading-snug sm:text-2xl"
          style={{ color: business.accent }}
        >
          {business.tagline}
        </p>

        <p className="text-sm leading-relaxed text-ink-300/70 line-clamp-2">{business.blurb}</p>

        <div className="flex items-center justify-between pt-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-300/55">
            {business.address.replace(/^\d+\s+/, '')}
          </div>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.22em] transition group-hover:translate-x-0.5"
            style={{ color: business.accent }}
          >
            Visit →
          </span>
        </div>
      </div>
    </Link>
  );
}
