'use client'

import { useEffect, useRef } from 'react'

interface VoiceWaveformProps {
  active: boolean
  color?: string
}

export default function VoiceWaveform({ active, color = '#00D4FF' }: VoiceWaveformProps) {
  const bars = 12

  return (
    <div className="flex items-center justify-center gap-[3px] h-8">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-150"
          style={{
            width: '3px',
            backgroundColor: color,
            height: active ? `${Math.random() * 24 + 8}px` : '4px',
            opacity: active ? 1 : 0.3,
            animation: active
              ? `waveform ${0.4 + (i % 4) * 0.1}s ease-in-out infinite alternate`
              : 'none',
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes waveform {
          from { height: 4px; }
          to { height: ${active ? '32px' : '4px'}; }
        }
      `}</style>
    </div>
  )
}
