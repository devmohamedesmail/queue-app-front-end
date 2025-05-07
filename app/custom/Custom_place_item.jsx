import React from 'react'

export default function Custom_place_item() {
  return (
    <div className="overflow-hidden rounded-lg bg-base-100  shadow-sm">
      <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />

      <div className="flex flex-col justify-center items-center p-4">
        <h2 className="card-title text-center">Place Title</h2>
        <p className='text-center'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
       
      </div>
    </div>
  )
}
