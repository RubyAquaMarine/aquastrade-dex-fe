import * as React from 'react'
import { getEthersSigner } from "../Utils/ethers";

// just a hook to return the value 
export async function GetAddress() {
    const signer = await getEthersSigner();

console.log("Signer contains", signer )



    if (!signer) return undefined;
    const address = signer?.getAddress();
    console.log(" Hook Get Address ", address)
    if (address) {
        return address;
    }
}

