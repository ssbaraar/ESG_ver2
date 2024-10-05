"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"

export function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your AI-powered ESG assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Here you would typically send the input to your AI backend and get a response
      // For now, we'll just simulate a response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: "I'm processing your request about: " + input }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="flex flex-col h-[400px]">
      <ScrollArea className="flex-grow p-4 border rounded-md mb-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
            >
              <span className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}>
                {message.content}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  )
}