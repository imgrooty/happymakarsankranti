"use client"

import { motion } from "framer-motion"
import { Sun, Calendar, Users, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const festivalInfo = [
  {
    icon: Sun,
    title: "Solar Significance",
    description: "Marks the sun's transit into Capricorn (Makar) constellation"
  },
  {
    icon: Calendar,
    title: "Harvest Festival",
    description: "Celebrates the beginning of harvest season across India"
  },
  {
    icon: Users,
    title: "Cultural Celebration",
    description: "Features kite flying, traditional foods, and community gatherings"
  },
  {
    icon: MapPin,
    title: "Regional Names",
    description: "Known as Pongal, Lohri, Magh Bihu in different regions"
  }
]

export function FestivalInfo() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {festivalInfo.map((info, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur">
              <CardHeader>
                <info.icon className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle>{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

