'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 40
const EDGE_THRESHOLD = 2.2

function generateNodes(count: number) {
  return Array.from({ length: count }, () => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4
    ),
    speed: Math.random() * 0.003 + 0.001,
    offset: Math.random() * Math.PI * 2,
  }))
}

export default function NeuralNetworkScene() {
  const groupRef = useRef<THREE.Group>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  const nodes = useMemo(() => generateNodes(NODE_COUNT), [])

  // Build edges once
  const { edgePositions, spherePositions } = useMemo(() => {
    const edgePts: number[] = []
    const spherePts: number[] = []

    nodes.forEach((n) => {
      spherePts.push(n.position.x, n.position.y, n.position.z)
    })

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position)
        if (dist < EDGE_THRESHOLD) {
          edgePts.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          )
        }
      }
    }
    return { edgePositions: edgePts, spherePositions: spherePts }
  }, [nodes])

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3))
    return geo
  }, [edgePositions])

  const spherePositionArray = useMemo(
    () => new Float32Array(spherePositions),
    [spherePositions]
  )

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.04
      groupRef.current.rotation.x = Math.sin(t * 0.02) * 0.1
    }
    // Animate node positions
    if (linesRef.current) {
      const positions = linesRef.current.geometry.attributes.position
      let idx = 0
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ni = nodes[i]
          const nj = nodes[j]
          const px = ni.position.x + Math.sin(t * ni.speed + ni.offset) * 0.3
          const py = ni.position.y + Math.cos(t * ni.speed + ni.offset) * 0.3
          const pz = ni.position.z
          const qx = nj.position.x + Math.sin(t * nj.speed + nj.offset) * 0.3
          const qy = nj.position.y + Math.cos(t * nj.speed + nj.offset) * 0.3
          const qz = nj.position.z
          const dist = Math.sqrt((px - qx) ** 2 + (py - qy) ** 2 + (pz - qz) ** 2)
          if (dist < EDGE_THRESHOLD) {
            positions.setXYZ(idx, px, py, pz)
            positions.setXYZ(idx + 1, qx, qy, qz)
            idx += 2
          }
        }
      }
      positions.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      {/* Nodes as Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            args={[spherePositionArray, 3]}
            attach="attributes-position"
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00D4FF"
          size={0.08}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      {/* Edges */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#00D4FF" transparent opacity={0.25} />
      </lineSegments>

      {/* Glowing center nodes */}
      {nodes.slice(0, 8).map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}
