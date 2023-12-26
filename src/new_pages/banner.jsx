import React from 'react'

const Banner = ({description}) => {
  return (
    <div>

<div className="h-[250px] bg-black">
      <h1 className='text-center text-6xl items-center justify-center py-12' style={{ color: 'white' }}>{description}</h1>
    </div>
      
    </div>

  )
}

export default Banner
