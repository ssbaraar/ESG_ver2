"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chatbot } from "@/components/chatbot"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("chat")

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our AI-Powered ESG Solutions
      </motion.h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="chat">AI Chatbot</TabsTrigger>
          <TabsTrigger value="upload">Document Analysis</TabsTrigger>
          <TabsTrigger value="market">Market Trends</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full backdrop-blur-lg bg-opacity-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle>{activeTab === "chat" ? "AI-Powered ESG Assistant" : activeTab === "upload" ? "Document Analysis & Report Generation" : "ESG Market Trends Analysis"}</CardTitle>
                <CardDescription>{activeTab === "chat" ? "Chat with our AI to get instant insights on ESG topics." : activeTab === "upload" ? "Upload and analyze documents to generate comprehensive ESG reports." : "Stay ahead with AI-generated market research on ESG trends and scenarios."}</CardDescription>
              </CardHeader>
              <CardContent>
                <TabsContent value="chat">
                  <Chatbot />
                </TabsContent>
                <TabsContent value="upload">
                  <div className="text-center p-8">
                    <Image 
                      src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=500&q=80" 
                      alt="Document Analysis"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-lg mx-auto mb-4"
                    />
                    <p className="mb-4">Upload your documents here for AI-powered analysis and ESG report generation.</p>
                    <Button>Upload Documents</Button>
                  </div>
                </TabsContent>
                <TabsContent value="market">
                  <div className="text-center p-8">
                    <Image 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80" 
                      alt="Market Trends"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-lg mx-auto mb-4"
                    />
                    <p className="mb-4">Explore the latest ESG market trends and get AI-generated insights.</p>
                    <Button>Generate Market Report</Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Tabs>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "1. Input Your Data", content: "Upload your ESG-related documents or use our chatbot to input your data and questions." },
            { title: "2. AI Analysis", content: "Our advanced AI algorithms process your data, extracting key insights and identifying trends." },
            { title: "3. Actionable Insights", content: "Receive comprehensive reports, real-time market analysis, and strategic recommendations." }
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{step.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">Experience the Power of AI in ESG</h2>
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">Start Your Free Trial</Button>
      </motion.section>
    </div>
  )
}