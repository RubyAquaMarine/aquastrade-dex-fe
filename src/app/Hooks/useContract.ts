import { useContractReads, useAccount } from "wagmi";
import { rubyStakerABI } from '../Abi/rubystaker'
import { rubyStakerAddress } from "../Constants/addresses";
import { useMemo } from "react";

const contract = {
  addressOrName: rubyStakerAddress.address,
  contractInterface: rubyStakerABI,
};

export const useGetContractRubyStaker = () => {
  const { address } = useAccount();

  const result = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: "rubyToken",
      },
      {
        ...contract,
        functionName: "rewardsDuration",
      },
      {
        ...contract,
        functionName: "lockDuration",
      },
      {
        ...contract,
        functionName: "totalSupply",
      },
      {
        ...contract,
        functionName: "earnedBalances",
        args: [address ?? "0x0000000000000000000000000000000000000001"],
      },
      {
        ...contract,
        functionName: "claimableRewards",
        args: [address ?? "0x0000000000000000000000000000000000000001"],
      },
      {
        ...contract,
        functionName: "withdrawableBalance",
        args: [address ?? "0x0000000000000000000000000000000000000001"],
      },
      {
        ...contract,
        functionName: "unlockedBalance",
        args: [address ?? "0x0000000000000000000000000000000000000001"],
      },
      {
        ...contract,
        functionName: "totalBalance",
        args: [address ?? "0x0000000000000000000000000000000000000001"],
      },
      {
        ...contract,
        functionName: "rewardPerToken",
        args: [0],
      },
      {
        ...contract,
        functionName: "rewardPerToken",
        args: [1],
      },
    ],
  });

  return useMemo(() => result, [result]);
};