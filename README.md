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
- - swap/[nameOfExchange] : `SwapPanel.tsx` contains all the widgets , dex swap panels etc.
- - user
- - perp

Make new _App Routes_

- create a new directory within the /app folder. (lower-case)
- /src/app/folderNameIsTheRoutingUrl
- - folders with `Upper-case` are utils,components,etc

## Features

- Metaport 1.0 and 2.0
- Metamask with ledger supported
- Injected Wallet supported (Frame)
- powered by skale rpc and block explorer apis
- - switch between all supported skale chains
- Token List for any wallet (connected or not connected),
- - switch networks in wallet(Metamask/Frame) to reload page data
- - /src/app/user/[walletAddress] : `http://localhost:3000/user/AnyWalletAddress`
- - /src/app/dashboard/ruby : `http://localhost:3000/dashboard/ruby` (staking $RUBY)
- Game: Coinflip , try to win the loot.
- - 0xB8b7735EDEc30F0E5b57689D0F02F087A6D55005 (SKL)
- - 0x94C9c65c9f828703A716642E316CcE302Cdd1661 (AQUA)

# todo
- upgrade to wagmi + viem 2.0
- marketplace
- perps
  See repo [aquastrade-fe](https://github.com/RubyAquaMarine/aquastrade-fe) (coming soon)
