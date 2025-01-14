"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppPopup } from "./whatsapp-popup"

const wishes = [
  "🌞 May the golden sun 🌅 shine brightly on your path and bring you endless joy this Makar Sankranti! 🎉",
  "🎋 Wishing you a harvest 🌾 of happiness, prosperity 💰, and success 🌟 this Makar Sankranti!",
  "On this auspicious day, may your heart be filled with light 🌟 and your dreams take flight 🕊️. Happy Makar Sankranti! 🎉",
  "🪁 Let your hopes soar like a kite, 🌤️ and may your life be as vibrant as the festival of Makar Sankranti! 🌞",
  "🍬 As you enjoy the sweetness of tilgul, may your life too be filled with sweet moments 💕 and positivity 🌸. Happy Makar Sankranti!",
  "🛶 Let this Makar Sankranti bring you smooth sails 🚤 toward a future full of success 💼 and joy 🌻.",
  "🌈 May the colorful kites 🎏 of happiness 🥳 fill your skies with endless joy and luck 🍀 this Makar Sankranti!",
  "🌞 May the blessings of Makar Sankranti shower upon you like warm rays of sunshine 🌅, bringing prosperity 💰 and peace 🕊️.",
  "💫 Let the winds of Makar Sankranti carry you to new heights 🚀 and may all your dreams 🌠 come true.",
  "🍃 Wishing you a season full of bountiful harvest 🌾, good fortune 💎, and an abundance of happiness 😊 this Makar Sankranti!",
  "🪁 Fly high on the wings of joy 🌟, let the wind of Makar Sankranti fill your life with bliss 🎉 and peace 🕊️.",
  "🎆 Celebrate with a heart full of warmth 💖 and a soul full of light ✨. May this Makar Sankranti bring you all the joy you deserve!",
  "🌻 May this Makar Sankranti be the start of a year full of growth 🌱, success 🎯, and bright new beginnings 🌅.",
  "💫 May the kites of Makar Sankranti lift you to success 🌟, and may you find joy in every step you take 🏆.",
  "🎉 Happy Makar Sankranti! May your days be as sweet as tilgul 🍬, your heart as warm as the sun ☀️, and your life full of happiness! 🎇",
  "May this Makar Sankranti fill your life with joy and prosperity",
  "Wishing you a harvest of happiness and success this Sankranti",
  "Let the warmth of Sankranti bring happiness to your home",
  "May your life soar high like the colorful kites this festival",
  "Sending you sweet wishes on this auspicious day of Makar Sankranti"
]

const imageUrls = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti5-2KHR2auVOIT5IxOeB8nIfhaKAE3G4m.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti1-tRAjiC3qdYOCXEIAIYIeJS6uqxk4N1.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti4-gpfS1DvWp1dKEtBGY6A1zN6g6ZxGdb.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti3-PiZOXsd43eS41Wu8TGspcZvzITQ60o.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankranti2-ljOfJVjdynV35KBQqkocMOGjmm6UR9.jpeg"
]

export function WishesGenerator() {
  const [currentWish, setCurrentWish] = useState(wishes[0])
  const [currentImage, setCurrentImage] = useState(imageUrls[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      generateWish()
    }
  }, [])

  const generateWish = () => {
    setIsAnimating(true)
    const newWish = wishes[Math.floor(Math.random() * wishes.length)]
    const newImage = imageUrls[Math.floor(Math.random() * imageUrls.length)]
    setCurrentWish(newWish)
    setCurrentImage(newImage)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const sendWishViaWhatsApp = (phoneNumber: string) => {
    if (typeof window !== 'undefined') {
      const wishText = encodeURIComponent(currentWish)
      const imageUrl = encodeURIComponent(currentImage)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${wishText}%0A%0A${imageUrl}`
      window.open(whatsappUrl, "_blank")
      setIsPopupOpen(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-orange-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-800 mb-8">
          Generate Festival Wishes
        </h2>
        <Card className="bg-white/90 backdrop-blur shadow-xl">
          <CardContent className="p-8">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt="Makar Sankranti Wish"
              className="w-full h-48 object-cover rounded-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              key={currentWish}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl text-orange-700 mb-8"
            >
              {currentWish}
            </motion.p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={generateWish}
                disabled={isAnimating}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Generate New Wish
              </Button>
              <Button
                onClick={() => setIsPopupOpen(true)}
                className="bg-green-500 hover:bg-green-600"
              >
                Send Wishes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <WhatsAppPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSend={sendWishViaWhatsApp}
      />
    </section>
    
  )
}
