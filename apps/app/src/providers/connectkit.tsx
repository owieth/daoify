'use client';

import {
  ConnectKitProvider as WalletProvider,
  getDefaultConfig,
} from 'connectkit';
import { ReactNode } from 'react';
import { WagmiConfig, configureChains, createConfig, sepolia } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { ALCHEMY_KEY } from '../contracts/contracts';

export default function ConnectKitProvider({
  children,
}: {
  children: ReactNode;
}) {
  const alchemyId = ALCHEMY_KEY;

  const { publicClient, chains } = configureChains(
    [sepolia],
    [alchemyProvider({ apiKey: alchemyId })],
  );

  const config = createConfig(
    getDefaultConfig({
      // Required API Keys
      alchemyId, // or infuraId
      walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

      // Required
      appName: 'Your App Name',

      // Optional
      appDescription: 'Your App Description',
      appUrl: 'https://family.co', // your app's url
      appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)

      chains,
      publicClient,
    }),
  );

  return (
    <WagmiConfig config={config}>
      <WalletProvider>{children}</WalletProvider>
    </WagmiConfig>
  );
}
