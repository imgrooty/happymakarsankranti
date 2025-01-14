"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WhatsAppPopupProps {
  isOpen: boolean
  onClose: () => void
  onSend: (phoneNumber: string) => void
}

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+977", country: "Nepal" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  // Add more country codes as needed
]

export function WhatsAppPopup({ isOpen, onClose, onSend }: WhatsAppPopupProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+91")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSend(`${countryCode}${phoneNumber}`)
    setPhoneNumber("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Send Wishes via WhatsApp</h3>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 mb-4">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Country Code" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.country} ({country.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Wishes</Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

