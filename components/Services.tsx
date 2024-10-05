import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Globe, Code, Server } from 'lucide-react'

const services = [
  {
    title: 'Web Design',
    description: 'Create stunning, responsive websites that captivate your audience.',
    icon: Globe,
  },
  {
    title: 'Web Development',
    description: 'Build powerful web applications with cutting-edge technologies.',
    icon: Code,
  },
  {
    title: 'Web Hosting',
    description: 'Reliable and secure hosting solutions for your website.',
    icon: Server,
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}