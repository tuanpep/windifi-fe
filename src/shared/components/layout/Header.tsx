'use client';

import { Badge, Box, Flex, HStack, Text } from '@chakra-ui/react';
import { ConnectWalletButton } from '../../../features/connect-wallet/components/ConnectWalletButton';
import { ConnectWalletDialog } from '../../../features/connect-wallet/components/ConnectWalletDialog';

export function Header() {
  return (
    <Box
      as="header"
      borderBottom="1px"
      borderColor="border.subtle"
      bg="bg.subtle"
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Flex justify="space-between" align="center">
        <HStack gap={3}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="brand.500"
            letterSpacing="tight"
          >
            Windifi
          </Text>
          <Badge
            colorScheme="brand"
            variant="subtle"
            fontSize="xs"
            px={2}
            py={1}
            borderRadius="full"
            bg="rgba(234, 179, 8, 0.1)"
            color="brand.400"
            border="1px"
            borderColor="rgba(234, 179, 8, 0.2)"
          >
            Beta
          </Badge>
        </HStack>
        <ConnectWalletButton />
      </Flex>
      <ConnectWalletDialog />
    </Box>
  );
}
