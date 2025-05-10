'use client'
import Link from 'next/link';
import React, { useContext } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { PlaceContext } from '../context/PlaceContext';
import { api } from '../config/api';

function Navbar() {



const {places, settings} = useContext(PlaceContext)





    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                 
                  <img className='w-12' src={`${api.baseUrl}uploads/${settings?.logo}`} alt={settings?.nameEn} />
                  {settings?.nameEn}
                </Link>
                
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-44 md:w-auto focus:outline-0" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                         <AiOutlineUser size={20} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                        <Link href="/pages/auth/login/">login/register</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar