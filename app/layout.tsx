import type { Metadata } from 'next';
import { fontDisplay, fontBody, fontScript, fontMono } from '@/lib/fonts';
import { SiteNav } from '@/components/site/site-nav';
import { SiteFooter } from '@/components/site/site-footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Lima Plank — Eleven storefronts on a single block in Lima, OH',
    template: '%s · The Lima Plank',
  },
  description:
    'The Lima Plank is a collective of eleven independently owned businesses on a single boardwalk-style block in downtown Lima, Ohio — coffee, ceramics, pinball, brine, and the people who keep them running.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'The Lima Plank',
    description: 'Eleven storefronts. One main street. Lima, Ohio.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontScript.variable} ${fontMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteNav />
        <main id="main-content" className="relative">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
