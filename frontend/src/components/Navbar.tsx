"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import ToggleMode from "@/components/ToggleMode";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnect } from "wagmi";

const Navbar = () => {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const { connect, connectors } = useConnect();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum && window.ethereum.isMiniPay) {
      setIsMiniPay(true);
      const miniPayConnector = connectors.find(c => c.name === 'MiniPay');
      if (miniPayConnector) {
        connect({ connector: miniPayConnector });
      }
    }
  }, [connect, connectors]);

  return (
    <nav className="border-b border-b-gray-100 dark:border-b-card py-1 lg:mb-7 lg:py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="font-bold lg:text-lg">
              MerchantPay
            </Link>
          </div>

          <div className="flex items-center gap-x-1">
            <ToggleMode />
            {!isMiniPay && (
              <ConnectButton
                showBalance={false}
                chainStatus={"icon"}
                accountStatus={"avatar"}
              />
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;