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

function page() {
  const [users, setusers] = useState(null)
  const { t, i18n } = useTranslation()
  const [filterText, setFilterText] = useState('');



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
          <Link href={`/pages/admin/places/show/edit/${row._id}`} className="btn btn-success"> <MdEdit color='white' /> </Link>
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
    </div>
  )
}

export default page