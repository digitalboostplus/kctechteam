'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_POSITIONS: [number, number, number][] = [
  [-2, 1, 0],
  [0, 2, 0],
  [2, 1, 0],
  [2, -1, 0],
  [0, -2, 0],
  [-2, -1, 0],
  [0, 0, 0],
]

export default function DataFlowScene() {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)

  const particlePositions = useMemo(() => {
    const arr = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      const node = NODE_POSITIONS[i % NODE_POSITIONS.length]
      arr[i * 3] = node[0] + (Math.random() - 0.5) * 3
      arr[i * 3 + 1] = node[1] + (Math.random() - 0.5) * 3
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1
    }
    return arr
  }, [])

  // Build line geometries for hub connections
  const lineGeometries = useMemo(() => {
    const center = NODE_POSITIONS[NODE_POSITIONS.length - 1]
    return NODE_POSITIONS.slice(0, -1).map(([x, y, z]) => {
      const geo = new THREE.BufferGeometry()
      geo.setAttribute(
        'position',
        new THREE.Float32BufferAttribute([x, y, z, center[0], center[1], center[2]], 3)
      )
      return geo
    })
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2
    }
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < 200; i++) {
        const idx = i * 3
        const target = NODE_POSITIONS[(i + Math.floor(t * 0.5)) % NODE_POSITIONS.length]
        positions[idx] += (target[0] - positions[idx]) * 0.003
        positions[idx + 1] += (target[1] - positions[idx + 1]) * 0.003
        positions[idx + 2] += (target[2] - positions[idx + 2]) * 0.003
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Hub connections */}
      {lineGeometries.map((geo, i) => (
        <lineSegments key={i} geometry={geo}>
          <lineBasicMaterial color="#00D4FF" transparent opacity={0.3} />
        </lineSegments>
      ))}

      {/* Nodes */}
      {NODE_POSITIONS.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[i === NODE_POSITIONS.length - 1 ? 0.2 : 0.12, 16, 16]} />
          <meshStandardMaterial
            color={i === NODE_POSITIONS.length - 1 ? '#00FF88' : '#00D4FF'}
            emissive={i === NODE_POSITIONS.length - 1 ? '#00FF88' : '#00D4FF'}
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}

      {/* Flowing particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            args={[particlePositions, 3]}
            attach="attributes-position"
          />
        </bufferGeometry>
        <pointsMaterial color="#00D4FF" size={0.04} sizeAttenuation transparent opacity={0.6} />
      </points>

      <pointLight position={[0, 0, 3]} color="#00D4FF" intensity={2} distance={10} />
    </group>
  )
}
