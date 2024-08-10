import React from 'react'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/HomePage/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <div className={inter.className}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Layout
