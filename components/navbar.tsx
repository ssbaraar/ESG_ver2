"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <motion.nav 
      className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          EcoInsight AI
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/" ? "text-primary" : "text-muted-foreground")}>
            Home
          </Link>
          <Link href="/product" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/product" ? "text-primary" : "text-muted-foreground")}>
            Product
          </Link>
          <Link href="/pricing" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/pricing" ? "text-primary" : "text-muted-foreground")}>
            Pricing
          </Link>
          <Link href="/contact" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/contact" ? "text-primary" : "text-muted-foreground")}>
            Contact
          </Link>
          <ThemeToggle />
          <Button asChild size="sm" className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar