'use client';

import {
  Box,
  Button,
  HStack,
  Icon,
  Popover,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

import { NETWORK_CHAINS } from '@/shared/constants/networks';

const networkChains = NETWORK_CHAINS;

export function NetworkSelector() {
  const [selectedNetwork, setSelectedNetwork] = useState(networkChains[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={(details) => setIsOpen(details.open)}
      positioning={{ placement: 'bottom-end' }}
    >
      <Popover.Trigger asChild>
        <Button
          width={200}
          variant="ghost"
          size="sm"
          color="fg.muted"
          _hover={{
            color: 'brand.400',
            bg: 'rgba(14, 165, 233, 0.05)',
          }}
          transition="all 0.2s ease"
          px={3}
          h="36px"
          minW="auto"
          w="auto"
        >
          <HStack gap={2}>
            <Box p={1} bg="bg.subtle" borderRadius="full">
              <Image
                src={selectedNetwork.iconUrl}
                alt={selectedNetwork.label}
                width={20}
                height={20}
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              {selectedNetwork.label}
            </Text>
            <Icon as={LuChevronDown} boxSize={4} />
          </HStack>
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content
            bg="bg.subtle"
            border="1px"
            borderColor="border.subtle"
            boxShadow="lg"
            w="200px"
          >
            <Popover.Body p={2}>
              <VStack gap={1} align="stretch">
                {networkChains.map((chain) => (
                  <Button
                    key={chain.label}
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
                    onClick={() => {
                      setSelectedNetwork(chain);
                      setIsOpen(false);
                    }}
                  >
                    <HStack gap={3} w="full" justify="start">
                      <Box p={1} bg="bg.subtle" borderRadius="full">
                        <Image
                          src={chain.iconUrl}
                          alt={chain.label}
                          width={16}
                          height={16}
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      <Text>{chain.label}</Text>
                    </HStack>
                  </Button>
                ))}
              </VStack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
