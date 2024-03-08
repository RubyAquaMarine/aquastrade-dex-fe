"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import styles from '../Styles/Header.module.css'; // You can create a CSS module for styling


import styles_button from '../Styles/Toggle.module.css';
import DarkModeToggle from './DarkModeToggleV2'
import Popup from './popup';

import switchingNetworkOnClick from './HandleNetworkSwitch'

import logo from '../../../public/aquastrade.png'; // Import your PNG logo
import Image from 'next/image'

/*
 <Image
      src="https://example.com/hero.jpg"
      alt="Landscape picture"
      width={800}
      height={500}
    />
*/

// client components 
const Navbar = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  
  ///Users/imac/ruby/RubyAquaMarine/aqua-dex-fe/public/aquastrade.png
  //AQUA3.png
  return (
    <header className={styles.header}>
      <nav>

        <div className={styles.align_test}>

          <div className={styles.float_left}>
            <ul className={styles.navListTight}>
              <li>
                <Link href="/">
                  <Image
                    src="/AQUA1.png"
                    alt="AquasTrade Logo"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>

              <li className={styles.navItemLogo}>
                <Link href="/">
                  AquasTrade
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.float_center}>
            <ul className={styles.navListWide}>
            <li className={styles.navItem}>
                <Link href="/dashboard/metaport">
                  Bridge
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/dashboard/games">
                  Games
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/dashboard/marketplace">
                  MarketPlace
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.float_right}>


            <ul className={styles.navListTight}>
              <li className={styles.navItemInvert}> <DarkModeToggle /></li>
              <li className={styles.navItemInvert}>
                <Image
                  src="/list.png"
                  alt="menu"

                  width={22}
                  height={22}
                  priority
                />
              </li>


            </ul>


          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar



