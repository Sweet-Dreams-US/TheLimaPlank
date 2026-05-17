'use client';

import { motion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span' | 'section' | 'article' | 'h1' | 'h2' | 'h3' | 'p' | 'li';
};

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
