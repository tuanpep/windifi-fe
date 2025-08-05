import { Header } from '@/shared/components/layout';
import { Box, Flex } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import RootProvider from '../providers/root-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Windifi - Next-Generation DeFi Swap Platform',
  description:
    'Experience lightning-fast token swaps with the lowest fees and best rates across multiple blockchains. Powered by wind-speed technology for seamless DeFi trading.',
  keywords: 'DeFi, swap, cryptocurrency, blockchain, tokens, trading, windifi',
  authors: [{ name: 'Windifi Team' }],
  openGraph: {
    title: 'Windifi - Next-Generation DeFi Swap Platform',
    description:
      'Lightning-fast token swaps with the lowest fees and best rates',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>
          <Flex direction="column" minH="100vh" bg="bg.subtle">
            <Header />
            <Box as="main" flex="1" bg="bg.subtle">
              {children}
            </Box>
          </Flex>
        </RootProvider>
      </body>
    </html>
  );
}
