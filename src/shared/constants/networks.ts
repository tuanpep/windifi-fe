// Network chains constants

export interface NetworkChain {
  label: string;
  iconUrl: string;
  chainId: string;
  name: string;
}

export const NETWORK_CHAINS: NetworkChain[] = [
  {
    label: 'ETH',
    iconUrl: 'https://cdn.windifi.com/chains/ethereum.png',
    chainId: '1',
    name: 'Ethereum',
  },
  {
    label: 'SOL',
    iconUrl: 'https://cdn.windifi.com/chains/solana.png',
    chainId: '101',
    name: 'Solana',
  },
  {
    label: 'BSC',
    iconUrl: 'https://cdn.windifi.com/chains/bsc.png',
    chainId: '56',
    name: 'Binance Smart Chain',
  },
  {
    label: 'POL',
    iconUrl: 'https://cdn.windifi.com/chains/polygon.png',
    chainId: '137',
    name: 'Polygon',
  },
  {
    label: 'ARB',
    iconUrl: 'https://cdn.windifi.com/chains/arbitrum.png',
    chainId: '42161',
    name: 'Arbitrum',
  },
  {
    label: 'OP',
    iconUrl: 'https://cdn.windifi.com/chains/optimism.png',
    chainId: '10',
    name: 'Optimism',
  },
];
