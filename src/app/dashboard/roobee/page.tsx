
"use client"

import { useState } from 'react';
import { Inter } from 'next/font/google'
import { parseEther } from 'viem'
import {
  useAccount,
  useNetwork, useSwitchNetwork,
  useContractWrite as rubyStake,
  useContractWrite as rubyExit,
  useContractWrite as rubyWithdraw,
  useContractWrite as rubyReward,
  usePrepareContractWrite,
} from "wagmi";

import styles_button from '@/app/Styles/Toggle.module.css';
import { rubyStakerABI } from '@/app/Abi/rubystaker'
import { useGetContractRubyStaker } from '@/app/Hooks/useContract';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const { chain: activeChain } = useNetwork();
  const [inputs, setInputs] = useState(['', '', '', '', '']);
  const [targetedChainID, setTargetedChainID] = useState(0);
  const { switchNetwork } = useSwitchNetwork();
  const [notification, setNotification] = useState('');
  const { address, isConnected } = useAccount();

  //read contract
  const { data: rubyUser } =  useGetContractRubyStaker();

  //todo reading contracts hasn't worked yet 
  console.log("address ", address, typeof address, " | ", rubyUser, typeof rubyUser)

  const buttonDescriptions = [
    'Stake RUBY to earn AMM fees ',
    'Lock RUBY to earn Penalty fees',
    'Claim Rewards (AMM & Penalty fees)',
    'Exit Staked RUBY',
    'Exit All (Staked & Locked)',
  ];

  const buttonLogicTexts = [
    'Stake RUBY',
    'Lock RUBY',
    'Claim Rewards ',
    'Exit Staked RUBY',
    'Exit All',
  ];
  /*
      data: tx,
      write: mint,
      isLoading: isMintLoading,
      isError: isMintError,
      isSuccess: isMintSuccess,
  */
  const { write: stake } = rubyStake({
    address: '0x2998f0b516b1eaCbb06442B1c13cB2FFc865B449',
    abi: rubyStakerABI,
    functionName: 'stake',
  })

  const { write: withdraw } = rubyWithdraw({
    address: '0x2998f0b516b1eaCbb06442B1c13cB2FFc865B449',
    abi: rubyStakerABI,
    functionName: 'withdraw',
  })

  const { write: exit } = rubyExit({
    address: '0x2998f0b516b1eaCbb06442B1c13cB2FFc865B449',
    abi: rubyStakerABI,
    functionName: 'exit',
  })

  const { write: reward } = rubyReward({
    address: '0x2998f0b516b1eaCbb06442B1c13cB2FFc865B449',
    abi: rubyStakerABI,
    functionName: 'getReward',
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

    if (index === 1) {
      return inputs[1];
    }

    if (index === 2) {
      console.log("Fetch User Rewards:: ", rubyUser)
      return 'show rewards';// todo fetch user rewards
    }

    if (index === 3) {
      //  return "45633.347578374";// todo fetch user staked amount
    }
    if (index === 4) {
      return "show staked amount";// todo fetch user staked amount
    }
    // Add more conditions as needed
  }

  /*
    main logic for sc interactions
  */
  const handleButtonClick = (index: number) => {
    switch (index) {
      case 0:
        // Stake
        stake({
          args: [parseEther(inputs[0], 'wei'), false]
        })
        console.log('Staking Ruby');
        break;
      case 1:
        // Lock 
        stake({
          args: [parseEther(inputs[1], 'wei'), true]
        })
        console.log('Locking Ruby');
        break;
      case 2:
        reward({
          args: []
        })
        console.log('Claiming reward');
        break;
      case 3:
        withdraw({
          args: [parseEther(inputs[3], 'wei')]
        })
        console.log('Withdraw Staked Ruby');
        break;
      case 4:
        exit({
          args: []
        })
        console.log('Withdraw Staked+Penalty Ruby');
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


  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>

      <div>
        {/** Handles Network switching to Europa Hub */}
        {2046399126 !== activeChain?.id ? (<div><p>Please select ChainID: 2046399126</p>
          <button
            onClick={(event) => handleLinkClickRubySwap(event, 2046399126)}
            className={styles_button.toggleButton}
          >Switch Network</button></div>) : (<div>Connected to {activeChain && activeChain.name} | {activeChain && activeChain.id}</div>)}
      </div>
      {/** Grid to show buttons and available functions */}
      <div className="grid grid-cols-3 gap-1 w-full">
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

        <div className="p-4">
          <div className="space-y-2">
            {buttonDescriptions.map((description, index) => (
              <p key={index}>{description}</p>
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