"use client"
import React from "react";
import { useAccount, useConnect, useDisconnect, useSignMessage, useBalance } from 'wagmi'
import { FaSpinner } from "react-icons/fa6"

import styles from '../Styles/ConnectWallet.module.css';
import button_styles from '../Styles/Toggle.module.css';

const ConnectWallet = () => {
    const { connect, connectors, isLoading, pendingConnector } = useConnect();
    const { address, isConnected } = useAccount();
    const { data, isError, } = useBalance({
        address: address,
    })
    const { disconnect } = useDisconnect();

    if (data) {
        console.error(" User wallet sfuel balance", data)
    }


    /* Show connector buttons to the user if the user is not connected 
    if connected: show the wallet address , and native balance(ETH,BNB,ETC) 
    */
    return (
        <div className={styles.connectButton}>
            {!isConnected ? (<div> Connect Wallet</div>) : (<div> Balance: {!isError && data?.formatted} {!isError && data?.symbol} </div>)}
            {!isConnected ? (
                connectors.map((connector) => (
                    <ul key={connector.id} >
                        <li className={styles.customList}>
                            <button className={styles.toggleButton}
                                disabled={!connector.ready}
                                key={connector.id}
                                onClick={() => {
                                    connect({ connector });
                                }}
                            >{isLoading && connector.id === pendingConnector?.id && (
                                <FaSpinner />
                            )}
                                {address}
                                {connector.id}
                            </button>
                        </li>
                    </ul>
                ))
            ) : (
                <div>

                    <button className={button_styles.toggleButton}
                        onClick={() => disconnect()}
                    >
                        logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default ConnectWallet;