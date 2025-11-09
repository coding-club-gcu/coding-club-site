"use client"
import { useTextScramble } from "@/hooks/use-text-scramble"
import Ballpit from "@/components/hero-background.tsx"
import { useRouter } from "next/navigation"
import Image from "next/image"
import MorphingRectangle from "@/components/morphing-rectangle"

export default function HeroSection() {
  const { displayText: scrambledCodenix } = useTextScramble("Codénix", 60)
  const router = useRouter()

  const handleJoinUs = () => {
    router.push('/about')
  }

  const handleLearnMore = () => {
    router.push('/about')
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} className="min-h-screen max-h-screen">
      <div className="absolute md:p-11 flex justify-between items-center top-0 w-full h-24 md:h-48 z-50 px-4 sm:px-8">
        <div className="relative w-32 md:h-full h-10 scale-150">
          <Image src="/Logo-White.png" alt="Codenix Logo" fill style={{ objectFit: 'contain' }}/>
        </div>
        <div className="relative w-32 md:h-full h-10">
          <Image src="/GCU-Logo-2.png" alt="GCU Logo" fill style={{ objectFit: 'contain' }}/>
        </div>
      </div>
      <div className="hidden md:block h-screen z-0 pointer-events-none">
        <Ballpit
          count={20}
          maxVelocity={0.09}
          gravity={0}
          friction={1}
          wallBounce={1}
          ambientIntensity={1}
          lightIntensity={200}
          colors={[255, 255, 255]}
          ambientColor={16777215}
          maxSize={0.8}
        />
      </div>
      <div className="md:hidden h-screen z-0 pointer-events-none">
        <Ballpit
          count={20}
          maxVelocity={0.09}
          gravity={0}
          friction={1}
          wallBounce={1}
          ambientIntensity={1}
          lightIntensity={200}
          colors={[255, 10, 100]}
          ambientColor={16777215}
          maxSize={0.5}
        />
      </div>
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <MorphingRectangle>
          <div className="relative z-1 text-center">
            <h1 className="text-4xl md:text-9xl font-bold">
              <span className="text-gradient-gold animate-gradient-x">{scrambledCodenix}</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Girijananda Chowdhury University Coding Club
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 animate-fade-in w-full " style={{ animationDelay: "0.6s" }}>
              <button
                onClick={handleJoinUs}
                className="px-6 sm:px-4 py-3 w-1/2 md:w-full bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
              >
                Join Us
              </button>
              <button
                onClick={handleLearnMore}
                className="px-6 sm:px-8 py-3 border w-1/2 md:w-full border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        </MorphingRectangle>
      </div>
    </div>
  )
}

