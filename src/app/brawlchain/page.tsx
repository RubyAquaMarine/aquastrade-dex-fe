"use client"
import { BigNumber, ethers } from 'ethers';
import { useAccount, useNetwork } from "wagmi";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import styles from '../Styles/Links.module.css'

import styles_button from '../Styles/Toggle.module.css'

//  {params} : {params: {id : string}}
const Brawlchain = ({ params }: any) => {




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className={styles.p_styled}>
          <Link href="/dashboard"> Back  </Link>
        </p>

        <button className={styles_button.toggleButton}> Click to play the Free Arena</button>


      </div>
    </main>
  )
}

export default Brawlchain;
