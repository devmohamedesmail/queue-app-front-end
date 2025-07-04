'use client'
import Admin_header from '../../components/admin_header'
import Admin_siderbar from '../../components/admin_siderbar.jsx'
import React, { useState } from 'react'

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden">
     
     <Admin_siderbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Admin_header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex-1 overflow-auto  p-4 container mx-auto">
          {children}
        </div>
      </div>





    </div>
  )
}
