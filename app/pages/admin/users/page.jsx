'use client'
import { api } from '@/app/config/api'
import Custom_page_title from '@/app/custom/Custom_page_title'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Custom_input from '@/app/custom/Custom_input'
import Custom_button from '@/app/custom/Custom_button'

function page() {
  const [users, setusers] = useState(null)
  const { t, i18n } = useTranslation()
  const [filterText, setFilterText] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);


  const fetch_users = async () => {
    try {
      const res = await axios.get(`${api.baseUrl}api/v1/users`)
      setusers(res.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch_users()
  }, [])





  const filteredItems = users?.filter(
    item =>
      item.name?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email?.toLowerCase().includes(filterText.toLowerCase())
  ) || [];


  const columns = [
    {
      name: t('name'),
      selector: row => row.name,
      sortable: true,
    },
    {
      name: t('email'),
      selector: row => row.email,
      sortable: true,
    },

    {
      name: t('actions'),
      cell: row => (
        <div className="flex space-x-2">

          <button className="btn btn-success"
            onClick={() => {
              setSelectedUser(row);
              document.getElementById('my_modal_3').showModal();
            }}> <MdEdit color='white' /> </button>
          <button className="btn btn-error bg-red-600" onClick={() => console.log(row)}><FaTrash color='white' /></button>
        </div>
      ),
    }
  ];


  const customStyles = {
    rows: {
      style: {
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
      },
    },
  };




  return (
    <div>
      <Custom_page_title title={t("users")} />

      <div className="w-full m-auto px-5 md:w-1/2 flex justify-center items-center">
        <Custom_input
          placeholder={t('search')}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}

        />
      </div>
      <DataTable
        title={t('users')}
        columns={columns}
        data={filteredItems}
        pagination
        highlightOnHover
        responsive
        customStyles={customStyles}
        noDataComponent={<div className="text-center py-4">{t('no-data')}</div>}
      />


      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {selectedUser ? (
            <>
              <h3 className="font-bold text-lg">{t('edit')}</h3>
              <div className="py-4 space-y-2">
                <Custom_input value={selectedUser.name} />
                <Custom_input value={selectedUser.email} />
                
                <Custom_button title={t('update')} />
               
              </div>
            </>
          ) : (
            <p>{t('no-user-selected')}</p>
          )}
        </div>
      </dialog>
    </div>
  )
}

export default page