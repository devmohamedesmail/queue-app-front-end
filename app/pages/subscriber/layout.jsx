import React from 'react'
import { FaBars } from "react-icons/fa";
export default function layout({ children }) {
  return (
    <div className='container mx-auto'>
      <div className="drawer  flex justify-between ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div></div>
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><FaBars /></label>
          </div>

      
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
