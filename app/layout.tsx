import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'C5C | Premium Construction & Custom Builds in Sydney',
  description: 'C5C offers expert construction services, including new builds, knockdown rebuilds, and custom home designs. Experience quality craftsmanship and seamless project management.',
  keywords: ['construction', 'custom builds', 'sydney builders', 'new home construction', 'knockdown rebuild', 'project management'],
  authors: [{ name: 'C5C Team' }],
  openGraph: {
    title: 'C5C | Premium Construction & Custom Builds',
    description: 'Expert construction services in Sydney. Quality craftsmanship and seamless project management.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'C5C Construction',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C5C | Premium Construction & Custom Builds',
    description: 'Expert construction services in Sydney. Quality craftsmanship and seamless project management.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
