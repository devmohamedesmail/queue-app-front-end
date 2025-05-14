'use client'
import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import { PlaceContext } from '@/app/context/PlaceContext';
import DataTable from 'react-data-table-component';
import { api } from '@/app/config/api';
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Custom_input from '@/app/custom/Custom_input';


export default function page() {
  const { t, i18n } = useTranslation();
  const { places } = useContext(PlaceContext);
  const [filterText, setFilterText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // تصفية البيانات حسب البحث
  const filteredItems = places?.filter(
    item =>
      item.nameEn?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nameAr?.toLowerCase().includes(filterText.toLowerCase())
  ) || [];

  const columns = [
    {
      name: t('name-ar'),
      selector: row => row.nameAr,
      sortable: true,
    },
    {
      name: t('name-en'),
      selector: row => row.nameEn,
      sortable: true,
    },
    {
      name: t('image'),
      selector: row => row.image,
      sortable: true,
      cell: row => (
        <img
          src={`${api.baseUrl}uploads/${row.image}`}
          alt={row.nameEn || 'image'}
          className="w-16 h-16 object-cover rounded"
        />
      ),
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

      <div className='flex justify-between items-center mb-5'>
        <input
          type="text"
          className="input input-bordered focus:outline-0 max-w-xs"
          placeholder={t('search')}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <Link href="/pages/admin/places" className='btn btn-primary'>{t('add-new-place')}</Link>
      </div>

      {isClient && (
        <DataTable
          title={t('places')}
          columns={columns}
          data={filteredItems}
          pagination
          highlightOnHover
          responsive
          customStyles={customStyles}
          noDataComponent={<div className="text-center py-4">{t('no-data')}</div>}
        />
      )}


      {/* You can open the modal using document.getElementById('ID').showModal() method */}

   

    </div>
  )
}
