'use client';

import { Box, Container, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg="bg.default" minH="calc(100vh - 80px)" position="relative">
      <Container maxW="9xl" py={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Home
        </Text>
      </Container>
    </Box>
  );
}
