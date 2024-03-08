# Packages

- next: 13.4.13
- react: 18.2.0
- viem: 1.5.3
- wagmi: 1.3.9
- ethers: 5.7.2

# Install
1. clone repo
2. cd next-web3-app
3. `yarn install`
4. `yarn dev`

## structure 
- /scr/app/page.tsx (Home Page : header + nav + body + footer)
- - brawlchain
- - dashboard
- - swap/[nameOfExchange] : ```SwapPanel.tsx``` contains all the widgets , dex swap panels etc. 
- - user 
- - perp
 
 Make new *App Routes*
- create  a new directory within the /app folder. (lower-case)
- /src/app/folderNameIsTheRoutingUrl 
- - folders with `Upper-case` are utils,components,etc

## Features
- Metamask with ledger supported
- Injected Wallet supported (Frame)
- WalletConnect (v2 supported) 
- powered by skale rpc and block explorer apis 
- - switch between all supported skale chains
- Token List for any wallet (connected or not connected), 
- - switch networks in wallet(Metamask/Frame) to reload page data
- - /src/app/user/[walletAddress] : `http://localhost:3000/user/AnyWalletAddress`
- - /src/app/dashboard/ruby : `http://localhost:3000/dashboard/ruby` (staking $RUBY)

# wagmi
- wagmi 1.3.9 is missing wss for all skalechains ( waiting for next release) - https://github.com/wagmi-dev/references/pull/429/files

# wallet connect 
- display a message asking the user to change their wallet’s chain and then allow them to reconnect through WalletConnect in your app.

research : https://portal.thirdweb.com/react/react.walletconnect


# coinflip 
- coinflip needs SKL Token approval to SC address : 0xB8b7735EDEc30F0E5b57689D0F02F087A6D55005 (SKL)
- 0x94C9c65c9f828703A716642E316CcE302Cdd1661 (AQUA)

# todo 
- WalletConnect : network switching
- test coinbase wallet 
- `ledger wagmi connector` is trying to use walletConnect v1 
- support chainid 1 etherscan explorer 
- - need api key : https://docs.etherscan.io/getting-started/creating-an-account
- - defaults to `EuropaHub` if user not connected
- header with navigation and connect button -> connect button triggers popup -> popup includes the wagmin connection button selection
- powered by Skale needs to link to the correct block explorer (if connected else link to skale.space)
- support for nfts type ERC-721 (name, symbol, data doesn't exist: what else can we show for nft?)
- - list what number , token.id ? 

- Squid Router - https://github.com/0xsquid/widget-integrations/tree/main/packages/next-app#install-the-widget 
- - https://widget.squidrouter.com/

## bugs 
- removed coinbase and ledger due to wss connection to `walletConnect.com` repeated errors , look into v1 or v2 is being used
- - https://github.com/WalletConnect/walletconnect-monorepo/issues/1686 && https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src
-- rubyexchange widget needs to prompt user to switch network to europaHub 

possible fix: enabling CSP's connect-src to * on the page where I struggled to open the WalletConnect modal.
