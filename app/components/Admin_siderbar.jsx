import React, { useContext } from 'react'
import { PlaceContext } from '../context/PlaceContext'
import { api } from '@/app/config/api';
import Custom_sidebar_item from '../custom/Custom_sidebar_item';
import { useTranslation } from 'react-i18next';
import { CiHome } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
function Admin_siderbar({ isSidebarOpen, setIsSidebarOpen }) {
  const { t } = useTranslation();
  const { settings } = useContext(PlaceContext)


  return (
    <>

      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-60 bg-black p-4 transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >

        <img src={`${api.baseUrl}uploads/${settings?.logo}`} className='w-18' alt="" />


        <ul>

          <Custom_sidebar_item icon={<CiHome />} link="/pages/admin/"  title={t('home')} />
          <Custom_sidebar_item icon={<MdOutlinePlace />} link="/pages/admin/places"  title={t('places')} />
          <Custom_sidebar_item icon={<FaUsersGear />} link="/pages/admin/users"  title={t('users')} />





        </ul>









      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}


    </>
  )
}

export default Admin_siderbar