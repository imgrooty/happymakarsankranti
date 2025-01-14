import { HeroSection } from "@/components/hero-section"
import { FestivalInfo } from "@/components/festival-info"
import { WishesGenerator } from "@/components/wishes-generator"
import { Traditions } from "@/components/traditions"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100">
      <HeroSection />
      <FestivalInfo />
      <WishesGenerator />
      <Traditions />
      <Footer />
    </main>
  )
}
