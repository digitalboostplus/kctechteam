'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CyberShieldScene() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.3
      outerRef.current.rotation.y = t * 0.5
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.4
      innerRef.current.rotation.y = t * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.8
    }
  })

  return (
    <group>
      {/* Outer wireframe icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#00D4FF"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00D4FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Inner solid */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#111C35"
          emissive="#00D4FF"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Orbit ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.02, 8, 64]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Glow point light */}
      <pointLight position={[0, 0, 2]} color="#00D4FF" intensity={2} distance={5} />
    </group>
  )
}
