import React from 'react'

export default function Custom_page_title({ title }) {
  return (
    <div className='flex items-center gap-2 mb-4'>
        <h6 className='font-bold text-xl'>{title}</h6>
    </div>
  )
}
