'use client'

import { useState, useRef, useCallback } from 'react'
import type { ChatMessage } from '@/types'

type AgentStatus = 'idle' | 'listening' | 'thinking' | 'speaking' | 'error'

interface UseVoiceAgentReturn {
  messages: ChatMessage[]
  status: AgentStatus
  isOpen: boolean
  inputText: string
  setInputText: (text: string) => void
  openAgent: () => void
  closeAgent: () => void
  sendMessage: (text: string) => Promise<void>
  startListening: () => void
  stopListening: () => void
  clearMessages: () => void
}

// Speech Recognition type shim
interface ISpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  onstart: (() => void) | null
  onresult: ((event: SpeechRecognitionEventShim) => void) | null
  onend: (() => void) | null
  onerror: ((event: Event) => void) | null
}

interface SpeechRecognitionEventShim {
  results: SpeechRecognitionResultList
}

declare global {
  interface Window {
    SpeechRecognition?: new () => ISpeechRecognition
    webkitSpeechRecognition?: new () => ISpeechRecognition
  }
}

export function useVoiceAgent(): UseVoiceAgentReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi! I'm ARIA, KC Tech Team's AI assistant. I can answer questions about our AI consulting, IT managed services, automation, and cybersecurity solutions for Kansas City businesses. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [status, setStatus] = useState<AgentStatus>('idle')
  const [isOpen, setIsOpen] = useState(false)
  const [inputText, setInputText] = useState('')
  const recognitionRef = useRef<ISpeechRecognition | null>(null)

  const openAgent = useCallback(() => setIsOpen(true), [])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }
    setStatus('idle')
  }, [])

  const closeAgent = useCallback(() => {
    setIsOpen(false)
    stopListening()
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
  }, [stopListening])

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          "Hi! I'm ARIA, KC Tech Team's AI assistant. How can I help you today?",
        timestamp: new Date(),
      },
    ])
  }, [])

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || status === 'thinking') return

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: text.trim(),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setStatus('thinking')

      try {
        const history = messages
          .filter((m) => m.id !== 'welcome')
          .map((m) => ({ role: m.role, content: m.content }))

        const res = await fetch('/api/ai-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text.trim(), history }),
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Failed to get response')

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        setStatus('idle')

        // TTS
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(data.response)
          utterance.rate = 0.95
          utterance.pitch = 1.1
          utterance.volume = 0.9
          const voices = window.speechSynthesis.getVoices()
          const preferredVoice = voices.find(
            (v) => v.name.includes('Google') || v.name.includes('Samantha') || v.lang === 'en-US'
          )
          if (preferredVoice) utterance.voice = preferredVoice
          utterance.onstart = () => setStatus('speaking')
          utterance.onend = () => setStatus('idle')
          window.speechSynthesis.speak(utterance)
        }
      } catch {
        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            "I'm sorry, I couldn't process that request. Please try again or contact KC Tech Team directly at (816) 555-0100.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    },
    [messages, status]
  )

  const startListening = useCallback(() => {
    if (typeof window === 'undefined') return

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognitionAPI) {
      alert('Speech recognition is not supported in your browser. Please use Chrome.')
      return
    }

    const recognition = new SpeechRecognitionAPI()
    recognition.continuous = false
    recognition.interimResults = true
    recognition.lang = 'en-US'

    let finalTranscript = ''

    recognition.onstart = () => setStatus('listening')
    recognition.onresult = (event: SpeechRecognitionEventShim) => {
      finalTranscript = Array.from(event.results)
        .map((r) => (r as SpeechRecognitionResult)[0].transcript)
        .join('')
      setInputText(finalTranscript)
    }
    recognition.onend = () => {
      setStatus('idle')
      if (finalTranscript.trim()) {
        sendMessage(finalTranscript)
        setInputText('')
      }
    }
    recognition.onerror = () => {
      setStatus('idle')
    }

    recognitionRef.current = recognition
    recognition.start()
  }, [sendMessage])

  return {
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
  }
}
