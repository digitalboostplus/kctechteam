'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function createCircuitPaths() {
  const paths: THREE.CatmullRomCurve3[] = []
  const starts = [
    [[-3, 0, 0], [-1, 0, 0], [-1, 1, 0], [1, 1, 0], [1, 0, 0], [3, 0, 0]],
    [[-3, -1, 0], [-2, -1, 0], [-2, 1, 0], [0, 1, 0]],
    [[0, -2, 0], [0, 0, 0], [2, 0, 0], [2, 2, 0]],
    [[-1, 2, 0], [0, 2, 0], [0, 0, 0], [2, 0, 0], [2, -2, 0]],
    [[3, 2, 0], [1, 2, 0], [1, -1, 0], [-1, -1, 0]],
  ]
  starts.forEach((pts) => {
    paths.push(
      new THREE.CatmullRomCurve3(pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)))
    )
  })
  return paths
}

export default function CircuitBoardScene() {
  const groupRef = useRef<THREE.Group>(null)
  const progressRef = useRef(0)

  const paths = useMemo(() => createCircuitPaths(), [])

  const tubeGeometries = useMemo(
    () => paths.map((p) => new THREE.TubeGeometry(p, 32, 0.015, 6, false)),
    [paths]
  )

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.3
      groupRef.current.rotation.y = t * 0.15
    }
    progressRef.current = (t * 0.3) % 1
  })

  return (
    <group ref={groupRef} scale={0.7}>
      {/* Circuit traces */}
      {tubeGeometries.map((geo, i) => (
        <mesh key={i} geometry={geo}>
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Node pads */}
      {[[-1, 1, 0], [1, 1, 0], [1, 0, 0], [0, 0, 0], [2, 0, 0], [-2, -1, 0]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}

      <pointLight position={[0, 0, 2]} color="#00D4FF" intensity={1.5} distance={8} />
    </group>
  )
}
