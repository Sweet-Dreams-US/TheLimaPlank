'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { businesses, districtMeta } from '@/data/businesses';
import { asset } from '@/lib/asset-path';

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Parallax hero image of the block */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={asset('/hero-block.webp')}
          alt="The Lima Plank — golden hour on an eleven-storefront Main Street block"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* paper-toned gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100/40 via-paper-100/30 to-paper-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper-100/55 via-transparent to-transparent" />
        {/* speckle/film grain */}
        <div aria-hidden className="absolute inset-0 bg-speckle opacity-25 mix-blend-multiply" />
      </motion.div>

      <div className="mx-auto flex min-h-[100svh] max-w-page flex-col justify-end px-6 pb-16 pt-40 lg:px-10 lg:pb-24 lg:pt-44">
        <motion.div style={{ opacity: overlayOpacity }} className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-plank-500"
          >
            <span className="h-px w-10 bg-plank-500/50" />
            {districtMeta.name} · {districtMeta.city} · Est. {districtMeta.founded}
          </motion.div>

          <h1 className="heading-xl mt-4 text-ink-300 sm:mt-6">
            <SplitLine delay={0.15}>Eleven storefronts.</SplitLine>
            <SplitLine delay={0.3}>One main street.</SplitLine>
            <SplitLine delay={0.45}>
              <span className="font-script font-medium not-italic text-ember-400">
                Built one plank at a time.
              </span>
            </SplitLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300/85 sm:text-xl"
          >
            A coffee bar, a ceramics studio, a brining kitchen, a pinball room, and seven other independently
            owned shops — sharing one boardwalk-style block in downtown Lima, Ohio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link href="/businesses" className="btn-primary">
              Browse all {businesses.length} storefronts
              <span aria-hidden>→</span>
            </Link>
            <Link href="/about" className="btn-ghost">
              About The Plank
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink-300/15 pt-8 sm:grid-cols-4"
          >
            <StatBlock label="Storefronts" value={`${businesses.length}`} />
            <StatBlock label="Block" value="100 – 160 The Plank" />
            <StatBlock label="City" value="Lima, OH" />
            <StatBlock label="First Friday" value="Open late" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-300/55"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          initial={{ y: 0, opacity: 0.4 }}
          animate={{ y: 8, opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.4, ease: 'easeInOut' }}
          className="block h-5 w-px bg-current"
        />
      </motion.div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.32em] text-plank-500/85">{label}</div>
      <div className="mt-1.5 font-display text-xl leading-tight text-ink-300 sm:text-2xl">{value}</div>
    </div>
  );
}

function SplitLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-2">
      <motion.span
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
