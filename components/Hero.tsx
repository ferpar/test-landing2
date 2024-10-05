import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Transform Your Online Presence</h1>
        <p className="text-xl mb-8">Professional web services tailored to your business needs</p>
        <Button size="lg" asChild>
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </section>
  )
}