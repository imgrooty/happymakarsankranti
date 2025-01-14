"use client"

import { motion, useAnimation } from "framer-motion"
import { Sun, Star } from 'lucide-react'
import { useEffect } from "react"
import { Button } from "./ui/button"

export function HeroSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 2, repeat: Infinity }
    })
  }, [controls])

  const scrollToWishes = () => {
    const wishesSection = document.getElementById('wishes-section')
    wishesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-orange-100 to-yellow-50">
      {/* Animated Rangoli */}
      <motion.div
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10"
      >
        <div className="absolute inset-0 border-8 border-orange-500 rounded-full" />
        <div className="absolute inset-0 border-8 border-orange-500 rounded-full rotate-45" />
        <div className="absolute inset-4 border-8 border-orange-500 rounded-full" />
        <div className="absolute inset-4 border-8 border-orange-500 rounded-full rotate-45" />
      </motion.div>

      {/* Animated Sun */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 right-20"
      >
        <motion.div animate={controls}>
          <Sun className="w-32 h-32 text-yellow-500" />
        </motion.div>
      </motion.div>

      {/* Floating Til-Gul (Sesame-Jaggery Sweets) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sweet-${i}`}
          initial={{ y: Math.random() * 500, x: Math.random() * window.innerWidth, opacity: 0 }}
          animate={{ 
            y: [Math.random() * 500, Math.random() * 500],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute"
        >
          <div className="w-8 h-8 bg-amber-700 rounded-full opacity-60" />
        </motion.div>
      ))}

      {/* Flying Kites with Trails */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`kite-${i}`}
          initial={{ x: -100, y: Math.random() * 500 }}
          animate={{ 
            x: window.innerWidth + 100,
            y: Math.random() * 500,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
          className="absolute"
        >
          <div className="relative">
            <div className="w-16 h-16 rotate-45 bg-gradient-to-br from-red-500 to-orange-500 shadow-lg" />
            <div className="absolute w-1 h-32 bg-black/20 origin-top rotate-45" />
            {/* Kite Trail */}
            {[...Array(5)].map((_, j) => (
              <motion.div
                key={`trail-${j}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, delay: j * 0.2 }}
                className="absolute -left-2 -top-2 w-16 h-16 rotate-45 bg-gradient-to-br from-red-500 to-orange-500 opacity-20"
                style={{
                  transform: `translate(${-j * 8}px, ${-j * 8}px) rotate(45deg)`,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Decorative Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <Star className="w-4 h-4 text-yellow-400" />
        </motion.div>
      ))}

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              opacity: 0,
              y: Math.random() * window.innerHeight,
              x: Math.random() * window.innerWidth 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-block p-2 bg-orange-500 rounded-full">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <Sun className="w-16 h-16 text-orange-500" />
            </div>
          </div>
        </motion.div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-orange-800 mb-6 drop-shadow-lg"
        >
          Happy Makar Sankranti
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-orange-700 max-w-2xl mb-8"
        >
          Celebrating the harvest festival and the sun's transit into Capricorn
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-x-4"
        >
          <Button 
            onClick={scrollToWishes} 
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Generate Wishes
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
