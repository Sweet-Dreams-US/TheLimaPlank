'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/businesses', label: 'Businesses' },
  { href: '/about', label: 'About' },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-paper-100/85 backdrop-blur-md border-b border-ink-300/10'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="The Lima Plank — Home">
          <PlankMark />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-ink-300 sm:text-xl">
              The Lima Plank
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.32em] text-plank-500 sm:block">
              Eleven storefronts · Lima, OH
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition',
                  active
                    ? 'text-ink-300'
                    : 'text-ink-300/70 hover:text-ink-300 hover:bg-ink-300/5',
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-plank-500" aria-hidden />
                )}
              </Link>
            );
          })}
          <Link href="/businesses" className="btn-primary ml-3 !px-5 !py-2.5 text-sm">
            Visit the Plank →
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-full border border-ink-300/20 p-2 md:hidden"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
            <span
              className={cn(
                'h-px w-4 bg-ink-300 transition',
                mobileOpen && 'translate-y-[3px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-4 bg-ink-300 transition',
                mobileOpen && '-translate-y-[3px] -rotate-45',
              )}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink-300/10 bg-paper-100/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-page flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 font-medium text-ink-300 hover:bg-ink-300/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function PlankMark() {
  return (
    <span
      aria-hidden
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-md bg-plank-500 text-linen shadow-[0_8px_18px_-8px_rgba(91,59,34,0.6)]"
    >
      <span
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 6px, rgba(0,0,0,0.25) 6px, rgba(0,0,0,0.25) 7px)',
        }}
      />
      <span className="relative font-display text-base font-bold leading-none">tlp</span>
    </span>
  );
}
