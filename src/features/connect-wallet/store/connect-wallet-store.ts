import { create } from 'zustand';

export interface WalletInfo {
  address: string;
  chainId: string;
  balance: string;
  isConnected: boolean;
}

export interface ConnectWalletStore {
  // Dialog state
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  // Wallet connection state
  wallet: WalletInfo | null;
  isConnecting: boolean;
  error: string | null;

  // Actions
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  setWallet: (wallet: WalletInfo | null) => void;
  setConnecting: (connecting: boolean) => void;
  setError: (error: string | null) => void;
}

export const useConnectWalletStore = create<ConnectWalletStore>((set, get) => ({
  // Initial state
  isOpen: false,
  wallet: null,
  isConnecting: false,
  error: null,

  // Dialog actions
  setIsOpen: (isOpen: boolean) => set({ isOpen }),

  // Wallet actions
  setWallet: (wallet: WalletInfo | null) => set({ wallet }),
  setConnecting: (connecting: boolean) => set({ isConnecting: connecting }),
  setError: (error: string | null) => set({ error }),

  connectWallet: async () => {
    const { setConnecting, setError, setWallet } = get();

    try {
      setConnecting(true);
      setError(null);

      // TODO: Implement actual wallet connection logic
      // This is a placeholder for the actual implementation
      const mockWallet: WalletInfo = {
        address: '0x1234...5678',
        chainId: '1',
        balance: '0.0',
        isConnected: true,
      };

      setWallet(mockWallet);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Failed to connect wallet'
      );
    } finally {
      setConnecting(false);
    }
  },

  disconnectWallet: () => {
    set({ wallet: null, error: null });
  },
}));
