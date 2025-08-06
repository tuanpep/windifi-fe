'use client';

import {
    Badge,
    Box,
    Button,
    HStack,
    Icon,
    Text,
    VStack,
} from '@chakra-ui/react';
import {
    LuArrowRightLeft,
    LuBookOpen,
    LuChrome,
    LuExternalLink,
    LuGlobe,
    LuTrendingUp,
    LuWallet,
} from 'react-icons/lu';

const navigationItems = [
  { label: 'Home', href: '/', icon: LuChrome },
  { label: 'Swap', href: '/swap', icon: LuArrowRightLeft },
  { label: 'Portfolio', href: '/portfolio', icon: LuTrendingUp },
  { label: 'Wallet', href: '/wallet', icon: LuWallet },
];

const externalLinks = [
  { label: 'Documentation', href: '/docs', icon: LuBookOpen },
  { label: 'GitHub', href: 'https://github.com', icon: LuExternalLink },
  { label: 'Discord', href: 'https://discord.gg', icon: LuExternalLink },
];

export function Navbar() {
  return (
    <VStack
      h="100%"
      gap={0}
      align="stretch"
      bg="bg.subtle"
      borderRight="1px"
      borderColor="border.subtle"
    >
      {/* Header/Brand Section */}
      <Box p={4} borderBottom="1px" borderColor="border.subtle">
        <VStack align="center" gap={3}>
          <HStack align="center" gap={2}>
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
          </HStack>
        </VStack>
      </Box>

      {/* Navigation Menu */}
      <VStack flex="1" gap={1} p={2} align="stretch">
        <Text fontSize="xs" color="fg.subtle" px={3} py={2} fontWeight="medium">
          Navigation
        </Text>
        {navigationItems.map((item) => (
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
            _active={{
              bg: 'rgba(14, 165, 233, 0.1)',
            }}
            transition="all 0.2s ease"
            fontWeight="medium"
            fontSize="sm"
            h="40px"
            px={3}
          >
            <HStack gap={3} w="full" justify="start">
              <Icon as={item.icon} boxSize={4} />
              <Text>{item.label}</Text>
            </HStack>
          </Button>
        ))}
      </VStack>

      {/* External Links Section */}
      <VStack gap={1} p={2} align="stretch">
        <Text fontSize="xs" color="fg.subtle" px={3} py={2} fontWeight="medium">
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
            h="36px"
            px={3}
          >
            <HStack gap={3} w="full" justify="start">
              <Icon as={item.icon} boxSize={4} />
              <Text>{item.label}</Text>
            </HStack>
          </Button>
        ))}
      </VStack>

      {/* Language Selector */}
      <Box p={2}>
        <Button
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
          h="36px"
          px={3}
        >
          <HStack gap={3} w="full" justify="start">
            <Icon as={LuGlobe} boxSize={4} />
            <Text>English</Text>
          </HStack>
        </Button>
      </Box>
    </VStack>
  );
}
