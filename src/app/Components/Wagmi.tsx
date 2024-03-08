"use client";
import React, { useEffect, useState } from "react";
import { configureChains } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { WagmiConfig, createConfig, mainnet } from "wagmi";

// web3 wallet connectors
import { MetaMaskConnector } from "@wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "@wagmi/connectors/injected";
//import { LedgerConnector } from 'wagmi/connectors/ledger'
//import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// wallet connect v2 chain object
//import { skaleBlockBrawlers } from '@wagmi/core/chains'

// wallet connect v1 chain object
import {
  skaleEuropa,
  skaleEuropaTestnet,
  goerli,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
} from "@wagmi/core/chains";

const skaleChains = [
  mainnet,
  goerli,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
];

// todo : waiting for wagmi new version to use skale websocket
const { publicClient, webSocketPublicClient } = configureChains(skaleChains, [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({
      chains: skaleChains,
      options: {
        shimDisconnect: true,
      },
    }),

    new InjectedConnector({
      chains: skaleChains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),

    new CoinbaseWalletConnector({
      chains: skaleChains,
      options: {
        appName: "wagmi",
      },
    }),
    /* connection works but websocket tries to connect   
        // v1 walletConnect - https://wagmi.sh/react/connectors/ledger#options-walletconnect-v1
        new LedgerConnector({
          chains: skaleChains,
          options: {
            enableDebugLogs: true,
          },
        }),

        new WalletConnectConnector({
          chains: skaleChains,
          options: {
            projectId: '4a22daadfc8f2c6d599a993403314255',
            showQrModal: true
          },
        }),
*/
  ],
  //  webSocketPublicClient,
});

const WagmiProvider = ({ children }: any) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default WagmiProvider;
