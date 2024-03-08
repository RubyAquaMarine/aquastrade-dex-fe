// @ts-nocheck
"use client";

/*

 - must approve token to Smart Contract ( ui doesn't handle any token approve as of yet)
 - all buttons are wired up to use the same SC functions : flipCoin()

*/

import { useState } from "react";
import { Inter } from "next/font/google";
import {  http, parseEther } from "viem";
import {
  useAccount,
  useNetwork,
  useSwitchNetwork,
  useContractWrite as europaCoinFlip,
  useContractWrite as europaCoinFlipWithdraw,
  useContractWrite as rubyWithdraw,
  useContractWrite as rubyReward,
  usePrepareContractWrite,
  useContractRead
} from "wagmi";

import styles_button from "@/app/Styles/Toggle.module.css";
import { coinflipABI } from "@/app/Abi/europaCoinflip";
import { useGetContractRubyStaker } from "@/app/Hooks/useContract";
import { useReadonlyNetworkStates } from "@usedapp/core/dist/esm/src/providers/network/readonlyNetworks/context";

const COIN_FLIP_ADDRESS = "0x94C9c65c9f828703A716642E316CcE302Cdd1661"; //todo : make constants

const inter = Inter({ subsets: ["latin"] });



const Home = () => {
  const { chain: activeChain } = useNetwork();
  const [inputs, setInputs] = useState([""]); // todo :add more inputs by ,''
  const [targetedChainID, setTargetedChainID] = useState(0);
  const { switchNetwork } = useSwitchNetwork();
  const [notification, setNotification] = useState("");
  const { address, isConnected } = useAccount();

  

 

  //read contract
  const { data: rubyUser } = useGetContractRubyStaker();

  //todo reading contracts hasn't worked yet
  console.log("address ", address, typeof address, " | ", rubyUser, typeof rubyUser);

  const buttonDescriptions = ["AQUA"];

  const buttonLogicTexts = ["flip AQUA"];
  /*
      data: tx,
      write: mint,
      isLoading: isMintLoading,
      isError: isMintError,
      isSuccess: isMintSuccess,
  */
  const { write: flipCoin } = europaCoinFlip({
    address: COIN_FLIP_ADDRESS,
    abi: coinflipABI,
    functionName: "flipCoin",
    args: [parseEther(inputs[0], "wei")],
  });
  const { write: withdraw } = europaCoinFlipWithdraw({
    address: COIN_FLIP_ADDRESS,
    abi: coinflipABI,
    functionName: "WithdrawAll",
  });


  const { data : coinFlipWins, isError, isLoading } = useContractRead({
    address: COIN_FLIP_ADDRESS,
    abi: coinflipABI,
    functionName: 'totalWins',
    args: [address],
  })

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  function getInputValue(index: number) {
    if (index === 0) {
      return inputs[0];
    }
    // Add more conditions as needed
  }

  /*
    main logic for sc interactions
  */
  const handleButtonClick = (index: number) => {
    //flip SKL @ index = 0
    flipCoin({
      args: [parseEther(inputs[0], "wei")],
    });


   
  };

  const handleButtonClick_Column5 = (index: number) => {
    // withdrawal SKL
    withdraw();
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
                  placeholder={`Input ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            {/** Handle button clicks  from cells */}
            {/** COLOUMN 2 -- FLIP  */}
            {buttonDescriptions.map((description, index) => (
              <p key={index}>
                {" "}
                <button className={styles_button.toggleButton} onClick={() => handleButtonClick(index)}>
                  {buttonLogicTexts[index]}
                </button>
              </p>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            {/** Handle Wins  from cells */}
            {/** COLOUMN 3 -- WIN  */}
            {buttonDescriptions.map((description, index) => (
              <p key={index}>
                {" "}
                <button className={styles_button.toggleButton} onClick={() => handleButtonClick(index)}>
                  Wins: {coinFlipWins}
                </button>{" "}
              </p>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            {/** Handle Wins  from cells */}
            {/** COLOUMN 4 -- LOSS */}
            {buttonDescriptions.map((description, index) => (
              <p key={index}>
                {" "}
                <button className={styles_button.toggleButton} onClick={() => handleButtonClick(index)}>
                  Losses:
                </button>{" "}
              </p>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            {/** Handle withdraws from cells */}
            {/** COLOUMN 5 -- withdraw */}
            {buttonDescriptions.map((description, index) => (
              <p key={index}>
                {" "}
                <button className={styles_button.toggleButton} onClick={() => handleButtonClick_Column5(index)}>
                  Withdraw {description}
                </button>{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
/*
return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
        <p>Connected to {activeChain && activeChain.name} | {activeChain && activeChain.id} </p>

        <div className="flex flex-wrap w-full">
          <div className="flex flex-col w-1/3 p-4">
            <div className="space-y-2 flex-grow">
              {inputs.map((value, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className="border rounded p-2"
                    placeholder={`Input ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-1/3 p-4">
            <div className="space-y-2 flex-grow">

              {buttonDescriptions.map((description, index) => (
                <p key={index}> <button
                  onClick={() => handleButtonClick(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {buttonLogicTexts[index]}
                </button></p>
              ))}

            </div>
          </div>

          <div className="flex flex-col w-1/3 p-4">
            <div className="space-y-2 flex-grow">

              {buttonDescriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}

            </div>
          </div>

        </div>

      </div>
    </main>
  );
*/
