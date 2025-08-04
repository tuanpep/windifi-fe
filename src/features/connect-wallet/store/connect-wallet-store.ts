import { create } from 'zustand';

export const useConnectWalletStore = create<ConnectWalletStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));

export interface ConnectWalletStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
