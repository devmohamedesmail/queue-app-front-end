import React from 'react'

function page({ searchParams }) {
  return (
    <div>
      <p>place id {searchParams.placeId}</p>
      <p>service id {searchParams.serviceId}</p>
      
    </div>
  )
}

export default page