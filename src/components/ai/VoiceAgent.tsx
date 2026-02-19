'use client'

import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Mic, MicOff, Send, Trash2, Volume2 } from 'lucide-react'
import { useVoiceAgent } from '@/hooks/useVoiceAgent'
import AgentChat from './AgentChat'
import VoiceWaveform from './VoiceWaveform'

export default function VoiceAgent() {
  const {
    messages,
    status,
    isOpen,
    inputText,
    setInputText,
    openAgent,
    closeAgent,
    sendMessage,
    startListening,
    stopListening,
    clearMessages,
  } = useVoiceAgent()

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (inputText.trim()) {
        sendMessage(inputText)
        setInputText('')
      }
    },
    [inputText, sendMessage, setInputText]
  )

  const handleMicClick = useCallback(() => {
    if (status === 'listening') {
      stopListening()
    } else {
      startListening()
    }
  }, [status, startListening, stopListening])

  const statusLabel = {
    idle: 'ARIA • Online',
    listening: 'Listening...',
    thinking: 'ARIA is thinking...',
    speaking: 'ARIA is speaking...',
    error: 'Error — try again',
  }[status]

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={openAgent}
            aria-label="Open AI Assistant"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#00D4FF] text-[#060B18] shadow-[0_0_30px_#00D4FF60] flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <Bot className="w-6 h-6" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#00D4FF] animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl border border-[#1E3A5F] bg-[#0D1428] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1E3A5F] bg-[#111C35] shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#00D4FF]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#F0F4FF]">ARIA</p>
                <p className="text-xs text-[#7E9CC0] truncate">{statusLabel}</p>
              </div>
              {/* Status indicator */}
              <div
                className={`w-2 h-2 rounded-full ${
                  status === 'idle' ? 'bg-[#00FF88]' :
                  status === 'listening' ? 'bg-[#00D4FF] animate-pulse' :
                  status === 'thinking' ? 'bg-yellow-400 animate-pulse' :
                  status === 'speaking' ? 'bg-[#00D4FF] animate-pulse' :
                  'bg-red-500'
                }`}
              />
              <button
                onClick={clearMessages}
                aria-label="Clear conversation"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#7E9CC0] hover:text-[#F0F4FF] hover:bg-[#1E3A5F]/50 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={closeAgent}
                aria-label="Close AI assistant"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#7E9CC0] hover:text-[#F0F4FF] hover:bg-[#1E3A5F]/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Waveform (shown when listening/speaking) */}
            {(status === 'listening' || status === 'speaking') && (
              <div className="px-4 py-2 border-b border-[#1E3A5F] bg-[#060B18]/50 shrink-0">
                <VoiceWaveform active={true} color={status === 'listening' ? '#00D4FF' : '#00FF88'} />
              </div>
            )}

            {/* Chat messages */}
            <AgentChat messages={messages} />

            {/* Input area */}
            <div className="border-t border-[#1E3A5F] p-3 shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask ARIA anything..."
                  disabled={status === 'thinking' || status === 'listening'}
                  className="flex-1 bg-[#111C35] border border-[#1E3A5F] rounded-xl px-4 py-2.5 text-sm text-[#F0F4FF] placeholder:text-[#7E9CC0]/50 focus:outline-none focus:border-[#00D4FF]/50 disabled:opacity-50 transition-colors"
                  aria-label="Message ARIA"
                />
                <button
                  type="button"
                  onClick={handleMicClick}
                  disabled={status === 'thinking'}
                  aria-label={status === 'listening' ? 'Stop listening' : 'Start voice input'}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    status === 'listening'
                      ? 'bg-red-500/20 border border-red-500/50 text-red-400 animate-pulse'
                      : 'border border-[#1E3A5F] text-[#7E9CC0] hover:text-[#00D4FF] hover:border-[#00D4FF]/50'
                  }`}
                >
                  {status === 'listening' ? (
                    <MicOff className="w-4 h-4" />
                  ) : (
                    <Mic className="w-4 h-4" />
                  )}
                </button>
                <button
                  type="submit"
                  disabled={!inputText.trim() || status === 'thinking' || status === 'listening'}
                  aria-label="Send message"
                  className="w-10 h-10 rounded-xl bg-[#00D4FF] text-[#060B18] flex items-center justify-center disabled:opacity-40 hover:shadow-[0_0_16px_#00D4FF60] transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-center text-[10px] text-[#7E9CC0]/50 mt-2">
                AI Assistant • KC Tech Team • (816) 555-0100
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
