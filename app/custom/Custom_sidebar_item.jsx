import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import Link from 'next/link'
function Custom_sidebar_item({ icon, title , link }) {
    return (
        <li className='flex items-center justify-between gap-2 text-white p-2 hover:bg-gray-700 rounded-md cursor-pointer'>
            <Link href={link} className='text-white  flex-1'>{title}</Link>
            <IoChevronForwardSharp />
        </li>
    )
}

export default Custom_sidebar_item