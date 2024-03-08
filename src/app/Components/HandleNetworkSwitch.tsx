"use client"
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react';
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

export default function HandleNetworkSwitch() {
    const { chain: activeChain } = useNetwork()
    const { address } = useAccount();
    const { chains, error, isLoading, pendingChainId, switchNetwork } =
        useSwitchNetwork();



    useEffect(() => {

        const handleLinkClickRubySwap = () => {
            if (activeChain) {
                if (activeChain.id !== 2046399126) {
                    switchNetwork?.(2046399126);
                }
            }
        };

        if (address && activeChain) {
            handleLinkClickRubySwap();
        }
    }, [address, activeChain,switchNetwork]);



}