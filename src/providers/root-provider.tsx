import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
};

export default RootProvider;
