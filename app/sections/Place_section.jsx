'use client'
import React, { useContext } from 'react'
import Custom_place_item from '../custom/Custom_place_item'
import { PlaceContext } from '../context/PlaceContext'

export default function Place_section() {

    const { places } = useContext(PlaceContext);



    return (
        <div className='container m-auto px-5 my-10'>
            <h6 className='font-bold mb-5 text-2xl'>Places</h6>
            {places ? (<>
                {places.length > 0 ? (<div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                    {places.map((place, index) => (
                        <Custom_place_item key={index} place={place} />
                    ))}
                </div>) : (<p>no</p>)}

            </>) : (<p>loading</p>)}

        </div>
    )
}
