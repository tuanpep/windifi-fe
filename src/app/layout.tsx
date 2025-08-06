import { Box, Flex } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import RootProvider from '../providers/root-provider';
import { MainHeader, Navbar } from '../shared/components/layout';
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
        style={{ overflow: 'hidden' }}
      >
        <RootProvider>
          <Flex direction="row" h="100vh" bg="bg.default" overflow="hidden">
            {/* Navbar - Fixed width 210px */}
            <Box
              as="nav"
              w="210px"
              h="100vh"
              bg="bg.subtle"
              borderRight="1px"
              borderColor="border.subtle"
              overflowY="auto"
              overflowX="hidden"
              flexShrink={0}
            >
              <Navbar />
            </Box>

            {/* Main content - Fills remaining space */}
            <Box
              as="main"
              flex="1"
              h="100vh"
              overflowY="auto"
              overflowX="hidden"
              bg="bg.default"
            >
              <MainHeader />
              {children}
            </Box>
          </Flex>
        </RootProvider>
      </body>
    </html>
  );
}
