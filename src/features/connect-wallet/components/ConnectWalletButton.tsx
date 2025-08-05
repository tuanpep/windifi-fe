import { Button } from '@chakra-ui/react';
import { useConnectWalletStore } from '../store/connect-wallet-store';

export function ConnectWalletButton() {
  const { setIsOpen } = useConnectWalletStore();

  return (
    <Button
      colorScheme="brand"
      size="sm"
      onClick={() => setIsOpen(true)}
      bg="gradient.wind"
      color="white"
      border="1px"
      borderColor="brand.400"
      _hover={{
        bg: 'gradient.primary',
        boxShadow: 'glow.wind',
      }}
      transition="all 0.3s ease"
      fontWeight="medium"
    >
      Connect Wallet
    </Button>
  );
}
