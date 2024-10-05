import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Features } from "@/components/features"
import { motion } from "framer-motion"
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Transform Your ESG Strategy with AI
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          EcoInsight AI empowers businesses to make data-driven ESG decisions, 
          streamline reporting, and stay ahead of market trends.
        </p>
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
          <Link href="/pricing">Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </motion.section>

      <Features />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Industry Challenges We Solve</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80" 
              alt="Data Complexity"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Data Complexity</h3>
            <p>ESG data is often unstructured and comes from various sources. Our AI simplifies data collection and analysis, providing clear insights.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Regulatory Compliance</h3>
            <p>Stay ahead of changing ESG regulations with our AI-powered compliance tracking and reporting tools.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80" 
              alt="Regulatory Compliance"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your ESG Strategy?</h2>
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
          <Link href="/pricing">Get Started Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">ESG Impact Infographic</h2>
        <div className="relative w-full h-96">
          <Image
            src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80"
            alt="ESG Impact Infographic"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/70 to-blue-500/70 rounded-lg flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-4">ESG Integration Benefits</h3>
              <ul className="list-disc list-inside text-left max-w-md mx-auto">
                <li>20% increase in investor confidence</li>
                <li>15% reduction in operational costs</li>
                <li>30% improvement in brand reputation</li>
                <li>25% boost in employee satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}