'use client';

import { Box, Icon, Input } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchBar({
  placeholder = 'Search tokens, pools, or addresses...',
  value,
  onChange,
}: SearchBarProps) {
  return (
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
        placeholder={placeholder}
        variant="subtle"
        bg="bg.muted"
        border="1px"
        borderColor="border.subtle"
        pl={10}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
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
  );
}
