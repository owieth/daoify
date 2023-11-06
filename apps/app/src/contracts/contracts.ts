import { Address, createPublicClient, createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import abi from './ABI.json';

export const ALCHEMY_KEY = 'XArNKer-LPJKx1wygu23ksvBFkEb4Lwn';

export const ALCHEMY_URL = `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`;

export const PUBLIC_PROVIDER = createPublicClient({
  chain: sepolia,
  transport: http(ALCHEMY_URL),
}) as any;

export const WALLET_PROVIDER = createWalletClient({
  chain: sepolia,
  transport: http(ALCHEMY_URL),
});

export const CONTRACT_ADDRESS_SEPOLIA =
  '0x3cc232b06e306f83ce3e729aa7f4673e250bf570';

export const CONTRACT = {
  address: CONTRACT_ADDRESS_SEPOLIA as Address,
  abi,
};
