'use client'
import Link from 'next/link';
import React, { useContext } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { PlaceContext } from '../context/PlaceContext';
import { api } from '../config/api';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { CiUser } from "react-icons/ci";
import i18n from '@/i18n';
function Navbar() {

    const { places, settings } = useContext(PlaceContext)
    const { auth, setAuth, login, register, logout } = useContext(AuthContext)
    const { t } = useTranslation()
    const router = useRouter()


    const handle_logout = async () => {
        try {
            await logout();
            setAuth(null);
            localStorage.removeItem('user');
            router.push('/')
            toast.success(t('logout-success'));
        } catch (error) {
            console.log("Logout error:", error);
        }
    }




    const handle_toggle_lang = () => {
        const newLocale = localStorage.getItem('i18nextLng') === 'en' ? 'ar' : 'en';
        localStorage.setItem('i18nextLng', newLocale);
        window.location.reload();
    }





    return (
        <div className="navbar bg-base-100  sticky top-0 shadow-xl">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">

                    <img className='w-12' src={`${api.baseUrl}${settings?.logo}`} alt={settings?.nameEn} />
                    {settings?.nameEn}
                </Link>

            </div>



           
            {auth ? (
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-44 md:w-auto focus:outline-0" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <AiOutlineUser size={20} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li> <Link href="/pages/user/profile">{t('account')}</Link></li>
                            <li><a>{auth?.user.user.email}</a></li>
                            {auth?.user.user.role === 'admin' && <li><Link href="/pages/admin/">{t('dashboard')}</Link></li>}
                            <li><a><button onClick={() => handle_logout()}>{t('logout')}</button></a></li>
                            <button className='btn btn-ghost bg-black text-white mt-5' onClick={() => handle_toggle_lang()}>{i18n.language === 'en' ? 'العربية' : 'English'}</button>

                        </ul>
                    </div>
                </div>
            ) : (
                
             <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-44 md:w-auto focus:outline-0" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <AiOutlineUser size={20} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                             <Link href="/pages/auth/login" className='btn btn-ghost rounded-full'>{t('login-register')}</Link>
                            <button className='btn btn-ghost bg-black text-white mt-5' onClick={() => handle_toggle_lang()}>{i18n.language === 'en' ? 'العربية' : 'English'}</button>

                        </ul>
                    </div>
                </div>
            
            )}









        </div>
    )
}

export default Navbar