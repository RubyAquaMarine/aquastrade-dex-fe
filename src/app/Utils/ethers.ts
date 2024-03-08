import * as React from 'react'
import { type PublicClient, usePublicClient, WalletClient } from 'wagmi'
import { providers } from 'ethers'
import { type HttpTransport } from 'viem'
import { getWalletClient } from '@wagmi/core'

export function publicClientToProvider(publicClient: PublicClient) {
    const { chain, transport } = publicClient
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
    }
    console.error("publicClientToProvider:chainId  ", chain.id )
    if (transport.type === 'fallback')
        return new providers.FallbackProvider(
            (transport.transports as ReturnType<HttpTransport>[]).map(
                ({ value }) => new providers.JsonRpcProvider(value?.url, network),
            ),
        )
    return new providers.JsonRpcProvider(transport.url, network)
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
    console.error("useEthersProvider:chainId  ", chainId )
    const publicClient = usePublicClient({ chainId: chainId || 1  })// default to $ETH  { chainId: chainId || 1 }
    return React.useMemo(() => publicClientToProvider(publicClient), [publicClient])
}

export function walletClientToSigner(walletClient: WalletClient) {

    const { account, chain, transport } = walletClient;
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
    };

    console.error("walletClientToSigner:chainId  ", chain.id)

    const provider = new providers.Web3Provider(transport, network);
    const signer = provider.getSigner(account.address);

    return signer;
}

export async function getEthersSigner({ chainId }: { chainId?: number } = {}) {
    console.error("getEthersSigner:chainId  ", chainId )
    const walletClient = await getWalletClient({ chainId: chainId || 1 });// default to $ETH
    if (!walletClient) return undefined;
    return walletClientToSigner(walletClient);

}
