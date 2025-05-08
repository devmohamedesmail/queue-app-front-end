import React from 'react'

export default function Custom_input({ label, type, placeholder, value, onChange }) {
  return (
    <div className='mb-5 w-full'>
        <label className='text-sm'>{label}</label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="input input-neutral focus:outline-0 w-full" />
    </div>
  )
}
