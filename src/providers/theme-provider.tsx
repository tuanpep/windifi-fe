'use client';

import { ChakraProvider } from '@chakra-ui/react';
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from '../shared/components/ui/color-mode';
import { system } from '../theme';

export function ThemeProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
