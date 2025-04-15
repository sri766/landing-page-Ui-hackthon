"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Immersive Experiences",
    description: "Create stunning digital experiences that captivate your audience",
    image: "/assets/1.jpeg",
    color: "from-purple-600 to-blue-600",
  },
  {
    id: 2,
    title: "Cutting-Edge Technology",
    description: "Leverage the latest web technologies for unparalleled performance",
    image: "/assets/2.jpeg",
    color: "from-pink-600 to-purple-600",
  },
  {
    id: 3,
    title: "Creative Freedom",
    description: "Unleash your creativity with our flexible design system",
    image: "/assets/3.jpeg",
    color: "from-blue-600 to-cyan-600",
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const nextSlide = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  useEffect(() => {
    setIsMounted(true)

    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, current])

  if (!isMounted) {
    return (
      <section className="py-12 relative overflow-hidden bg-black">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-stay-wild text-3xl md:text-5xl font-bold mb-6">Featured Showcases</h2>
            <p className="font-orkney text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our collection of innovative digital experiences that push the boundaries of web design.
            </p>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute -top-10 -right-10 w-[300px] h-[300px] scale-90 md:scale-100 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 blur-3xl opacity-40 animate-pulse" />
              <div
                className="absolute top-0 right-0 w-[500px] h-[800px] bg-no-repeat bg-contain bg-top-right"
                style={{ backgroundImage: `url(${slides[0].image})` }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4 md:px-10">
                <div className="max-w-lg">
                  <h3 className="font-stay-wild text-4xl md:text-5xl font-bold mb-4">{slides[0].title}</h3>
                  <p className="font-orkney text-lg text-gray-200 mb-6">{slides[0].description}</p>
                  <Button className={`bg-gradient-to-r ${slides[0].color} hover:opacity-90 font-orkney`} size="lg">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-stay-wild text-3xl md:text-5xl font-bold mb-6">Featured Showcases</h2>
          <p className="font-orkney text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our collection of innovative digital experiences that push the boundaries of web design.
          </p>
        </motion.div>

        <div className="relative h-[800px] md:h-[600px] rounded-2xl overflow-hidden z-10">
          {/* Glowing gradient background */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-radial from-purple-500 via-amber-500 to-transparent rounded-full blur-3xl opacity-20 z-0 pointer-events-none" />

          <AnimatePresence mode="wait">
            {slides.map(
              (slide, index) =>
                current === index && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                  >
                    {/* Top-right image */}
                    <div className="absolute inset-0 z-0">
                      <div className="absolute -top-10 -right-10 w-[300px] h-[300px] scale-90 md:scale-100 rounded-full bg-gradient-to-br from-purple-500 via-purle-500 to-amber-500 blur-3xl opacity-40 animate-pulse" />
                      <div
                        className="absolute top-0 right-0 w-[500px] h-[800px] bg-no-repeat bg-contain bg-top-right -rotate-12"
                        style={{ backgroundImage: `url(${slide.image})` }}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center z-20">
                      <div className="container mx-auto px-4 ml-12 md:px-10">
                        <div className="max-w-lg">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="font-stay-wild text-4xl md:text-5xl font-bold mb-4"
                          >
                            {slide.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="font-orkney text-lg text-gray-200 mb-6"
                          >
                            {slide.description}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <Button
                              className={`bg-gradient-to-r ${slide.color} hover:opacity-90 font-orkney`}
                              size="lg"
                            >
                              Explore
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full h-12 w-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full h-12 w-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          {/* Dots navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-white w-6" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
