import React from 'react'

const Message = ({title, description, image_url, name}) => {
  return (
    <div>

<div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 flex flex-col gap-10">  

    <div className='lg:w-max'>
        <h1 className="font-roboto font-normal text-4xl text-[#F4253F]">{title}</h1>
        <hr className='w-auto h-1  bg-[#F4253F]' />
    </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
                    <p className="font-nunito font-black text-base uppercase">{description}</p>
                    <div className='flex flex-col text-center items-center'>
                        <img src={image_url} alt={`Image of ${name}`} />
                        <span className='p-2 bg-white text-black'>{name}</span>
                    </div>

                </div>

            </div>

        </div>
  )
}

export default Message
