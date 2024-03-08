"use client"

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'


//  {params} : {params: {id : string}}
const PerpVerse = ({ params }: any) => {

  const path = usePathname();

  console.error(" Routing url", path);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
       <h1> COMING SOON </h1>
      </div>
    </main>
  )
}

export default PerpVerse

