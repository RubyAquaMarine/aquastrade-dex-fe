
"use client"
import React, { useEffect} from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import MetaportWidgetV2 from '../../Components/MetaportWidgetV2.0'

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

 
  /*
  change link url depending if user is connected
  */
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> {!address ? (


        <div>Coonect Wallet</div>) : (<MetaportWidgetV2 />)}

      </div>
    </main>
  )
}

export default Home;
