import Hero from "@/components/hero"
import Features from "@/components/features"
import Cta from "@/components/cta"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Carousel from "@/components/carousel"
import BentoGrid from "@/components/bento-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <Carousel />
      <Features />
      <BentoGrid />
      <Cta />
      <Footer />
    </main>
  )
}
