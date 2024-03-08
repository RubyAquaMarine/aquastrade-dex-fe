"use client";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getEthersSigner } from "../Utils/ethers";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from "../Utils/config";


/* Test different Swap Widget UIs */
import SwapLifi from "./SwapLifi";
import SwapMeson from "./SwapMeson";
import SwapAqua from "./SwapAqua";
import SwapRuby from "./SwapRuby";


const SwapPanel = () => {
  const { address } = useAccount();
  const path = usePathname();
  const dappType = path;
  const addressWallet = address;
  const { chain } = useNetwork();

  const publicClient = usePublicClient({
    chainId: chain?.id || 1,
  });

  const [chainName, setChainName] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);

  useEffect(() => {
    const getSigner = async () => {
      console.error("useEffect: Chain or address changed");
      if (chain) {
        const signer = await getEthersSigner({ chainId: Number(chain?.id) }); // todo
        setSigner(signer);
        setChainName(chain.name);
      }
    };

    if (addressWallet && chain) {
      getSigner();
    }
  }, [addressWallet, chain]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>
          {" "}
          <Link href="/dashboard"> Back </Link>
        </p>

        {dappType == "/swap/rubyexchange" ? (
          <DAppProvider config={DAPP_CONFIG}>
            <SwapRuby />
          </DAppProvider>
        ) : (
          <p></p>
        )}

        {dappType == "/swap/aquadex" ? (
          <DAppProvider config={DAPP_CONFIG}>
            <SwapAqua />
          </DAppProvider>
        ) : (
          <p></p>
        )}

        {dappType == "/swap/uniswap" ? (
          <div className="Uniswap">
            <SwapWidget />
          </div>
        ) : (
          <p></p>
        )}

        {dappType == "/swap/lifi" ? <SwapLifi /> : <p></p>}

        {dappType == "/swap/meson" ? <SwapMeson /> : <p></p>}
      </div>
    </main>
  );
};

export default SwapPanel;
