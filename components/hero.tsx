"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ThreeDObject from "./three-d-object"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render animations and 3D content until client-side
  if (!isMounted) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0" />

        {/* Content */}
        <div className="flex flex-col px-2 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm font-orkney mb-4">
              REIMAGINE DIGITAL EXPERIENCES
            </div>
            <h1 className="font-stay-wild text-2xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r to-purple-400 leading-tight">
              Explore the Digital Universe
            </h1>
            <p className="font-orkney text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover a new dimension of web experiences with our cutting-edge platform that combines stunning visuals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-orkney"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800 font-orkney">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary
          fallback={
            <div className="w-full h-full flex items-center justify-center text-white/70">
              3D scene could not be loaded
            </div>
          }
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <ThreeDObject position={[0, 0, 0]} scale={1.5} />
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
        </ErrorBoundary>
      </div>

      {/* Content */}
      <div ref={containerRef} className="flex flex-col z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm font-orkney mb-4">
              Reimagine Digital Experiences
            </div>
            <h1 className="font-stay-wild text-5xl text-center py-6 align-text-bottom md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
              Explore the Digital Universe
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-orkney text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover a new dimension of web experiences with our cutting-edge platform that combines stunning visuals
              with powerful functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r rounded-full from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-orkney"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  )
}
