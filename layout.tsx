import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zara Malik | Mathematics Graduate | Data Analysis & Machine Learning',
  description:
    'Zara Malik is a BS Mathematics graduate specializing in finance, data analysis, machine learning, and generative AI solutions.',
  keywords: ['Zara Malik', 'Data Analyst', 'Machine Learning', 'Portfolio', 'Finance', 'Mathematics'],
  openGraph: {
    title: 'Zara Malik | Data Analysis & Machine Learning',
    description:
      'Turning quantitative analysis into practical, user-focused solutions.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://example.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
