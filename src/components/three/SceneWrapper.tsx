'use client'

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { cn } from '@/lib/utils'

interface SceneWrapperProps {
  children: React.ReactNode
  className?: string
  camera?: { position: [number, number, number]; fov?: number }
  style?: React.CSSProperties
}

export default function SceneWrapper({
  children,
  className,
  camera = { position: [0, 0, 5], fov: 60 },
  style,
}: SceneWrapperProps) {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (reduced) return null

  return (
    <div className={cn('w-full h-full', className)} style={style} aria-hidden="true">
      <Canvas
        camera={camera}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}
