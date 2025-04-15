import BentoBox from "@/components/BentoBox"
import {
    Code,
    MonitorSmartphone,
    Sparkles,
    Paintbrush,
    Cpu,
    Rocket,
  } from "lucide-react"

const features = [
  {
    title: "Responsive Design",
    description: "Perfectly optimized for all devices and screen sizes.",
    image: "/assets/a1.gif",
  },
  {
    title: "Smooth Animations",
    description: "Bring life to your UI with Framer Motion interactions.",
    image: "/assets/b.gif",
    span: "row-span-2",
  },
  {
    title: "Clean Code",
    description: "Readable, scalable, and maintainable code architecture.",
    span: "col-span-2",
    image: "/assets/f.gif",
  },
  {
    title: "Custom UI",
    description: "Designs tailored specifically for your brand and audience.",
    image: "/assets/c1.gif",
  },
  {
    title: "Blazing Fast",
    description: "Optimized performance ensures quick load times.",
    image: "/assets/e.gif",
  },
  {
    title: "Modern Tech Stack",
    description: "Built with Next.js, Tailwind, and more.",
    image: "/assets/f1.gif",
    span: "col-span-1",
  },
]

export default function Bento() {
  return (
    <main>
      <BentoBox features={features} />
    </main>
  )
}
