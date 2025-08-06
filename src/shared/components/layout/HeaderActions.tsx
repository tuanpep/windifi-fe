'use client';

import { ConnectWalletButton } from '@/features/connect-wallet/components/ConnectWalletButton';
import { HStack } from '@chakra-ui/react';
import { NetworkSelector } from './NetworkSelector';

export function HeaderActions() {
  return (
    <HStack gap={3} flexShrink={0}>
      <NetworkSelector />
      <ConnectWalletButton />
    </HStack>
  );
}
