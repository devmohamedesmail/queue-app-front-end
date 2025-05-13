import Link from 'next/link'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { AuthContext } from '../context/AuthContext';

function Mobile_Dock() {
    const { t, i18n } = useTranslation();
    const { auth } = useContext(AuthContext);
    return (
        <div className="dock md:hidden">
            <Link href="/">
                <IoHomeOutline />
                <span className="dock-label">{t('home')}</span>
            </Link>

            <Link href={`${auth ? '/pages/user/queues' : '/pages/auth/login'}`} className="dock-active">
               <FaPeopleGroup />
                <span className="dock-label">{t('my-queues')}</span>
            </Link>

            <Link href="/pages/auth/login">
                <FiUser />
                <span className="dock-label">{t('account')}</span>
            </Link>
        </div>
    )
}

export default Mobile_Dock