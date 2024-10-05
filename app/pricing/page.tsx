"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses just starting their ESG journey",
    features: [
      "AI-powered ESG assessment",
      "Basic report generation",
      "Access to ESG knowledge base",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "$149",
    description: "Ideal for growing companies with complex ESG needs",
    features: [
      "All Starter features",
      "Advanced AI analytics",
      "Custom report builder",
      "Real-time market insights",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "All Professional features",
      "Dedicated account manager",
      "Custom AI model training",
      "API access",
      "On-premise deployment options"
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Your Plan
      </motion.h1>
      <motion.p 
        className="text-xl mb-12 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Start your free 14-day trial. No credit card required.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/month</span></p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 mt-auto">
                <Button className="w-full">Start Free Trial</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}