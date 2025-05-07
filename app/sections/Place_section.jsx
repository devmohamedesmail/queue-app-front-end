import React from 'react'
import Custom_place_item from '../custom/Custom_place_item'

export default function Place_section() {
    return (
        <div className='container m-auto px-5 my-10'>
            <h6 className='font-bold mb-5 text-2xl'>Places</h6>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>

                <Custom_place_item />
                <Custom_place_item />
                <Custom_place_item />
                <Custom_place_item />



            </div>
        </div>
    )
}
