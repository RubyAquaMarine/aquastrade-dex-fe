"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import styles from '../Styles/Links.module.css'

import MetaportWidget from '../Components/MetaportWidget'

// if wallet is not connected
const wallet = '0x8609E3D519756a7B15a6240e501e641AF25a0c2F';

const Home = () => {

  const { chain: activeChain } = useNetwork()
  const { address } = useAccount();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  useEffect(() => {

    const getSigner = async () => {


    };

    if (address && activeChain) {
      getSigner();
    }
  }, [address, activeChain]);

  const handleLinkClickRubySwap = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (activeChain) {
      if (activeChain.id !== 2046399126) {
        event.preventDefault(); // Prevent the link from forwarding
        alert("Please switch to chainID 2046399126 (Skale Europa Chain) to access DEX.");
        switchNetwork?.(2046399126);
      }
    }
  };


  /*
  change link url depending if user is connected
  */
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {!address ? (
          <p className={styles.p_styled}>
            <ul>
              <li><Link href="/"> Back (use web3 login)</Link></li>
              <p><b>Features</b></p>
              <li> <Link href={`/user/${wallet}`}>Token List</Link></li>
            </ul>


          </p>
        ) : (
          <p className={styles.p_styled}>
            <ul>
              <li><Link href="/"> Back  </Link></li>
              <li></li>
              <p><b>Features</b></p>
              <li> <Link href={`/dashboard/coinflip`}>Coin Flipper</Link></li>
              <li> <Link href={`/dashboard/metaport`}>MetaPort 2.0</Link></li>
              <li> <Link href={`/user/${address}`}>Token List</Link></li>
              <li> <Link href={`/dashboard/ruby`}>Staking - Ruby</Link></li>

              <p><b>Swap Tokens</b></p>
              <li> <Link href={`/swap/rubyexchange`} onClick={handleLinkClickRubySwap}
              >Ruby Exchange</Link></li>
              <li> <Link href={`/swap/aquadex`} onClick={handleLinkClickRubySwap}
              >Aquas Trade</Link></li>
              <li> <Link href={`/swap/uniswap`}>Uniswap</Link></li>
             
              <li> <Link href={`/swap/lifi`}>Lifi</Link></li>
              <li> <Link href={`/swap/meson`}>Meson</Link></li>

            </ul>

          </p>
        )}



      </div>
      <div> {!address ? (


        <div></div>) : (<MetaportWidget />)}

      </div>
    </main>
  )
}

export default Home;

//  <li><ShowMetaport/></li>
