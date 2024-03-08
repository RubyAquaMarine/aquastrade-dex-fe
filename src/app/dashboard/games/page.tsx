
"use client"

import { useState } from 'react';
import { Inter } from 'next/font/google'
import styles from '../../Styles/Links.module.css'
import { useNetwork, useSwitchNetwork } from "wagmi";
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const { chain: activeChain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const [notification, setNotification] = useState('');
  const [targetedChainID, setTargetedChainID] = useState(0);

  /* todo
if the user doesn't have the network within the MM already, then switching doesn't prompt 
  */

  const handleLinkClickRubySwap = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetChainId: number
  ) => {
    if (activeChain) {
      if (activeChain.id !== targetChainId) {
        event.preventDefault(); // Prevent the link from forwarding
        const mess = `Please switch network to ChainID ${targetChainId} to access this link.`;//Please select ChainID: {targetedChainID}
        setNotification(mess);
        setTargetedChainID(targetChainId);
        /*
        toast.error(mess, {
          position: "top-center",
          autoClose: 1000, // Auto-close the notification after 5 seconds
        });
        */
        switchNetwork?.(targetChainId);
      }
    }
  };
//391845894
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className={styles.p_styled}>
          <ul>

          <li>
              <a href="https://play.blockbrawlers.com/me" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 391845894)}>Block Brawlers</a>
            </li>
            
            <li>
              <a href="https://app.cryptoblades.io/#/?chain=SKALE" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 1026062157)}>CryptoBlades</a>
            </li>
            <li>
              <a href="https://motodex.openbisea.com/?chain=skale" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 1482601649)}>MotoDex</a>
            </li>
            <li>
              <a href="https://play.mystrios.com/Game" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 1482601649)}>Mystrios</a>
            </li>
            <li>
              <a href="https://platformer.dirtroad.dev/" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 1482601649)}>Platformer</a>
            </li>

            <li>
              <a href="https://tankwars.zone/" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 1482601649)}>TankWars</a>
            </li>

            <li>
              <a href="https://untitledplatformer.io/play/" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 644937893)}>Untitled - 32-bit</a>
            </li>
            <li className={styles.spaceDouble}>
              <a href="https://www.voxelverse.ca/" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 1482601649)}>Prospectors NFT</a>
            </li>



           
            <li><b>Coming Soon</b></li>
            <li>
              <a href="https://www.flightforce4.com/" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 1)}>Flight Force 4</a>
            </li>

            <li>
              <a href="https://loe-staging-game.primebitgames.com/" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 80001)}>Legends of Elysium</a>
            </li>

            <li>
              <a href="https://www.flightforce4.com/" target="_blank" onClick={(event) => handleLinkClickRubySwap(event, 644937893)}>0xBattlegrounds</a>
            </li>

            
          </ul>
        </p>
        <div>

          <p>Connected to {activeChain && activeChain.name} | {activeChain && activeChain.id} </p>
         

          {targetedChainID !== 0 && targetedChainID !== activeChain?.id ? (<div><p>Please select ChainID: {targetedChainID}</p></div>) : (<div>Select Game</div>)}


        </div>
      </div>
    </main>
  );
};
export default Home;
