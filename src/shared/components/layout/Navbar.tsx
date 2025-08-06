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
  LuChrome,
  LuFactory,
  LuTrendingUp,
  LuWallet,
} from 'react-icons/lu';

const navigationItems = [
  { label: 'Home', href: '/', icon: LuChrome },
  { label: 'Markets', href: '/markets', icon: LuTrendingUp },
  { label: 'Swap', href: '/swap', icon: LuArrowRightLeft },
  { label: 'Spot', href: '/spot', icon: LuTrendingUp },
  { label: 'Factory', href: '/factory', icon: LuFactory },
  { label: 'Portfolio', href: '/portfolio', icon: LuWallet },
];

export function Navbar() {
  return (
    <VStack h="100%" gap={0} align="stretch" bg="bg.subtle">
      {/* Header/Brand Section */}
      <Box p={4} borderBottom="1px" borderColor="border.subtle">
        <VStack align="start" gap={3}>
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
      <VStack gap={1} p={2} align="stretch">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            w="full"
            justifyContent="start"
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
    </VStack>
  );
}
