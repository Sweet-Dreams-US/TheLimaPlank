import Link from 'next/link';
import { listBusinesses, districtMeta } from '@/data/businesses';
import { HomeHero } from '@/components/home/hero';
import { PortfolioGrid } from '@/components/home/portfolio-grid';
import { Marquee } from '@/components/site/marquee';
import { Reveal } from '@/components/site/reveal';
import { BusinessTile } from '@/components/business/business-tile';

export default function HomePage() {
  const businesses = listBusinesses();
  const ribbon = [
    'Coffee & ceramics',
    'Brine & barbell',
    'Pinball & pizza',
    'Walk-ins welcome',
    'Made on the block',
    'Open year-round',
    'First Fridays late',
  ];

  return (
    <>
      <HomeHero />

      {/* Marquee ribbon */}
      <section className="border-y border-ink-300/10 bg-plank-500/95 py-5">
        <Marquee speed={50}>
          {ribbon.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-2xl italic text-paper-100/85"
            >
              {t}
              <span className="font-sans text-brass-300 not-italic">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      <PortfolioGrid businesses={businesses} />

      {/* Map/Layout teaser */}
      <section className="relative border-t border-ink-300/10 bg-linen/60 py-24 lg:py-32">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal as="div" className="lg:col-span-5">
              <div className="eyebrow">Walk the block</div>
              <h2 className="heading-lg mt-4 text-ink-300">
                One boardwalk.
                <br />
                <span className="font-script text-moss-500 not-italic font-medium">
                  Eleven front doors.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-300/75">
                The Plank is a single block on the south end of downtown Lima — every storefront on the same
                side of the street, separated by nothing but a coat of paint and a shared dumpster.
              </p>
              <div className="mt-8">
                <Link href="/about" className="btn-ghost">
                  How the block came together →
                </Link>
              </div>
            </Reveal>

            <Reveal as="div" delay={0.1} className="lg:col-span-7">
              <BlockMap businesses={businesses} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden py-28 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-paper-100 via-paper-200/60 to-paper-100" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plank-500/40 to-transparent"
        />
        <div className="mx-auto max-w-page px-6 lg:px-10 text-center">
          <Reveal>
            <div className="eyebrow">Today on the Plank</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-xl mt-4 mx-auto max-w-4xl text-ink-300">
              Pick a door.{' '}
              <span className="font-script text-ember-400 not-italic font-medium">
                We'll leave the porch light on.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/businesses" className="btn-primary">
                Browse all storefronts
              </Link>
              <Link href="/about" className="btn-ghost">
                Read about the Plank
              </Link>
              <a href={`mailto:${districtMeta.contact.email}`} className="btn-ghost">
                {districtMeta.contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function BlockMap({ businesses }: { businesses: ReturnType<typeof listBusinesses> }) {
  return (
    <div className="card-paper relative aspect-[16/10] overflow-hidden p-6 lg:p-8">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.32em] text-plank-500/80">
          <span>The Plank · West to east</span>
          <span>↘ {businesses.length} doors</span>
        </div>

        <div className="relative mt-6 flex-1">
          {/* boardwalk base */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-10 h-2 rounded bg-plank-500"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 1px, transparent 1px 32px)',
            }}
          />
          {/* storefronts */}
          <div className="absolute inset-x-0 bottom-12 flex items-end gap-[6px]">
            {businesses.map((b, i) => {
              const h = 45 + ((i * 17) % 35);
              return (
                <div
                  key={b.slug}
                  className="group relative flex-1"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-t-md">
                    <BusinessTile business={b} variant="thumb" />
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-x-0 -top-1 h-1 rounded bg-current"
                    style={{ color: b.accent }}
                  />
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-300 px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-paper-100 opacity-0 transition group-hover:opacity-100">
                    {b.shortName}
                  </div>
                </div>
              );
            })}
          </div>

          {/* street labels */}
          <div className="absolute inset-x-0 bottom-0 flex justify-between font-mono text-[9px] uppercase tracking-[0.32em] text-ink-300/55">
            <span>100 W</span>
            <span>160 E</span>
          </div>
        </div>
      </div>
    </div>
  );
}
