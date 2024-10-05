import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 mb-2 text-green-500" />,
      title: "AI-Powered Chatbot",
      description: "Engage in intelligent conversations about ESG topics and get instant insights."
    },
    {
      icon: <FileText className="h-8 w-8 mb-2 text-blue-500" />,
      title: "Document Analysis",
      description: "Upload and analyze documents to generate comprehensive ESG reports."
    },
    {
      icon: <TrendingUp className="h-8 w-8 mb-2 text-purple-500" />,
      title: "Market Research",
      description: "Stay ahead with AI-generated market research on ESG trends and scenarios."
    }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Card className="backdrop-blur-sm bg-opacity-50 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </section>
  )
}