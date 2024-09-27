import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celoAlfajores, celo } from "wagmi/chains";
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

export const config = getDefaultConfig({
  appName: "MerchantPay - easy links, fast payment!",
  projectId: projectId,
  chains: [celo, celoAlfajores],
  ssr: true,
});