/*
<nav class="sc-fVuMRb GNQZb"><div class="sc-dkcEsn hfATka"><div class="sc-JHWBx csUjgK"><a title="Go to homepage" href="/" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 169.883 151.379" class="mobile-only" fill="#ffffff"><path id="Union_54" data-name="Union 54" d="M-932.1-6343.891l-34.968-60.656A15.111,15.111,0,0,0-980.089-6412h-69.935a15.035,15.035,0,0,0-13.015,7.516l-34.968,60.656a15.187,15.187,0,0,0,0,15.035l34.968,60.652a14.952,14.952,0,0,0,13.015,7.52h69.935a15.032,15.032,0,0,0,13.016-7.52l34.968-60.652A15.308,15.308,0,0,0-932.1-6343.891Zm-82.951,59.617v-10.434a41.705,41.705,0,0,0,41.637-41.668,41.7,41.7,0,0,0-41.637-41.668,41.7,41.7,0,0,0-41.637,41.668,41.154,41.154,0,0,0,8.483,25.141l7.511-7.32a30.914,30.914,0,0,1-5.568-17.82,31.351,31.351,0,0,1,31.276-31.3,31.351,31.351,0,0,1,31.276,31.3,31.348,31.348,0,0,1-31.276,31.3v-10.434a20.842,20.842,0,0,0,20.85-20.863,20.845,20.845,0,0,0-20.85-20.867,20.9,20.9,0,0,0-20.916,20.867,20.546,20.546,0,0,0,2.784,10.367l7.771-7.582a9.96,9.96,0,0,1-.389-2.785,10.7,10.7,0,0,1,10.684-10.691,10.7,10.7,0,0,1,10.685,10.691,10.7,10.7,0,0,1-10.685,10.691,9.784,9.784,0,0,1-3.043-.516l-26.873,26.3a3.99,3.99,0,0,1-.842.648c-.065.066-.195.066-.259.133a2.913,2.913,0,0,1-.648.32c-.129.066-.258.066-.388.133-.195.066-.389.129-.583.2a.848.848,0,0,0-.389.063c-.194,0-.389.063-.519.063h0c-.194,0-.388-.062-.583-.062a1.3,1.3,0,0,1-.453-.062c-.194-.066-.389-.129-.583-.2-.13-.066-.259-.066-.389-.133a2.539,2.539,0,0,1-.583-.32,1.563,1.563,0,0,1-.324-.2,3.663,3.663,0,0,1-.518-.453c-.064-.066-.194-.133-.259-.258h0a51.952,51.952,0,0,1-14.829-36.422,52.168,52.168,0,0,1,52.063-52.1,52.168,52.168,0,0,1,52.063,52.1A52.183,52.183,0,0,1-1015.056-6284.273Z" transform="translate(1099.998 6412)"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="125px" height="20px" viewBox="0 0 126.676 20.376" class="hide-on-mobile" fill="#ffffff"><path d="M22.615 9.167L17.905 1a2.036 2.036 0 00-1.753-1H6.731a2.025 2.025 0 00-1.753 1.012L.268 9.176a2.043 2.043 0 000 2.024l4.71 8.164a2.015 2.015 0 001.753 1.012h9.42a2.025 2.025 0 001.753-1.012l4.71-8.164a2.059 2.059 0 00.001-2.033zm-11.174 8.025v-1.4a5.609 5.609 0 10-5.609-5.609 5.539 5.539 0 001.143 3.384l1.012-.986a4.16 4.16 0 01-.75-2.4 4.213 4.213 0 114.213 4.213v-1.4a2.809 2.809 0 10-2.817-2.809 2.765 2.765 0 00.375 1.4l1.047-1.021a1.343 1.343 0 01-.052-.375 1.439 1.439 0 111.439 1.439 1.3 1.3 0 01-.41-.07l-3.62 3.532a.56.56 0 01-.113.087c-.009.009-.026.009-.035.017a.407.407 0 01-.087.044c-.017.009-.035.009-.052.017l-.079.026a.111.111 0 00-.049.01c-.026 0-.052.009-.07.009-.026 0-.052-.009-.079-.009a.17.17 0 01-.061-.009l-.079-.026c-.017-.009-.035-.009-.052-.017a.354.354 0 01-.079-.044.191.191 0 01-.044-.026.5.5 0 01-.07-.061c-.009-.009-.026-.017-.035-.035a7.007 7.007 0 115.015 2.12zM28.285 3.62h4.309c4.169-.044 7.24 2.652 7.179 6.542.061 3.812-3.009 6.682-7.179 6.62h-4.309zm4.283 10.738c2.652 0 4.431-1.657 4.431-4.187 0-2.556-1.736-4.108-4.431-4.108h-1.6v8.3h1.6zM49.647 16.791H47.17v-.959a4.089 4.089 0 01-3.009 1.195c-2.093 0-3.411-1.221-3.411-2.948 0-1.779 1.439-2.87 3.733-2.87h2.477v-.436a1.613 1.613 0 00-1.83-1.736 3.372 3.372 0 00-2.617 1.361l-1.4-1.657a5.365 5.365 0 014.317-2.033 3.88 3.88 0 014.23 4.23v5.853zm-2.7-3.812h-2.106c-.881 0-1.378.34-1.378.994s.558 1.073 1.413 1.073a1.965 1.965 0 002.076-1.954zM57.383 17.027a3.947 3.947 0 01-2.957-1.195v4.544h-2.7V6.919h2.477v1.237a3.741 3.741 0 013.18-1.457 4.844 4.844 0 014.789 5.146 4.874 4.874 0 01-4.789 5.182zm-.5-7.894a2.462 2.462 0 00-2.495 2.713 2.477 2.477 0 002.495 2.73 2.551 2.551 0 002.556-2.713 2.537 2.537 0 00-2.553-2.73zM69.429 17.027a3.947 3.947 0 01-2.957-1.195v4.544h-2.7V6.919h2.485v1.237a3.741 3.741 0 013.172-1.457 4.844 4.844 0 014.789 5.146 4.874 4.874 0 01-4.789 5.182zm-.5-7.894a2.462 2.462 0 00-2.495 2.713 2.477 2.477 0 002.495 2.73 2.551 2.551 0 002.556-2.713 2.532 2.532 0 00-2.553-2.73zM84.014 16.791l-3.411-4.649h-1.971v4.649h-2.7V3.62h4.946c2.756 0 4.745 1.718 4.745 4.248a4.081 4.081 0 01-2.311 3.751l3.733 5.164h-3.031zm-5.39-7.021h2.253a1.811 1.811 0 002-1.893 1.825 1.825 0 00-2-1.875h-2.25zM96.094 16.791h-2.477v-.959a4.089 4.089 0 01-3.009 1.195c-2.093 0-3.411-1.221-3.411-2.948 0-1.779 1.439-2.87 3.733-2.87h2.477v-.436a1.613 1.613 0 00-1.832-1.736 3.372 3.372 0 00-2.617 1.361l-1.4-1.657a5.365 5.365 0 014.309-2.032 3.88 3.88 0 014.23 4.23v5.853zm-2.7-3.812h-2.111c-.881 0-1.378.34-1.378.994s.558 1.073 1.413 1.073a1.965 1.965 0 002.076-1.954zM108.062 1.823v14.959h-2.477v-1.221a3.741 3.741 0 01-3.175 1.457 4.849 4.849 0 01-4.789-5.164 4.849 4.849 0 014.789-5.164 3.842 3.842 0 012.957 1.178V1.823zm-5.146 7.31a2.551 2.551 0 00-2.556 2.713 2.532 2.532 0 002.556 2.73 2.462 2.462 0 002.495-2.713 2.486 2.486 0 00-2.495-2.73zM118.511 16.791h-2.477v-.959a4.089 4.089 0 01-3.009 1.195c-2.093 0-3.411-1.221-3.411-2.948 0-1.779 1.439-2.87 3.733-2.87h2.477v-.436a1.613 1.613 0 00-1.832-1.736 3.372 3.372 0 00-2.617 1.361l-1.4-1.657a5.365 5.365 0 014.309-2.032 3.88 3.88 0 014.23 4.23v5.853zm-2.687-3.812h-2.11c-.881 0-1.378.34-1.378.994s.558 1.073 1.413 1.073a1.965 1.965 0 002.076-1.954zM126.667 9.29h-.715a2.385 2.385 0 00-2.652 2.573v4.928h-2.7V6.917h2.477v1.178a3.412 3.412 0 012.713-1.3 2.723 2.723 0 01.881.122V9.29z"></path></svg></a></div><div class="sc-gGWvLE HAijb mobile-only"></div></div><div class="sc-djTcra fXeLco"><div class="sc-jhrdCu fxWrZz"><div class="sc-hjsNop fnqFbE"><svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M2.5 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-2ZM2.5 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM8.5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2ZM8.5 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z"></path></svg></div></div></div><div class="sc-fLHMoE enqGCB"><div class="sc-dTjBdT ieZtKM"><div role="button" class="sc-bTUVah fAbqFx"><span class="sc-hZNxer lplxcx">6</span><svg aria-hidden="true" data-prefix="fas" data-icon="bell" class="prefix__svg-inline--fa prefix__fa-bell prefix__fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px" fill="#FFFFFF" cursor="pointer"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg></div></div><div class="sc-jFYche gQWYQR"><div class="sc-cBBlDJ jLPBXb"><div class="sc-bRJSeJ dRxtWm">Connect<svg width="17" height="14" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" class="sc-kpPvGe caqQaL"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.793.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.086 8H1.5a1 1 0 0 1 0-2h11.586L8.793 1.707a1 1 0 0 1 0-1.414Z"></path></svg></div></div></div><div class="sc-eDZJfc ejlZGV"></div><div class="sc-fmZqYP jyOMor"><div class="sc-ksbECg ifRjWn"><div class="sc-kLKKgF gfSOMI"><div class="sc-eYGnOm hlnEOr"><div class="sc-bgzEgf hElrPd"><svg width="19" height="17" viewBox="0 0 19 17" xmlns="http://www.w3.org/2000/svg" class="sc-erbdlo heDSy"><path d="M18.465 6.213a2.643 2.643 0 0 0-2.695-2.53c-4.233.028-8.466.011-12.698.011a1.484 1.484 0 0 1-.612-.075c-.169-.073-.353-.136-.355-.364-.002-.227.176-.306.349-.368.219-.073.45-.105.681-.094h12.88c.102 0 .218-.022.221-.142A2.904 2.904 0 0 0 15.865.52a1.765 1.765 0 0 0-1.719-.457c-2.01.223-4.017.474-6.028.707-1.938.224-3.875.437-5.813.66A1.93 1.93 0 0 0 .514 3.45c0 3.587.025 7.175-.012 10.764a2.658 2.658 0 0 0 2.753 2.745c2.08-.021 4.16 0 6.24-.005 2.129 0 4.257.006 6.386 0a2.56 2.56 0 0 0 2.559-2.244c.098-2.831.053-5.664.024-8.497Zm-8.49 9.208v-1.02a4.093 4.093 0 1 0-3.253-1.62l.73-.722a3.06 3.06 0 1 1 2.519 1.32v-1.02a2.04 2.04 0 1 0-1.768-1.02l.76-.743A1.034 1.034 0 0 1 9.972 9.27a1.05 1.05 0 0 1 0 2.098c-.101-.002-.201-.018-.297-.048l-2.633 2.571a.496.496 0 0 1-.08.065l-.024.012a.58.58 0 0 1-.064.033c-.011 0-.023.008-.037.012a.51.51 0 0 1-.058.016.133.133 0 0 1-.04 0h-.054a.508.508 0 0 1-.055-.005.14.14 0 0 0-.042 0 .575.575 0 0 1-.056-.017.09.09 0 0 1-.038-.013.504.504 0 0 1-.055-.03l-.034-.018a.53.53 0 0 1-.053-.044.328.328 0 0 1-.028-.022 5.1 5.1 0 1 1 3.65 1.541Z"></path></svg><div class="sc-yUtDh dXNjjk">Connect your wallet</div></div><div class="sc-gfQywf imZVlq">Please connect your wallet to enjoy DappRadars pro features</div><a href="https://dappradar.com/blog/best-cryptocurrency-wallets-for-2022" class="sc-eoOUpm jACQNy"><svg width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" class="sc-wIkHf itAPPW"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-3a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 0 1 11.5 6a3.001 3.001 0 0 1-2 2.83V9a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1 1 1 0 1 0 0-2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg><div class="sc-dovKpQ gPxKje">What is wallet?</div></a><span width="100%" mb="16px" class="sc-dkrFOg iCzKle">Connect wallet</span><div class="sc-jOferD iewOAb"></div></div></div><div class="sc-gBInCZ fexmZz"></div><div class="sc-cxiiTX bhVZSF"><a href="https://global.transak.com/?apiKey=05a2e21e-7e26-46c4-925c-d7ad33882817" rel="nofollow noopener" width="100%" class="sc-dkrFOg sc-jDfIjF jmCZDb jXcYLL"><div class="sc-kTxHUi krGfLw"><div class="sc-cfQIsQ hWiUYr"><div class="sc-hbqYmb rgZfu"><div class="sc-nTrUm jwDmud">Buy Crypto</div><div class="sc-bJYTlW dixFAf"><img width="25px" height="8px" src="https://static.dappradar.com/grc-public-assets/icons/PaymentVisaIcon.svg"></div><div class="sc-bJYTlW dixFAf"><img width="18px" height="10px" src="https://static.dappradar.com/grc-public-assets/icons/PaymentMastercardIcon.svg"></div></div></div></div><svg width="18px" height="18px" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg" class="dappradar-dropdown-external-link-icon"><path d="M11.5 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15.5 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5Z"></path><path d="M5.5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3h-8V7h3a1 1 0 0 0 0-2h-3Z"></path></svg></a><div class="sc-hxOqGs gPwrYW"><div class="sc-cPIbRQ gwidBx"><div class="sc-hLirLb bqngRx"><svg width="17" height="12" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg" class="sc-kmXbIF kyPHMd"><path d="M.503 1.884 8.5 5.882l7.997-3.998A2 2 0 0 0 14.5 0h-12A2 2 0 0 0 .503 1.884Z"></path><path d="m16.5 4.118-8 4-8-4V10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4.118Z"></path></svg><div class="sc-nTrUm ipsbOO">Add your email</div></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sc-hbWBzy hGXiZQ"><path d="M12 24A12 12 0 0 1 3.515 3.514a12 12 0 0 1 16.97 16.971A11.921 11.921 0 0 1 12 24zm.028-7.962A1.336 1.336 0 1 0 13 18.283a1.185 1.185 0 0 0 .346-.875 1.3 1.3 0 0 0-.359-.962 1.331 1.331 0 0 0-.958-.408zM12.02 5.325a1.312 1.312 0 0 0-.325.042 1.632 1.632 0 0 0-1.046 1.643c.017.239.032.48.047.722s.03.472.047.708l.134 2.643.019.372.121 2.38a1.042 1.042 0 0 0 1.012 1.056 1.067 1.067 0 0 0 1.009-1.1c0-.367 0-.713.033-1.092.028-.568.059-1.137.093-1.769.029-.532.061-1.136.09-1.713.017-.378.04-.76.062-1.13v-.008c.022-.365.045-.742.061-1.113a2.043 2.043 0 0 0-.124-.753 1.347 1.347 0 0 0-1.233-.888z"></path></svg></div><div class="sc-gfQywf imZVlq">Verify your email and get access to more features on DappRadar.</div><span width="100%" class="sc-dkrFOg cARiAQ">Verify</span></div></div></div><div class="sc-iLkLTN dMsGkC"><div class="sc-gMHJKX ddPaa-d"><a href="https://dappradar.com/hub/wallet" width="100%" class="sc-dkrFOg gPlWMT sc-hINMOq xCexQ"><span class="sc-gswNZR eRjavl button-svg"><svg width="19" height="17" viewBox="0 0 19 17" xmlns="http://www.w3.org/2000/svg"><path d="M18.465 6.213a2.643 2.643 0 0 0-2.695-2.53c-4.233.028-8.466.011-12.698.011a1.484 1.484 0 0 1-.612-.075c-.169-.073-.353-.136-.355-.364-.002-.227.176-.306.349-.368.219-.073.45-.105.681-.094h12.88c.102 0 .218-.022.221-.142A2.904 2.904 0 0 0 15.865.52a1.765 1.765 0 0 0-1.719-.457c-2.01.223-4.017.474-6.028.707-1.938.224-3.875.437-5.813.66A1.93 1.93 0 0 0 .514 3.45c0 3.587.025 7.175-.012 10.764a2.658 2.658 0 0 0 2.753 2.745c2.08-.021 4.16 0 6.24-.005 2.129 0 4.257.006 6.386 0a2.56 2.56 0 0 0 2.559-2.244c.098-2.831.053-5.664.024-8.497Zm-8.49 9.208v-1.02a4.093 4.093 0 1 0-3.253-1.62l.73-.722a3.06 3.06 0 1 1 2.519 1.32v-1.02a2.04 2.04 0 1 0-1.768-1.02l.76-.743A1.034 1.034 0 0 1 9.972 9.27a1.05 1.05 0 0 1 0 2.098c-.101-.002-.201-.018-.297-.048l-2.633 2.571a.496.496 0 0 1-.08.065l-.024.012a.58.58 0 0 1-.064.033c-.011 0-.023.008-.037.012a.51.51 0 0 1-.058.016.133.133 0 0 1-.04 0h-.054a.508.508 0 0 1-.055-.005.14.14 0 0 0-.042 0 .575.575 0 0 1-.056-.017.09.09 0 0 1-.038-.013.504.504 0 0 1-.055-.03l-.034-.018a.53.53 0 0 1-.053-.044.328.328 0 0 1-.028-.022 5.1 5.1 0 1 1 3.65 1.541Z"></path></svg></span>Portfolio<span class="sc-gswNZR eFPxbR button-svg"><svg width="17" height="14" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" class="sc-bnVMcY ikfodg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.793.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.086 8H1.5a1 1 0 0 1 0-2h11.586L8.793 1.707a1 1 0 0 1 0-1.414Z"></path></svg></span></a></div><button type="button" width="100%" class="sc-dkrFOg gPlWMT">Log out</button></div></div><div class="sc-hGglLj hyuRYV"><div class="sc-cVtpRj gGUwsr"><div color="#ffffff" class="sc-kIlzlo dEgccr"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></div></div></div></div></nav>

*/
