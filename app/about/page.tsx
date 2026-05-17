import type { Metadata } from 'next';
import Link from 'next/link';
import { listBusinesses, districtMeta } from '@/data/businesses';
import { Reveal } from '@/components/site/reveal';
import { BusinessTile } from '@/components/business/business-tile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of The Lima Plank — how eleven independent businesses landed on one boardwalk-style block in downtown Lima, Ohio.',
};

export default function AboutPage() {
  const businesses = listBusinesses();

  return (
    <>
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <div className="eyebrow">About · {districtMeta.name}</div>
          <h1 className="heading-xl mt-4 max-w-[16ch] text-ink-300">
            One block.{' '}
            <span className="font-script text-moss-500 not-italic font-medium">
              Eleven small ideas.
            </span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-300/80 sm:text-xl">
            {districtMeta.description}
          </p>
        </div>
      </section>

      <section className="border-y border-ink-300/10 bg-linen/60 py-20 lg:py-28">
        <div className="mx-auto grid max-w-page gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal as="div" className="lg:col-span-5">
            <div className="eyebrow">The idea</div>
            <h2 className="heading-lg mt-4 text-ink-300">
              A street built by{' '}
              <span className="font-script text-ember-400 not-italic font-medium">neighbors</span>.
            </h2>
          </Reveal>
          <Reveal as="div" delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink-300/80 lg:col-span-7">
            <p>
              The Plank started with a half-empty block and a stubborn idea: bring back the kind of street where
              you can get a haircut, a cup of coffee, a hand-thrown bowl, and a quart of brine — without ever
              moving your car.
            </p>
            <p>
              Each storefront is independently owned. We share a sidewalk, a coat of paint, and the
              expectation that the bar is high. Some shops are new. Some are old Lima institutions that
              moved over. All of them answer their own door.
            </p>
            <p>
              First Fridays of every month, we stay open late and the whole block treats it as a party. Come
              walk it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow">By the numbers</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg mt-4 text-ink-300">A small block with a long shelf.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: 'Storefronts', value: `${businesses.length}` },
              { label: 'Block address', value: '100 – 160' },
              { label: 'City', value: districtMeta.city },
              { label: 'Block since', value: `${districtMeta.founded}` },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="card-paper p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-plank-500/80">
                    {s.label}
                  </div>
                  <div className="mt-3 font-display text-3xl leading-tight text-ink-300 sm:text-4xl">
                    {s.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-300/10 py-20 lg:py-28">
        <div className="mx-auto max-w-page px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow">The roster</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg mt-4 text-ink-300">The eleven, in order down the street.</h2>
          </Reveal>
          <ul className="mt-12 space-y-2">
            {businesses.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/${b.slug}`}
                  className="group flex items-center gap-5 rounded-xl border border-transparent px-3 py-4 transition hover:border-ink-300/15 hover:bg-linen"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-300/40 w-10 shrink-0">
                    {String(b.order).padStart(2, '0')}
                  </span>
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                    <BusinessTile business={b} variant="thumb" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl text-ink-300 sm:text-2xl">{b.name}</span>
                    <span className="block text-sm text-ink-300/55">{b.category}</span>
                  </span>
                  <span
                    className="hidden font-mono text-[10px] uppercase tracking-[0.32em] sm:block"
                    style={{ color: b.accent }}
                  >
                    View →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="heading-lg text-ink-300">Visit us.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg text-ink-300/75">
              {districtMeta.contact.email} · {districtMeta.city}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/businesses" className="btn-primary">
                Browse all storefronts
              </Link>
              <a href={`mailto:${districtMeta.contact.email}`} className="btn-ghost">
                Email the Plank
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
