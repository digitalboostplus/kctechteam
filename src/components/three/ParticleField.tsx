'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 800

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { mouse } = useThree()

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    // Slow rotation
    pointsRef.current.rotation.y = t * 0.02
    // Mouse parallax
    pointsRef.current.rotation.x = mouse.y * 0.1
    pointsRef.current.rotation.z = mouse.x * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00D4FF"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.4}
      />
    </points>
  )
}
