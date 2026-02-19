'use client'

import { useEffect, useRef } from 'react'
import { Bot, User } from 'lucide-react'
import type { ChatMessage } from '@/types'

interface AgentChatProps {
  messages: ChatMessage[]
}

export default function AgentChat({ messages }: AgentChatProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 min-h-0">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {/* Avatar */}
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${
              message.role === 'user'
                ? 'bg-[#1E3A5F] text-[#7E9CC0]'
                : 'bg-[#00D4FF]/20 text-[#00D4FF]'
            }`}
          >
            {message.role === 'user' ? (
              <User className="w-3.5 h-3.5" />
            ) : (
              <Bot className="w-3.5 h-3.5" />
            )}
          </div>

          {/* Bubble */}
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              message.role === 'user'
                ? 'bg-[#1E3A5F] text-[#F0F4FF] rounded-tr-sm'
                : 'bg-[#111C35] border border-[#1E3A5F] text-[#7E9CC0] rounded-tl-sm'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
