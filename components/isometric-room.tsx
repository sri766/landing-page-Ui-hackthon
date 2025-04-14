"use client"

import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Html, PerspectiveCamera, useProgress } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ErrorBoundary } from "@/components/error-boundary"
import type * as THREE from "three"

function Model({ setHoveredItem }: { setHoveredItem: (item: string | null) => void }) {
  const { scene } = useGLTF("/assets/cute.glb")
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={2}>
      <primitive object={scene} />

      {/* Interactive hotspots */}
      <Html position={[1, 1, 0]} distanceFactor={10}>
        <div
          className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer"
          onPointerOver={() => setHoveredItem("Window")}
          onPointerOut={() => setHoveredItem(null)}
        >
          <span className="text-white text-xs">1</span>
        </div>
      </Html>

      <Html position={[-1, 0.5, 1]} distanceFactor={10}>
        <div
          className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer"
          onPointerOver={() => setHoveredItem("Bed")}
          onPointerOut={() => setHoveredItem(null)}
        >
          <span className="text-white text-xs">2</span>
        </div>
      </Html>

      <Html position={[0, 0, -1]} distanceFactor={10}>
        <div
          className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center cursor-pointer"
          onPointerOver={() => setHoveredItem("Table")}
          onPointerOut={() => setHoveredItem(null)}
        >
          <span className="text-white text-xs">3</span>
        </div>
      </Html>
    </group>
  )
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-white text-center">
        <div className="mb-4 text-xl font-bold">Loading 3D Room</div>
        <div className="w-40 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2">{progress.toFixed(0)}%</div>
      </div>
    </Html>
  )
}

export default function IsometricRoom() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-purple-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-stay-wild text-3xl md:text-5xl font-bold mb-6">Interactive Workspace</h2>
            <p className="font-orkney text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our virtual workspace. Hover over the interactive elements to learn more about our design process.
            </p>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-purple-900/20">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="mb-4 text-xl font-bold">Loading 3D Room</div>
                <div className="w-40 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-purple-950/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-stay-wild text-3xl md:text-5xl font-bold mb-6">Interactive Workspace</h2>
          <p className="font-orkney text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our virtual workspace. Hover over the interactive elements to learn more about our design process.
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-purple-900/20">
          <ErrorBoundary
            fallback={
              <div className="w-full h-full flex items-center justify-center text-white/70">
                3D scene could not be loaded
              </div>
            }
          >
            <Canvas shadows dpr={[1, 2]}>
              {/* 🎯 Adjusted camera for better view */}
              <PerspectiveCamera makeDefault position={[-8, 5, 6]} fov={35} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

              <Suspense fallback={<Loader />}>
                <Model setHoveredItem={setHoveredItem} />
                {/* 🌇 Environment changed to sunset */}
                <Environment preset="sunset" />
              </Suspense>

              <OrbitControls
                enableZoom={true}
                target={[0, 0, 0]}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 6}
                maxDistance={15}
                minDistance={5}
              />
            </Canvas>
          </ErrorBoundary>

          {/* Info panel */}
          {hoveredItem && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-72 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-purple-500/30"
            >
              <h3 className="font-stay-wild text-xl mb-2">{hoveredItem}</h3>
              <p className="font-orkney text-sm text-gray-300 mb-3">
                {hoveredItem === "Window"
                  ? "A portal to the outside world, bringing in fresh ideas and perspectives."
                  : hoveredItem === "Bed"
                  ? "A cozy corner for rest and rejuvenation, essential for creativity."
                  : "A central hub for brainstorming and collaboration, where ideas come to life."}
              </p>
              <Button size="sm" variant="outline" className="w-full font-orkney">
                Learn More
              </Button>
            </motion.div>
          )}

          <div className="absolute bottom-6 left-6 font-orkney text-sm text-white/70">
            <p>Click and drag to rotate • Scroll to zoom</p>
          </div>
        </div>
      </div>
    </section>
  )
}
