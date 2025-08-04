import { Button } from '@chakra-ui/react';
import { useConnectWalletStore } from '../store/connect-wallet-store';

export function ConnectWalletButton() {
  const { setIsOpen } = useConnectWalletStore();

  return (
    <Button color="brand.500" size="sm" onClick={() => setIsOpen(true)}>
      Connect Wallet
    </Button>
  );
}
