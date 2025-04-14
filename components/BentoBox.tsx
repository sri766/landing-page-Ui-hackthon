"use client"

import { motion } from "framer-motion"

type Feature = {
  title: string
  description: string
  icon?: React.ReactNode
  span?: string
  image?: string
}

interface BentoBoxProps {
  features: Feature[]
}

export default function BentoBox({ features }: BentoBoxProps) {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container max-w-6xl px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center font-stay-wild mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative rounded-2xl p-6 border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-slate-800/60 bg-blend-overlay bg-cover bg-center ${
                feature.span || ""
              }`}
              style={{
                backgroundImage: feature.image ? `url(${feature.image})` : undefined,
              }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 font-orkney">{feature.description}</p>
              </div>
              <div className="absolute inset-0 bg-black/50 z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
