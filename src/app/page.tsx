'use client';

import { ConnectWalletButton } from '@/features/connect-wallet/components/ConnectWalletButton';
import { Box, Container, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg="bg" minH="calc(100vh - 80px)" position="relative">
      <Container maxW="9xl" py={8}>
        <VStack gap={8} align="center" justify="center" minH="calc(80vh - 80px)">
          <ConnectWalletButton />
        </VStack>
      </Container>
    </Box>
  );
}
