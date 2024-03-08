"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import styles from '../Styles/Header.module.css'; // You can create a CSS module for styling
import styles_button from '../Styles/Toggle.module.css';
import DarkModeToggle from './DarkModeToggleV2'
import Popup from './popup';

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








      
      <nav className={styles.nav}>
     
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
            <Image
              src="/AQUA1.png"
              alt="AquasTrade Logo"
              width={50}
              height={50}
             
            />
           
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/swap/aquadex">
            AquasTrade 
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

          <li> <DarkModeToggle /></li>

          <li>
            {/* todo Add Connect Wallet here */}
            <button className={styles_button.toggleButton} onClick={openPopup}>Popup</button>
            <Popup isOpen={isPopupOpen} onClose={closePopup} />
          </li>

          {/* Add more navigation items here */}
        </ul>
      </nav>
    
    </header>
  );
}

export default Navbar
