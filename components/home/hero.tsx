'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { businesses, districtMeta } from '@/data/businesses';

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* layered backdrop */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <SkylineBackdrop />
      </motion.div>

      <div className="mx-auto max-w-page px-6 lg:px-10">
        <motion.div style={{ opacity }} className="max-w-5xl">
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
              <span className="font-script text-ember-400 not-italic font-medium">
                Built one plank at a time.
              </span>
            </SplitLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300/75 sm:text-xl"
          >
            A coffee bar, a ceramics studio, a pickling kitchen, a pinball room, and seven other independently
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
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink-300/10 pt-8 sm:grid-cols-4"
          >
            <StatBlock label="Storefronts" value={`${businesses.length}`} />
            <StatBlock label="Block" value="100 – 160 The Plank" />
            <StatBlock label="City" value="Lima, OH" />
            <StatBlock label="First Friday" value="Open late" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.32em] text-plank-500/80">{label}</div>
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

function SkylineBackdrop() {
  // 11 vertical "plank" bars in business accent colors — abstract storefront skyline
  const accents = businesses.map((b) => b.accent);
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-x-0 bottom-0 flex h-[55%] items-end opacity-[0.18] lg:h-[60%]">
        {accents.map((color, i) => (
          <div
            key={i}
            className="h-full flex-1"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${color}66 35%, ${color} 100%)`,
              transform: `translateY(${(i % 3) * 8}px)`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-paper-100 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 mix-blend-multiply"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0px, transparent 80px, rgba(91,59,34,0.06) 80px, rgba(91,59,34,0.06) 81px)',
        }}
      />
    </div>
  );
}
