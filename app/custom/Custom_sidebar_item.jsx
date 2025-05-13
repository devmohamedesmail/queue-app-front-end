import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import Link from 'next/link'
function Custom_sidebar_item({ icon, title, link }) {
    return (
        <li className='flex items-center justify-between gap-2 text-white p-2 hover:bg-gray-700 rounded-md cursor-pointer'>
            <Link href={link} className='text-white flex items-center flex-1'>
                {icon}
                <span className='mx-2 text-sm'>{title}</span>
            </Link>
            <IoChevronForwardSharp />
        </li>
    )
}

export default Custom_sidebar_item