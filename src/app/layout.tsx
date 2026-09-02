import type { Metadata, Viewport } from 'next';
import './globals.css';
import ThemeWrapper from '@/components/ThemeWrapper';
import { SITE_META } from '@/data/content';

export const viewport: Viewport = {
  themeColor: '#0A0F0C',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  keywords: [
    'Digital Agency', 'Web Development', 'Mobile App Development',
    'AI Agents', 'Automation', 'UI UX Product Design', 'Digital Marketing',
    'Teglax', 'Full-stack agency', 'Okara Pakistan'
  ],
  authors: [{ name: 'Sarim', url: 'https://teglax.com' }],
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    type: 'website',
    url: 'https://teglax.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-[#3DDC84] selection:text-[#0A0F0C] min-h-screen">
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
