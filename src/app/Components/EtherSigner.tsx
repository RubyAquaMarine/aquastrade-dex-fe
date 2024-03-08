"use client"
import { getEthersSigner } from "../Utils/ethers";
import styles from '../Styles/Toggle.module.css';
import React, { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";

const Signer = () => {

    const { address } = useAccount();
    const { chain } = useNetwork();
    const [signer, setSigner] = useState<any>(null);

    const [chain_id, setChainID] = useState<any>(null);

    useEffect(() => {

        const getSigner = async () => {
            const signer = await getEthersSigner({ chainId: Number(chain?.id) });// todo 
            setSigner(signer);
            const chain_id = signer?.provider._network.chainId;
            console.log("Signer Exists on Chain ID", chain_id);
            setChainID(chain_id);
        };

        if (address && chain) {
            getSigner();
        }


    }, [address, chain]);

    return (
        <div>
            <p>Chain id: {chain_id}</p>
            {signer ? (

                <p> {address}</p>



            ) : (
                <p> Connect wallet to continue </p>
            )}
        </div>
    );
}

export default Signer;