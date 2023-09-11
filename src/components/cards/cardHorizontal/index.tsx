import React from 'react'
import { PlayCircle } from 'react-feather'

const CardHorizontal = () => {
  return (
    <div className='w-full rounded-lg cursor-pointer flex gap-1 h-32 bg-gray-200'>
      <div className='border-2 w-72 flex items-center justify-center text-white text-3xl rounded-md bg-gray-700'>
        <PlayCircle/>
      </div>
      <div className='line-clamp-3 self-center'>
        <span className='text-gray-900 font-bold'>titulo</span>
        <p className='text-xs'>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit.
        </p>
      </div>
    </div>
  )
}

export { CardHorizontal }