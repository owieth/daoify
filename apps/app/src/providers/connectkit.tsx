'use client';

import { WagmiConfig, createConfig } from 'wagmi';
import {
  ConnectKitProvider as WalletProvider,
  ConnectKitButton,
  getDefaultConfig,
} from 'connectkit';
import { ReactNode } from 'react';

export default function ConnectKitProvider({
  children,
}: {
  children: ReactNode;
}) {
  const config = createConfig(
    getDefaultConfig({
      // Required API Keys
      alchemyId: process.env.ALCHEMY_ID, // or infuraId
      walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

      // Required
      appName: 'Your App Name',

      // Optional
      appDescription: 'Your App Description',
      appUrl: 'https://family.co', // your app's url
      appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
    }),
  );

  return (
    <WagmiConfig config={config}>
      <WalletProvider>{children}</WalletProvider>
    </WagmiConfig>
  );
}
