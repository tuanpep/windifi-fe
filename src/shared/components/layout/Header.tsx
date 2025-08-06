'use client';

import { ConnectWalletButton } from '@/features/connect-wallet/components/ConnectWalletButton';
import { ConnectWalletDialog } from '@/features/connect-wallet/components/ConnectWalletDialog';
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  LuBookOpen,
  LuExternalLink,
  LuGlobe,
  LuMenu,
  LuWind,
  LuX,
} from 'react-icons/lu';

const externalLinks = [
  { label: 'Documentation', href: '/docs', icon: LuBookOpen },
  { label: 'GitHub', href: 'https://github.com', icon: LuExternalLink },
  { label: 'Discord', href: 'https://discord.gg', icon: LuExternalLink },
];

export function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { open: isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      borderBottom="1px"
      borderColor="border.subtle"
      bg="bg.subtle"
      backdropFilter="blur(10px)"
      position="sticky"
      top={0}
      zIndex="sticky"
      boxShadow="sm"
    >
      <Container maxW="7xl">
        <HStack justify="space-between" align="center" py={4}>
          {/* Logo and Brand */}
          <HStack gap={3} flexShrink={0}>
            <Icon as={LuWind} boxSize={8} color="brand.400" />
            <VStack align="start" gap={0}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="brand.500"
                letterSpacing="tight"
                className="wind-text"
                lineHeight="1"
              >
                Windifi
              </Text>
              <Badge
                colorScheme="brand"
                variant="subtle"
                fontSize="xs"
                px={2}
                py={0.5}
                borderRadius="full"
                bg="rgba(14, 165, 233, 0.1)"
                color="brand.400"
                border="1px"
                borderColor="rgba(14, 165, 233, 0.2)"
                backdropFilter="blur(10px)"
                lineHeight="1"
              >
                Beta
              </Badge>
            </VStack>
          </HStack>

          {/* Right Side Actions */}
          <HStack gap={4} flexShrink={0}>
            {/* Language Selector */}
            {!isMobile && (
              <Button
                variant="ghost"
                size="sm"
                color="fg.muted"
                _hover={{
                  color: 'brand.400',
                  bg: 'rgba(14, 165, 233, 0.05)',
                }}
                transition="all 0.2s ease"
              >
                <HStack gap={2}>
                  <Icon as={LuGlobe} boxSize={4} />
                  <Text fontSize="sm">EN</Text>
                </HStack>
              </Button>
            )}

            {/* Wallet Connection */}
            <ConnectWalletButton />

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                variant="ghost"
                size="sm"
                color="fg.muted"
                _hover={{
                  color: 'brand.400',
                  bg: 'rgba(14, 165, 233, 0.05)',
                }}
                transition="all 0.2s ease"
                onClick={onToggle}
                aria-label="Toggle navigation menu"
              >
                <Icon as={isOpen ? LuX : LuMenu} boxSize={5} />
              </IconButton>
            )}
          </HStack>
        </HStack>

        {/* Mobile Menu - Simplified with only external links */}
        {isMobile && isOpen && (
          <VStack
            gap={2}
            py={4}
            borderTop="1px"
            borderColor="border.subtle"
            bg="bg.subtle"
            backdropFilter="blur(10px)"
          >
            {/* External Links */}
            <Box w="full" pt={2}>
              <Text fontSize="xs" color="fg.subtle" px={4} pb={2}>
                Resources
              </Text>
              {externalLinks.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  w="full"
                  justifyContent="start"
                  color="fg.muted"
                  _hover={{
                    color: 'brand.400',
                    bg: 'rgba(14, 165, 233, 0.05)',
                  }}
                  transition="all 0.2s ease"
                  fontWeight="medium"
                  fontSize="sm"
                  onClick={onClose}
                >
                  <HStack gap={3} w="full" justify="start">
                    <Icon as={item.icon} boxSize={4} />
                    <Text>{item.label}</Text>
                  </HStack>
                </Button>
              ))}
            </Box>
          </VStack>
        )}
      </Container>

      {/* Wallet Connection Dialog */}
      <ConnectWalletDialog />
    </Box>
  );
}
