"use client";

/*

 - must approve token to Smart Contract ( ui doesn't handle any token approve as of yet)
 - all buttons are wired up to use the same SC functions : flipCoin()

*/

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { http, parseEther, parseUnits, getContract } from "viem";
import {
  useAccount,
  useNetwork,
  useSwitchNetwork,
  useContractWrite as europaMarketPlaceBuy,
  useContractWrite as europaMarketPlaceCancel,
  useContractWrite as rubyWithdraw,
  useContractWrite as rubyReward,
  usePrepareContractWrite,
  useContractRead,
  UseContractReadConfig
} from "wagmi";

import styles_button from "@/app/Styles/Toggle.module.css";

import { marketplaceABI } from "@/app/Abi/europaMarketPlace";

const MARKETPLACE_ADDRESS = "0xc44A8E52A835c77932eB8747bD7E979c27308660"; //todo : make constants

const inter = Inter({ subsets: ["latin"] });

const Home = () => {


  // THIS IS WAGMI 
  const { chain: activeChain } = useNetwork();
  const [targetedChainID, setTargetedChainID] = useState(0);
  const { switchNetwork } = useSwitchNetwork();
  const { address, isConnected } = useAccount();

  // to create new input forms
  const [inputs, setInputs] = useState(["", ""]); // todo :add more inputs by ,''
  const [notification, setNotification] = useState("");


  useEffect(() => {
  //  const contract = getContract({ address: MARKETPLACE_ADDRESS, abi: marketplaceABI, client: clientP })
    const getSigner = async () => {

    };

    if (address && activeChain) {
      getSigner();
    }

  }, [address, activeChain]);


  // A button requires a description, but input tabs don't

  // for each description, a buttun is created 
  const buttonDescriptions = ["NFT ID", "Amount"];
  // input the Text to display on the button
  const buttonLogicTexts = ["Retreive NFT", "Buy NFT"];
  /*
      data: tx,
      write: mint,
      isLoading: isMintLoading,
      isError: isMintError,
      isSuccess: isMintSuccess,
  */

  // buy nft 
  const { write: buyNFT } = europaMarketPlaceBuy({
    address: MARKETPLACE_ADDRESS,
    abi: marketplaceABI,
    functionName: "buy",
    args: [
      parseUnits("0", 0),
      parseEther("0", "wei")
    ],
  });


  const { write: cancelListing } = europaMarketPlaceCancel({
    address: MARKETPLACE_ADDRESS,
    abi: marketplaceABI,
    functionName: "cancelListing",
  });


  const { data: coinFlipWins, isError, isLoading } = useContractRead({
    address: MARKETPLACE_ADDRESS,
    abi: marketplaceABI,
    functionName: 'items',
    args: [parseEther('0.000000000000000001', "wei")],
  })

  // Creates new input and is required to 
  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  function getInputValue(index: number) {
    if (index === 0) {
      return inputs[0];// ID COLLECTION
    }
    if (index === 1) {
      return inputs[1];//  ETHER AMOUNT 
    }
    // Add more conditions as needed
  }

  /*
    main logic for sc interactions
  */
  const handleButtonClick = (index: number) => {
    switch (index) {
      case 0:
        buyNFT({
          args: [parseUnits(inputs[0], 0), parseEther(inputs[1], "wei")],
        });

        break;
      case 1:
        buyNFT({
          args: [parseUnits(inputs[0], 0), parseEther(inputs[1], "wei")],
        });

        break;
      case 2:
        cancelListing();
        break;
      default:
        break;
    }



  };


  /* todo
    if the user doesn't have the network within the MM already, then switching doesn't prompt 
  */

  const handleLinkClickRubySwap = (
    // event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    targetChainId: number
  ) => {
    if (activeChain) {
      if (activeChain.id !== targetChainId) {
        event.preventDefault(); // Prevent the link from forwarding
        const mess = `Please switch network to ChainID ${targetChainId} to access this link.`; //Please select ChainID: {targetedChainID}
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

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <div>
        {/** Handles Network switching to Europa Hub */}
        {2046399126 !== activeChain?.id ? (
          <div>
            <p>Please select ChainID: 2046399126</p>
            <button onClick={(event) => handleLinkClickRubySwap(event, 2046399126)} className={styles_button.toggleButton}>
              Switch Network
            </button>
          </div>
        ) : (
          <div>
            Connected to {activeChain && activeChain.name} | {activeChain && activeChain.id}
          </div>
        )}
      </div>
      {/** Grid to show buttons and available functions */}
      <div className="grid grid-cols-5 gap-1 w-full">


        <div className="p-4">
          <div className="space-y-2">
            {/** Handle input values from cells */}
            {inputs.map((value, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={getInputValue(index)} // Call a function to get the appropriate value
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="border rounded p-0.2 w-full"
                  placeholder={` Enter ${buttonDescriptions[index]}`}
                />
              </div>
            ))}
          </div>
        </div>



        <div className="p-4">
          <div className="space-y-2">
            {buttonDescriptions.map((description, index) => (
              <p key={index}> <button
                className={styles_button.toggleButton}
                onClick={() => handleButtonClick(index)}

              >
                {buttonLogicTexts[index]}
              </button></p>
            ))}
          </div>
        </div>

        <ul className={styles_button.toggleButton}>

          <li>Show Next available Bronze NFT : 0.03 ETH </li>
          <li className={styles_button.toggleText}> 30000000000000000 wei</li>
          <li>Show Next available Silver NFT : 0.5 ETH</li>
          <li className={styles_button.toggleText}> 500000000000000000 wei</li>
          <li>Show Next available Gold NFT : 1.5 ETH</li>
          <li className={styles_button.toggleText}>1500000000000000000 wei</li>
        
          
        </ul>


      </div>
    </main>
  );
};
export default Home;