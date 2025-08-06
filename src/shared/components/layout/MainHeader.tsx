'use client';

import { ConnectWalletButton } from '@/features/connect-wallet/components/ConnectWalletButton';
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { LuBell, LuSearch, LuSettings } from 'react-icons/lu';

export function MainHeader() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="bg.subtle"
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor="border.subtle"
      px={6}
      py={4}
    >
      <HStack justify="space-between" align="center" w="full">
        {/* Left side - Page title and breadcrumb */}
        <HStack gap={4} flexShrink={0}>
          <Text fontSize="xl" fontWeight="semibold" color="fg.default">
            Dashboard
          </Text>
          <Text fontSize="sm" color="fg.muted">
            Welcome back to Windifi
          </Text>
        </HStack>

        {/* Center - Search bar (hidden on mobile) */}
        {!isMobile && (
          <Box flex="1" maxW="400px" mx={8} position="relative">
            <Icon
              as={LuSearch}
              color="fg.muted"
              boxSize={4}
              position="absolute"
              left={3}
              top="50%"
              transform="translateY(-50%)"
              zIndex={1}
              pointerEvents="none"
            />
            <Input
              placeholder="Search tokens, pools, or addresses..."
              variant="subtle"
              bg="bg.muted"
              border="1px"
              borderColor="border.subtle"
              pl={10}
              _hover={{
                borderColor: 'border.default',
              }}
              _focus={{
                borderColor: 'brand.400',
                bg: 'bg.default',
              }}
              fontSize="sm"
            />
          </Box>
        )}

        {/* Right side - Actions */}
        <HStack gap={3} flexShrink={0}>
          {/* Notifications */}
          <IconButton
            variant="ghost"
            size="sm"
            color="fg.muted"
            _hover={{
              color: 'brand.400',
              bg: 'rgba(14, 165, 233, 0.05)',
            }}
            transition="all 0.2s ease"
            aria-label="Notifications"
          >
            <Icon as={LuBell} boxSize={5} />
          </IconButton>

          {/* Settings */}
          <IconButton
            variant="ghost"
            size="sm"
            color="fg.muted"
            _hover={{
              color: 'brand.400',
              bg: 'rgba(14, 165, 233, 0.05)',
            }}
            transition="all 0.2s ease"
            aria-label="Settings"
          >
            <Icon as={LuSettings} boxSize={5} />
          </IconButton>

          {/* Wallet Connection */}
          <ConnectWalletButton />
        </HStack>
      </HStack>
    </Box>
  );
}
