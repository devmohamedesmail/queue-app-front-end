'use client'
import React, { useContext } from 'react'
import { PlaceContext } from '../context/PlaceContext'
function Admin_header({ isSidebarOpen, setIsSidebarOpen }) {



 const { settings } = useContext(PlaceContext)





    return (
        <div className="navbar bg-base-100 shadow-sm px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <button
                    className="btn btn-ghost btn-square md:hidden"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <span className="text-xl">☰</span>
                </button>
                <span className="text-xl font-bold">
                    {settings?.nameEn}
                </span>
            </div>

            <div className="flex gap-2 items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                />
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
                    >
                        <li>
                            <a className="justify-between">
                                Profile <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Admin_header