'use client';

import { Box, HStack, Text, useBreakpointValue } from '@chakra-ui/react';
import { HeaderActions } from './HeaderActions';
import { SearchBar } from './SearchBar';

export function MainHeader() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      bg="bg.default"
      borderBottom="1px solid"
      borderColor="border.subtle"
      px={6}
      py={2}
    >
      <HStack justify="space-between" align="center" w="full">
        {/* Left side - Page title and breadcrumb */}
        <HStack gap={4} flexShrink={0}>
          <Text fontSize="xl" fontWeight="semibold">
            Dashboard
          </Text>
        </HStack>

        {/* Center - Search bar (hidden on mobile) */}
        {!isMobile && <SearchBar />}

        {/* Right side - Actions */}
        <HeaderActions />
      </HStack>
    </Box>
  );
}
