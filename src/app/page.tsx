import Image from 'next/image'
import Link from 'next/link'
import ConnectWallet from './Components/ConnectWallet';
import Signer from './Components/EtherSigner';
import styles from './Styles/Links.module.css'
import styles_connection from './Styles/ConnectWallet.module.css'

import styles_body from './Styles/MainBody.module.css'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className={styles.p_styled}>
          <ul>

            <li><b>Bridge To Skale</b></li>
            <li> <Link href="https://meson.fi/" target="_blank">Meson - L2 to L2</Link></li>
            <li> <Link href="/dashboard/metaport" target="_blank">Skale - Bridge</Link></li>
          
            <li><b>Bridge To Ethereum </b></li>
            <li> <Link href="https://satellite.money/" target="_blank">Axelar: L2 to L1 </Link></li>
            <li> <Link href="https://cbridge.celer.network/56/1/USDC" target="_blank">cBridge: L2 to L1 </Link></li>
            <li> <Link href="https://bridge.blockscape.network/" target="_blank">Gravity: L1 to L1 </Link></li>
            <li> <Link href="https://app.hop.exchange/#/send?token=ETH" target="_blank">Hop: L2 to L1 </Link></li>
            <li> <Link href="https://jumper.exchange/?fromChain=56&toChain=1" target="_blank">Jumper: L2 to L1 </Link></li>
            <li> <Link href="https://stargate.finance/transfer" target="_blank">LayerZero: L2 to L1 </Link></li>
            <li> <Link href="https://bitcoinbridge.network/bridge" target="_blank">LayerZero: BTC.b</Link></li>
            <li> <Link href="https://bridge.orbitchain.io/ethereum/usdc" target="_blank">OrbitChain: TON</Link></li>
            <li> <Link href="https://app.rango.exchange/" target="_blank">Rango: L2 to L1 </Link></li>
            <li> <Link href="https://app.rocketx.exchange/swap/BNB.binancecoin/ETHEREUM.ethereum/1?from=Binance&to=Ethereum" target="_blank">RocketX: L2 to L1 </Link></li>
            <li> <Link href="https://app.squidrouter.com/" target="_blank">Squid: L2 to L1 </Link></li>
            <li> <Link href="https://www.synapseprotocol.com/" target="_blank">Synapse: L2 to L1 </Link></li>
            <li> <Link href="https://app.thorswap.finance/swap/BTC.BTC_ETH.ETH?sellAmount=0" target="_blank">ThorChain: L1 to L1 </Link></li>
            <li> <Link href="https://www.portalbridge.com/#/transfer" target="_blank">Wormhole: L2 to L1 </Link></li>
            <li> <Link href="https://portalbridge.com/usdc-bridge/" target="_blank">Wormhole: USDC </Link></li>
            <li className={styles.spaceDouble}> <Link href="https://xrpbridge.app/bridge" target="_blank">XRP Bridge </Link></li>

            <li> <Link href="https://skale.space/ecosystem" target="_blank"><b>Skale - Ecosystem</b></Link></li>
            <li> <Link href="https://dappradar.com/rankings/protocol/skale" target="_blank">Skale - DappRadar</Link></li>
            <li> <Link href="https://admin-ui-skale.vercel.app/" target="_blank">Skale - Chain Admin</Link></li>
            <li> <Link href="https://docs.skale.network/" target="_blank">Skale - Docs</Link></li>
            <li> <Link href="https://portal.skale.space/chains" target="_blank">Skale - Chain Nodes</Link></li>
            <li> <Link href="https://l2beat.com/bridges/projects/skale-ima" target="_blank">Skale - L2beats: TVL </Link></li>
            <li className={styles.spaceDouble}> <Link href="https://etherscan.io/address/0x8fB1A35bB6fB9c47Fb5065BE5062cB8dC1687669#writeProxyContract" target="_blank">Skale - L1 Deposit Box</Link></li>


          </ul>
        </p>

        <div>
          <p><ConnectWallet /></p>
        </div>
        <div> <p> <Signer /></p></div>



        <div className={styles_connection.connectButton}>powered by {' '}

          <ul>
            <li>
              <Link href="https://skale.space/" target="_blank">
                <Image
                  src="/SKL.svg"
                  alt="Skale  Network Logo"
                  className="dark:invert"
                  width={36}
                  height={24}
                  priority
                />
              </Link>
            </li>
            <li>
              <Link href="https://skale.space/" target="_blank">
                <Image
                  src="/RAZOR_NAME.svg"
                  alt="Skale  Network Logo"
                  className={styles_body.imageInvert}
                  width={50}
                  height={24}
                  priority
                />
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </main>
  )
}
