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
  title: 'Windifi - Cryptocurrency Management Platform',
  description: 'Your cryptocurrency management platform',
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
