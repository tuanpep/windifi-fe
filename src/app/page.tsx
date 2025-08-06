'use client';

import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import {
  LuActivity,
  LuArrowRight,
  LuArrowUpRight,
  LuCheck,
  LuCoins,
  LuGlobe,
  LuLock,
  LuPercent,
  LuShield,
  LuSparkles,
  LuStar,
  LuTimer,
  LuTrendingUp,
  LuUsers,
  LuWind,
  LuZap,
} from 'react-icons/lu';

// Custom animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.1); }
`;

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

export default function Home() {
  return (
    <Box bg="bg" minH="100vh" position="relative" overflow="hidden">
      {/* Enhanced Background Effects */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="gradient.subtle"
        opacity="0.4"
        zIndex="0"
      />

      {/* Animated Floating Elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w="300px"
        h="300px"
        bg="gradient.wind"
        borderRadius="full"
        opacity="0.08"
        filter="blur(60px)"
        animation={`${pulse} 8s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        top="40%"
        right="10%"
        w="250px"
        h="250px"
        bg="gradient.sky"
        borderRadius="full"
        opacity="0.06"
        filter="blur(50px)"
        animation={`${pulse} 10s ease-in-out infinite 2s`}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="15%"
        w="200px"
        h="200px"
        bg="gradient.air"
        borderRadius="full"
        opacity="0.05"
        filter="blur(40px)"
        animation={`${float} 12s ease-in-out infinite 1s`}
      />

      <Container maxW="9xl" position="relative" zIndex="1">
        {/* Hero Section - Enhanced */}
        <VStack gap={16} py={24} textAlign="center">
          <VStack gap={8} maxW="5xl">
            {/* Enhanced Badge */}
            <Badge
              colorScheme="brand"
              variant="subtle"
              fontSize="sm"
              px={6}
              py={3}
              borderRadius="full"
              bg="rgba(14, 165, 233, 0.15)"
              color="brand.400"
              border="1px"
              borderColor="rgba(14, 165, 233, 0.3)"
              backdropFilter="blur(20px)"
              boxShadow="0 4px 20px rgba(14, 165, 233, 0.2)"
              _hover={{
                boxShadow: '0 8px 30px rgba(14, 165, 233, 0.3)',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.3s ease"
            >
              <HStack gap={3}>
                <Icon as={LuSparkles} boxSize={4} />
                <Text fontWeight="semibold">
                  Revolutionary DeFi Swap Platform
                </Text>
                <Icon as={LuSparkles} boxSize={4} />
              </HStack>
            </Badge>

            {/* Enhanced Main Heading */}
            <VStack gap={6}>
              <Heading
                size="2xl"
                color="brand.500"
                letterSpacing="tight"
                lineHeight="shorter"
                className="wind-text"
                fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              >
                Swap Tokens with&nbsp;
                <Text
                  as="span"
                  bg="gradient.wind"
                  bgClip="text"
                  color="transparent"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent)',
                    backgroundSize: '200% 100%',
                    animation: `${shimmer} 3s ease-in-out infinite`,
                  }}
                >
                  Wind Speed
                </Text>
              </Heading>

              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="fg.muted"
                fontWeight="medium"
                maxW="3xl"
                lineHeight="tall"
              >
                Experience lightning-fast token swaps with the lowest fees and
                best rates across multiple blockchains. Powered by wind-speed
                technology for seamless DeFi trading.
              </Text>
            </VStack>

            {/* Enhanced CTA Buttons */}
            <HStack gap={6} pt={8} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="gradient.wind"
                color="white"
                border="1px"
                borderColor="brand.400"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  bg: 'gradient.primary',
                  boxShadow: '0 10px 40px rgba(14, 165, 233, 0.4)',
                  transform: 'translateY(-3px)',
                }}
                _active={{
                  transform: 'translateY(-1px)',
                }}
                transition="all 0.3s ease"
              >
                <HStack gap={2}>
                  <Text>Start Swapping Now</Text>
                  <Icon as={LuArrowRight} />
                </HStack>
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="border.subtle"
                color="fg"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{
                  borderColor: 'brand.400',
                  bg: 'rgba(14, 165, 233, 0.05)',
                  boxShadow: '0 4px 20px rgba(14, 165, 233, 0.1)',
                }}
                transition="all 0.3s ease"
              >
                Watch Demo
              </Button>
            </HStack>
          </VStack>

          {/* Enhanced Quick Stats */}
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} w="full" maxW="5xl">
            {[
              {
                label: 'Total Volume',
                value: '$2.5B+',
                icon: LuTrendingUp,
                description: 'Traded volume',
              },
              {
                label: 'Active Users',
                value: '50K+',
                icon: LuUsers,
                description: 'Daily traders',
              },
              {
                label: 'Supported Tokens',
                value: '500+',
                icon: LuCoins,
                description: 'Available pairs',
              },
              {
                label: 'Blockchains',
                value: '12+',
                icon: LuGlobe,
                description: 'Multi-chain support',
              },
            ].map((stat, index) => (
              <VStack
                key={index}
                p={8}
                bg="bg.subtle"
                borderRadius="2xl"
                border="1px"
                borderColor="border.subtle"
                backdropFilter="blur(20px)"
                _hover={{
                  borderColor: 'brand.400',
                  boxShadow: '0 8px 40px rgba(14, 165, 233, 0.2)',
                  transform: 'translateY(-8px)',
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: 'gradient.wind',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Icon as={stat.icon} boxSize={8} color="brand.400" mb={2} />
                <Text fontSize="3xl" fontWeight="bold" color="fg">
                  {stat.value}
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="fg">
                  {stat.label}
                </Text>
                <Text fontSize="sm" color="fg.muted" textAlign="center">
                  {stat.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Enhanced Features Section */}
        <VStack gap={20} py={24}>
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              colorScheme="accent"
              variant="subtle"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(6, 182, 212, 0.1)"
              color="accent.400"
            >
              Why Choose Windifi?
            </Badge>
            <Heading size="xl" color="fg" fontSize={{ base: '3xl', md: '4xl' }}>
              The Future of DeFi Trading
            </Heading>
            <Text fontSize="xl" color="fg.muted" lineHeight="tall">
              Experience the next generation of decentralized trading with our
              innovative platform
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {[
              {
                icon: LuZap,
                title: 'Lightning Fast',
                description:
                  'Complete swaps in under 30 seconds with our optimized routing system',
                color: 'brand.400',
                highlight: '< 30s',
                gradient: 'gradient.wind',
              },
              {
                icon: LuActivity,
                title: 'Best Rates',
                description:
                  'Get the most competitive rates by aggregating liquidity from multiple DEXs',
                color: 'accent.400',
                highlight: '0.1%',
                gradient: 'gradient.secondary',
              },
              {
                icon: LuShield,
                title: 'Secure & Safe',
                description:
                  'Enterprise-grade security with multi-layer protection and insurance',
                color: 'success.400',
                highlight: '100%',
                gradient: 'gradient.success',
              },
              {
                icon: LuGlobe,
                title: 'Multi-Chain',
                description: 'Swap tokens across 12+ blockchains seamlessly',
                color: 'warning.400',
                highlight: '12+',
                gradient: 'gradient.warning',
              },
              {
                icon: LuUsers,
                title: 'User Friendly',
                description:
                  'Intuitive interface designed for both beginners and experts',
                color: 'brand.400',
                highlight: 'Easy',
                gradient: 'gradient.wind',
              },
              {
                icon: LuLock,
                title: 'Non-Custodial',
                description:
                  'You maintain full control of your assets at all times',
                color: 'accent.400',
                highlight: 'Yours',
                gradient: 'gradient.secondary',
              },
            ].map((feature, index) => (
              <VStack
                key={index}
                p={8}
                bg="bg.subtle"
                borderRadius="2xl"
                border="1px"
                borderColor="border.subtle"
                backdropFilter="blur(20px)"
                align="start"
                position="relative"
                overflow="hidden"
                _hover={{
                  borderColor: feature.color,
                  boxShadow: `0 12px 50px ${feature.color}30`,
                  transform: 'translateY(-8px)',
                }}
                transition="all 0.4s ease"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bg: feature.gradient,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <HStack gap={4} w="full" justify="space-between" align="start">
                  <Icon as={feature.icon} boxSize={10} color={feature.color} />
                  <Badge
                    bg={feature.gradient}
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    {feature.highlight}
                  </Badge>
                </HStack>
                <Heading size="md" color="fg" mt={4}>
                  {feature.title}
                </Heading>
                <Text color="fg.muted" lineHeight="tall" fontSize="md">
                  {feature.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Enhanced How It Works Section */}
        <VStack gap={20} py={24}>
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              colorScheme="success"
              variant="subtle"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(20, 184, 166, 0.1)"
              color="success.400"
            >
              How It Works
            </Badge>
            <Heading size="xl" color="fg" fontSize={{ base: '3xl', md: '4xl' }}>
              Swap Tokens in 3 Simple Steps
            </Heading>
            <Text fontSize="xl" color="fg.muted" lineHeight="tall">
              Our streamlined process makes DeFi trading accessible to everyone
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full" maxW="5xl">
            {[
              {
                step: '01',
                title: 'Connect Wallet',
                description: 'Connect your preferred wallet with one click',
                icon: LuUsers,
                time: '5 seconds',
              },
              {
                step: '02',
                title: 'Select Tokens',
                description:
                  'Choose the tokens you want to swap and enter amount',
                icon: LuCoins,
                time: '10 seconds',
              },
              {
                step: '03',
                title: 'Confirm Swap',
                description: 'Review rates and confirm your transaction',
                icon: LuCheck,
                time: '15 seconds',
              },
            ].map((step, index) => (
              <VStack
                key={index}
                p={8}
                bg="bg.subtle"
                borderRadius="2xl"
                border="1px"
                borderColor="border.subtle"
                backdropFilter="blur(20px)"
                position="relative"
                _hover={{
                  borderColor: 'brand.400',
                  boxShadow: '0 12px 50px rgba(14, 165, 233, 0.2)',
                  transform: 'translateY(-8px)',
                }}
                transition="all 0.4s ease"
              >
                <Badge
                  position="absolute"
                  top={-4}
                  left={6}
                  bg="gradient.wind"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="lg"
                  fontWeight="bold"
                  boxShadow="0 4px 20px rgba(14, 165, 233, 0.3)"
                >
                  {step.step}
                </Badge>
                <Icon as={step.icon} boxSize={12} color="brand.400" mt={6} />
                <Heading size="lg" color="fg" textAlign="center" mt={4}>
                  {step.title}
                </Heading>
                <Text
                  color="fg.muted"
                  textAlign="center"
                  lineHeight="tall"
                  fontSize="md"
                >
                  {step.description}
                </Text>
                <HStack gap={2} mt={4}>
                  <Icon as={LuTimer} boxSize={4} color="brand.400" />
                  <Text fontSize="sm" color="brand.400" fontWeight="semibold">
                    {step.time}
                  </Text>
                </HStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Enhanced Supported Networks Section */}
        <VStack gap={16} py={24}>
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              colorScheme="warning"
              variant="subtle"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(245, 158, 11, 0.1)"
              color="warning.400"
            >
              Multi-Chain Support
            </Badge>
            <Heading size="xl" color="fg" fontSize={{ base: '3xl', md: '4xl' }}>
              Trade Across 12+ Blockchains
            </Heading>
            <Text fontSize="xl" color="fg.muted" lineHeight="tall">
              Seamlessly swap tokens across multiple networks with our unified
              interface
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 2, md: 4, lg: 6 }}
            gap={6}
            w="full"
            maxW="6xl"
          >
            {[
              'Ethereum',
              'Polygon',
              'BSC',
              'Arbitrum',
              'Optimism',
              'Avalanche',
              'Solana',
              'Cardano',
              'Polkadot',
              'Cosmos',
              'Tron',
              'Fantom',
            ].map((network, index) => (
              <VStack
                key={index}
                p={6}
                bg="bg.subtle"
                borderRadius="xl"
                border="1px"
                borderColor="border.subtle"
                backdropFilter="blur(20px)"
                _hover={{
                  borderColor: 'brand.400',
                  boxShadow: '0 8px 30px rgba(14, 165, 233, 0.2)',
                  transform: 'translateY(-4px) scale(1.05)',
                }}
                transition="all 0.3s ease"
              >
                <Box
                  w="50px"
                  h="50px"
                  bg="gradient.wind"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 4px 20px rgba(14, 165, 233, 0.3)"
                >
                  <Text fontSize="xs" fontWeight="bold" color="white">
                    {network.slice(0, 2).toUpperCase()}
                  </Text>
                </Box>
                <Text fontSize="sm" color="fg" fontWeight="semibold">
                  {network}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Enhanced Testimonials Section */}
        <VStack gap={20} py={24}>
          <VStack gap={6} textAlign="center" maxW="4xl">
            <Badge
              colorScheme="accent"
              variant="subtle"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(6, 182, 212, 0.1)"
              color="accent.400"
            >
              User Testimonials
            </Badge>
            <Heading size="xl" color="fg" fontSize={{ base: '3xl', md: '4xl' }}>
              Trusted by Thousands of Traders
            </Heading>
            <Text fontSize="xl" color="fg.muted" lineHeight="tall">
              See what our community says about their trading experience
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full" maxW="6xl">
            {[
              {
                name: 'Alex Chen',
                role: 'DeFi Trader',
                content:
                  "Windifi has revolutionized my trading experience. The speed and low fees are unmatched! I've saved thousands in gas fees.",
                rating: 5,
                volume: '$500K+',
                avatar: 'AC',
              },
              {
                name: 'Sarah Johnson',
                role: 'Crypto Investor',
                content:
                  "Finally, a DeFi platform that's both powerful and user-friendly. The multi-chain support is incredible!",
                rating: 5,
                volume: '$1.2M+',
                avatar: 'SJ',
              },
              {
                name: 'Mike Rodriguez',
                role: 'Blockchain Developer',
                content:
                  'The multi-chain support and security features make Windifi my go-to swap platform. Highly recommended!',
                rating: 5,
                volume: '$800K+',
                avatar: 'MR',
              },
            ].map((testimonial, index) => (
              <VStack
                key={index}
                p={8}
                bg="bg.subtle"
                borderRadius="2xl"
                border="1px"
                borderColor="border.subtle"
                backdropFilter="blur(20px)"
                align="start"
                position="relative"
                _hover={{
                  borderColor: 'brand.400',
                  boxShadow: '0 12px 50px rgba(14, 165, 233, 0.2)',
                  transform: 'translateY(-8px)',
                }}
                transition="all 0.4s ease"
              >
                <HStack gap={1} mb={4}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} as={LuStar} color="warning.400" boxSize={5} />
                  ))}
                </HStack>
                <Text color="fg.muted" lineHeight="tall" fontSize="lg" mb={6}>
                  &quot;{testimonial.content}&quot;
                </Text>
                <HStack gap={4} w="full" justify="space-between">
                  <VStack align="start" gap={1}>
                    <Text fontWeight="bold" color="fg" fontSize="lg">
                      {testimonial.name}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {testimonial.role}
                    </Text>
                  </VStack>
                  <VStack align="end" gap={1}>
                    <Box
                      w="40px"
                      h="40px"
                      bg="gradient.wind"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="xs" fontWeight="bold" color="white">
                        {testimonial.avatar}
                      </Text>
                    </Box>
                    <Text fontSize="xs" color="brand.400" fontWeight="semibold">
                      {testimonial.volume}
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Enhanced CTA Section */}
        <VStack gap={12} py={24} textAlign="center">
          <VStack gap={8} maxW="4xl">
            <Badge
              colorScheme="success"
              variant="subtle"
              fontSize="sm"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(20, 184, 166, 0.1)"
              color="success.400"
            >
              Ready to Start?
            </Badge>
            <Heading size="xl" color="fg" fontSize={{ base: '3xl', md: '4xl' }}>
              Join the DeFi Revolution
            </Heading>
            <Text fontSize="xl" color="fg.muted" lineHeight="tall">
              Start trading with the fastest, most secure, and user-friendly
              DeFi platform
            </Text>

            {/* Enhanced Stats */}
            <HStack gap={8} pt={4} flexWrap="wrap" justify="center">
              <VStack gap={1}>
                <HStack gap={2}>
                  <Icon as={LuPercent} color="success.400" boxSize={5} />
                  <Text fontSize="2xl" fontWeight="bold" color="fg">
                    0.1%
                  </Text>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  Lowest Fees
                </Text>
              </VStack>
              <VStack gap={1}>
                <HStack gap={2}>
                  <Icon as={LuTimer} color="brand.400" boxSize={5} />
                  <Text fontSize="2xl" fontWeight="bold" color="fg">
                    &lt; 30s
                  </Text>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  Fastest Swaps
                </Text>
              </VStack>
              <VStack gap={1}>
                <HStack gap={2}>
                  <Icon as={LuShield} color="accent.400" boxSize={5} />
                  <Text fontSize="2xl" fontWeight="bold" color="fg">
                    100%
                  </Text>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  Secure
                </Text>
              </VStack>
            </HStack>

            <HStack gap={6} pt={8} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="gradient.wind"
                color="white"
                border="1px"
                borderColor="brand.400"
                px={10}
                py={7}
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  bg: 'gradient.primary',
                  boxShadow: '0 15px 50px rgba(14, 165, 233, 0.4)',
                  transform: 'translateY(-4px)',
                }}
                _active={{
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              >
                <HStack gap={2}>
                  <Text>Get Started Now</Text>
                  <Icon as={LuArrowUpRight} />
                </HStack>
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="border.subtle"
                color="fg"
                px={10}
                py={7}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{
                  borderColor: 'brand.400',
                  bg: 'rgba(14, 165, 233, 0.05)',
                  boxShadow: '0 8px 30px rgba(14, 165, 233, 0.1)',
                }}
                transition="all 0.3s ease"
              >
                View Documentation
              </Button>
            </HStack>
          </VStack>
        </VStack>

        {/* Enhanced Footer */}
        <VStack gap={8} py={16} borderTop="1px" borderColor="border.subtle">
          <HStack gap={8} justify="center" flexWrap="wrap">
            <HStack gap={3}>
              <Icon as={LuWind} boxSize={6} color="brand.400" />
              <Text fontWeight="bold" color="fg" fontSize="lg">
                Windifi
              </Text>
            </HStack>
            <Text fontSize="sm" color="fg.muted">
              © 2024 Windifi. All rights reserved.
            </Text>
          </HStack>
          <HStack
            gap={8}
            fontSize="sm"
            color="fg.muted"
            flexWrap="wrap"
            justify="center"
          >
            <Text
              _hover={{ color: 'brand.400' }}
              cursor="pointer"
              transition="color 0.2s"
              fontWeight="medium"
            >
              Privacy Policy
            </Text>
            <Text
              _hover={{ color: 'brand.400' }}
              cursor="pointer"
              transition="color 0.2s"
              fontWeight="medium"
            >
              Terms of Service
            </Text>
            <Text
              _hover={{ color: 'brand.400' }}
              cursor="pointer"
              transition="color 0.2s"
              fontWeight="medium"
            >
              Support
            </Text>
            <Text
              _hover={{ color: 'brand.400' }}
              cursor="pointer"
              transition="color 0.2s"
              fontWeight="medium"
            >
              Documentation
            </Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
