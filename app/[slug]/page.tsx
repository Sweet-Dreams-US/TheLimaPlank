import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { businesses, getBusiness, listBusinesses } from '@/data/businesses';
import { BusinessTile } from '@/components/business/business-tile';
import { Reveal } from '@/components/site/reveal';
import { BusinessHero } from '@/components/business/business-hero';

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusiness(slug);
  if (!business) return {};
  return {
    title: business.name,
    description: business.blurb,
    alternates: { canonical: `/${business.slug}` },
    openGraph: {
      title: `${business.name} · The Lima Plank`,
      description: business.blurb,
    },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const business = getBusiness(slug);
  if (!business) notFound();

  const all = listBusinesses();
  const idx = all.findIndex((b) => b.slug === business.slug);
  const prev = all[(idx + all.length - 1) % all.length];
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <BusinessHero business={business} />

      {/* Intro */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal as="div" className="lg:col-span-7">
              <div className="eyebrow" style={{ color: business.accent }}>
                The Story
              </div>
              <h2 className="heading-lg mt-4 text-ink-300">{business.tagline}</h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-300/80">
                <p>{business.longCopy}</p>
                {business.story && <p className="text-ink-300/65">{business.story}</p>}
              </div>
            </Reveal>

            <Reveal as="div" delay={0.1} className="lg:col-span-5">
              <div
                className="card-paper sticky top-28 space-y-6 p-7"
                style={{ borderColor: `${business.accent}33` }}
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-300/55">
                    Visit
                  </div>
                  <div className="mt-3 font-display text-2xl text-ink-300">{business.address}</div>
                  <div className="text-ink-300/65">{business.city}</div>
                </div>

                <div className="vintage-rule text-ink-300/20" />

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-300/55">
                    Hours
                  </div>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    {business.hours.map((h) => (
                      <div key={h.label} className="flex items-baseline justify-between gap-4">
                        <dt className="text-ink-300/80">{h.label}</dt>
                        <dd className="text-ink-300/95">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {(business.phone || business.email || business.website) && (
                  <>
                    <div className="vintage-rule text-ink-300/20" />
                    <div className="space-y-1.5 text-sm">
                      {business.phone && (
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-ink-300/55 font-mono text-[10px] uppercase tracking-widest">
                            Phone
                          </span>
                          <a href={`tel:${business.phone}`} className="text-ink-300/95 hover:underline">
                            {business.phone}
                          </a>
                        </div>
                      )}
                      {business.email && (
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-ink-300/55 font-mono text-[10px] uppercase tracking-widest">
                            Email
                          </span>
                          <a href={`mailto:${business.email}`} className="text-ink-300/95 hover:underline">
                            {business.email}
                          </a>
                        </div>
                      )}
                      {business.website && (
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-ink-300/55 font-mono text-[10px] uppercase tracking-widest">
                            Web
                          </span>
                          <a
                            href={business.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink-300/95 hover:underline"
                            style={{ color: business.accent }}
                          >
                            Visit website ↗
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {business.website && business.status === 'open' && (
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent w-full justify-center"
                    style={{ background: business.accent }}
                  >
                    Their website ↗
                  </a>
                )}
                {business.status === 'coming-soon' && (
                  <div className="rounded-xl border border-current/30 bg-current/5 px-4 py-3 text-center text-sm font-medium" style={{ color: business.accent }}>
                    Opening soon on The Plank
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      {business.highlights.length > 0 && (
        <section className="relative border-y border-ink-300/10 py-14 lg:py-20" style={{ background: `${business.accent}0a` }}>
          <div className="mx-auto max-w-page px-6 lg:px-10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {business.highlights.map((h) => (
                <Reveal key={h.label}>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-300/55">
                      {h.label}
                    </div>
                    <div
                      className="mt-2 font-display text-3xl leading-tight sm:text-4xl"
                      style={{ color: business.accent }}
                    >
                      {h.value}
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-300/55">
                    Status
                  </div>
                  <div
                    className="mt-2 font-display text-3xl leading-tight sm:text-4xl capitalize"
                    style={{ color: business.accent }}
                  >
                    {business.status.replace('-', ' ')}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow" style={{ color: business.accent }}>
              On offer
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-md mt-4 max-w-2xl text-ink-300">What you'll find inside.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {business.features.map((f, i) => (
              <Reveal key={f} delay={Math.min(i * 0.05, 0.3)}>
                <div
                  className="card-paper h-full p-6"
                  style={{ borderColor: `${business.accent}26` }}
                >
                  <div
                    className="font-display text-3xl leading-none"
                    style={{ color: business.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mt-4 font-display text-xl leading-snug text-ink-300">{f}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-ink-300/10 py-16 lg:py-20">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <PrevNextCard label="Previous storefront" business={prev} direction="left" />
            <PrevNextCard label="Next storefront" business={next} direction="right" />
          </div>
          <div className="mt-12 text-center">
            <Link href="/businesses" className="btn-ghost">
              ← All storefronts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PrevNextCard({
  label,
  business,
  direction,
}: {
  label: string;
  business: ReturnType<typeof getBusiness> & {};
  direction: 'left' | 'right';
}) {
  return (
    <Link
      href={`/${business.slug}`}
      className={`group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-ink-300/10 bg-linen p-5 transition hover:border-ink-300/30 hover:shadow-[0_30px_60px_-30px_rgba(28,22,18,0.35)] ${
        direction === 'right' ? 'sm:text-right sm:flex-row-reverse' : ''
      }`}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        <BusinessTile business={business} variant="thumb" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-plank-500">
          {direction === 'left' ? '←' : ''} {label} {direction === 'right' ? '→' : ''}
        </div>
        <div className="mt-1 truncate font-display text-2xl text-ink-300">{business.name}</div>
        <div className="text-sm text-ink-300/65 truncate">{business.category.split('·')[0].trim()}</div>
      </div>
    </Link>
  );
}
