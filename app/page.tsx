import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  )
}