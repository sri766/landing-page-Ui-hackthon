import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Myself</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Hello! My name is <strong>Srisanth Seth</strong>, and I am from India. I am currently pursuing my studies at <strong>NIT Rourkela</strong>. 
          I am passionate about creating innovative digital experiences and exploring the endless possibilities of technology.
        </p>
      </div>
    </div>
  )
}

export default page