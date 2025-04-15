import React from 'react'
import VideoMask from './videoMask'

const Motto = () => {
  return (
    <section className='relative flex flex-col items-center justify-center w-full bg-black overflow-hidden'>
      <div className='flex flex-col justify-center'>
        <VideoMask/>
      </div>
      <div className='absolute top-0 left-1/4 w-1/2 h-full flex items-center justify-center'>
        <h1 className='text-lg sd:text-xl lg:text-5xl font-semibold font-stay-wild text-white'>Design is not just what it looks like. It's how it works, feels, and evolves</h1>
      </div>
      <div className='absolute top-1/2 left-0 w-1/4 -rotate-90'>
        <h1 className='text-lg sd:text-xl lg:text-7xl font-bold font-orkney text-white'>Creativity</h1>
      </div>
      <div className='absolute top-3/4 right-20  w-1/6'>
        <h1 className='text-lg sd:text-xl lg:text-6xl font-bold font-lemon text-white'>Design</h1>
      </div>
    </section>
  )
}

export default Motto