"use client"
import ThreeDObject from '@/components/three-d-object'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const page = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <ThreeDObject position={[5, 0, 0]} scale={1} />
            <ThreeDObject position={[0, 0, 0]} scale={1} />
          </Float>
          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Contact Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-6 font-stay-wild">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          We would love to hear from you! Feel free to reach out.
        </p>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2x; shadow-lg text-white max-w-md">
          <p className="text-lg font-semibold mb-2">Email us at:</p>
          <p className="text-lg text-purple-400 mb-4">srisanthseth28@gmail.com</p>

          <p className="text-lg font-semibold mb-2">Or reach us at:</p>
          <p className="text-lg text-purple-400">+91 7609890272</p>
        </div>
      </div>
    </div>
  )
}

export default page