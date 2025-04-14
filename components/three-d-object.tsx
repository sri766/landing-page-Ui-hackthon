"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial } from "@react-three/drei"
import { useSpring, animated } from "@react-spring/three"
import type * as THREE from "three"

interface ThreeDObjectProps {
  position?: [number, number, number]
  scale?: number
}

export default function ThreeDObject({ position = [0, 0, 0], scale = 1 }: ThreeDObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Animation with react-spring
  const { sphereScale } = useSpring({
    sphereScale: hovered ? 1.1 : 1,
    config: { mass: 2, tension: 180, friction: 20 },
  })

  // Rotation animation
  useFrame((state) => {
    if (!meshRef.current) return

    // Subtle floating movement
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2

    // Rotation
    meshRef.current.rotation.x = time * 0.15
    meshRef.current.rotation.y = time * 0.2
  })

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={sphereScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[scale, 64, 64]} />
      <MeshDistortMaterial color="#8a2be2" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
    </animated.mesh>
  )
}
