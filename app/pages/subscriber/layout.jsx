import Subscriber_header from '@/app/components/Subscriber_header';
import React from 'react'
import { FaBars } from "react-icons/fa";
export default function layout({ children }) {
  return (
    <div className='container mx-auto'>
      <Subscriber_header />
      
      <div>{children}</div>
    </div>
  )
}
