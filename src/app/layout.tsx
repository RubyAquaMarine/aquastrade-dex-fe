import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import WagmiProvider from './Components/Wagmi'
import HandleThemes from './Components/HandleTheme'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <HandleThemes>

          <Navbar />

          <WagmiProvider>{children}</WagmiProvider>
          <Footer />
        </HandleThemes>

      </body>

    </html>
  )
}