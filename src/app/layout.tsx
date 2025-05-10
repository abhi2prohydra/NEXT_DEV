import Navbar from "@/components/AppComponents/Navbar"
import "./globals.css"


import React from 'react'
import Footer from "@/components/AppComponents/Footer"

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html>
    <body>
      <Navbar/>
      {children}
      <Footer/>
    </body>
    </html>
  )
}
