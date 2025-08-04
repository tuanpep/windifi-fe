'use client';

import { Badge, Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={8} maxW="7xl" mx="auto">
      <VStack gap={12} align="center">
        {/* Hero Section */}
        <VStack gap={6} textAlign="center" maxW="3xl">
          <VStack gap={4}>
            <Badge
              colorScheme="brand"
              variant="subtle"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(234, 179, 8, 0.1)"
              color="brand.400"
              border="1px"
              borderColor="rgba(234, 179, 8, 0.2)"
              backdropFilter="blur(10px)"
            >
              🚀 Next-Generation DeFi Platform
            </Badge>
            <Heading
              size="2xl"
              color="brand.500"
              textShadow="glow.brand"
              letterSpacing="tight"
              lineHeight="shorter"
            >
              Welcome to Windifi
            </Heading>
          </VStack>
          <Text fontSize="xl" color="fg.muted" fontWeight="medium">
            Your next-generation cryptocurrency management platform
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
