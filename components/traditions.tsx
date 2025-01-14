"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const traditions = [
  {
    title: "Kite Flying",
    description: "People gather on terraces to fly colorful kites in the sky",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti4-gpfS1DvWp1dKEtBGY6A1zN6g6ZxGdb.jpeg"
  },
  {
    title: "Traditional Foods",
    description: "Special dishes made from sesame and jaggery are prepared",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti1-tRAjiC3qdYOCXEIAIYIeJS6uqxk4N1.jpeg"
  },
  {
    title: "Festive Decorations",
    description: "Homes and public spaces are adorned with colorful decorations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti5-2KHR2auVOIT5IxOeB8nIfhaKAE3G4m.jpeg"
  }
]

export function Traditions() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-800 text-center mb-12">
          Festival Traditions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {traditions.map((tradition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <Image
                  src={tradition.image}
                  alt={tradition.title}
                  width={300}
                  height={200}
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">
                    {tradition.title}
                  </h3>
                  <p className="text-gray-600">{tradition.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

