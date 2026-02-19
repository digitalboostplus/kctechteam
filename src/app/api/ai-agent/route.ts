import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { ARIA_SYSTEM_PROMPT } from '@/lib/gemini'

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      return NextResponse.json(
        { error: 'Gemini API key not configured. Please add GEMINI_API_KEY to .env.local' },
        { status: 503 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: ARIA_SYSTEM_PROMPT,
    })

    // Build chat history
    const formattedHistory = (history || []).map((msg: { role: string; content: string }) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }))

    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.7,
      },
    })

    const result = await chat.sendMessage(message)
    const response = result.response.text()

    return NextResponse.json({ response })
  } catch (error) {
    console.error('AI Agent error:', error)
    return NextResponse.json(
      { error: 'Failed to get AI response. Please try again.' },
      { status: 500 }
    )
  }
}
