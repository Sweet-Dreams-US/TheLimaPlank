'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import type { Business } from '@/data/businesses';
import { BusinessTile } from './business-tile';

export function BusinessHero({ business }: { business: Business }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden min-h-[88svh] flex items-end pb-12 lg:pb-20"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <BusinessTile business={business} variant="hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper-100 via-paper-100/30 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 60% at 50% 100%, ${business.accent}33, transparent 70%)`,
          }}
        />
      </motion.div>

      <div className="mx-auto w-full max-w-page px-6 pt-32 lg:px-10 lg:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em]"
          style={{ color: business.accent }}
        >
          <span className="h-px w-10" style={{ background: business.accent }} />
          {business.category}
          {business.founded && ` · Since ${business.founded}`}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl mt-5 max-w-[14ch] text-ink-300"
        >
          {business.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-3xl font-script text-3xl leading-snug sm:text-4xl"
          style={{ color: business.accent }}
        >
          {business.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300/75 sm:text-xl"
        >
          {business.blurb}
        </motion.p>

        {business.status === 'coming-soon' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-current px-4 py-2 font-mono text-[10px] uppercase tracking-[0.32em]"
            style={{ color: business.accent }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            Coming soon to The Plank
          </motion.div>
        )}
      </div>
    </section>
  );
}
