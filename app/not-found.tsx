import Link from 'next/link';
import { listBusinesses } from '@/data/businesses';
import { BusinessTile } from '@/components/business/business-tile';

export default function NotFound() {
  const businesses = listBusinesses().slice(0, 6);
  return (
    <section className="pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-page px-6 lg:px-10">
        <div className="eyebrow">404 · Door not found</div>
        <h1 className="heading-xl mt-4 max-w-[18ch] text-ink-300">
          That storefront's not on{' '}
          <span className="font-script text-ember-400 not-italic font-medium">the Plank.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300/75">
          Try one of these instead, or head back to the directory.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {businesses.map((b) => (
            <Link
              key={b.slug}
              href={`/${b.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-ink-300/10"
            >
              <div className="absolute inset-0 transition-transform group-hover:scale-105">
                <BusinessTile business={b} variant="thumb" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-300/70 to-transparent p-3">
                <div className="font-display text-sm text-paper-100">{b.shortName}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/businesses" className="btn-ghost">
            All storefronts
          </Link>
        </div>
      </div>
    </section>
  );
}
