'use client';

import { Dialog, IconButton } from '@chakra-ui/react';
import { RiCloseLine } from 'react-icons/ri';
import { useConnectWalletStore } from '../store/connect-wallet-store';

export function ConnectWalletDialog() {
  const { isOpen, setIsOpen } = useConnectWalletStore();

  return (
    <Dialog.Root
      size="lg"
      open={isOpen}
      onOpenChange={() => setIsOpen(false)}
      lazyMount
    >
      <Dialog.Backdrop bg="overlay.heavy" backdropFilter="blur(8px)" />
      <Dialog.Positioner>
        <Dialog.Content
          bg="bg.subtle"
          border="1px"
          borderColor="border.subtle"
          borderRadius="xl"
          backdropFilter="blur(16px)"
          boxShadow="glass-lg"
          _hover={{
            borderColor: 'brand.400',
            boxShadow: 'glow.wind, glass-lg',
          }}
          transition="all 0.3s ease"
        >
          <Dialog.Header borderBottom="1px" borderColor="border.subtle" pb={4}>
            <Dialog.Title
              color="fg"
              fontSize="xl"
              fontWeight="semibold"
              className="wind-text"
            >
              Connect Wallet
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body py={6}>
            <Dialog.Description color="fg.muted">
              Choose your preferred wallet to connect to Windifi
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer borderTop="1px" borderColor="border.subtle" pt={4} />
          <Dialog.CloseTrigger asChild>
            <IconButton
              position="absolute"
              top={4}
              right={4}
              size="sm"
              variant="ghost"
              color="fg.muted"
              _hover={{
                color: 'brand.400',
                bg: 'bg.emphasized',
                boxShadow: 'glow.wind',
              }}
              transition="all 0.3s ease"
            >
              <RiCloseLine size={20} />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
