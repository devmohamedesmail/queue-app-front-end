import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
       <Navbar />
      {children}
      <Footer />
    </div>
  )
}
