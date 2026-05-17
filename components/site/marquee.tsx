import type { ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export function Marquee({ children, speed = 45, className = '' }: MarqueeProps) {
  return (
    <div className={`mask-fade-x relative overflow-hidden ${className}`}>
      <div
        className="flex w-[200%] animate-marquee gap-12 whitespace-nowrap will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex w-1/2 shrink-0 items-center justify-around gap-12">{children}</div>
        <div className="flex w-1/2 shrink-0 items-center justify-around gap-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
