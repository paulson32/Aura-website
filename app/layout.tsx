import type {Metadata} from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Aura Creative Agency — Premium Digital Experiences',
  description: 'We help startups and ambitious businesses grow through strategy, branding, UI/UX design, websites, and digital marketing.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#0B0B0F] text-white antialiased selection:bg-purple-500/30 selection:text-white overflow-x-hidden">{children}</body>
    </html>
  );
}

