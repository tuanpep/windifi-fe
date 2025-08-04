'use client';

import { Button, Dialog } from '@chakra-ui/react';
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
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Connect Wallet</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body />
          <Dialog.Footer />
          <Dialog.CloseTrigger asChild>
            <RiCloseLine size={24} />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
