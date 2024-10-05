import { CheckCircle } from 'lucide-react'

const features = [
  'Responsive Design',
  'SEO Optimization',
  'Custom CMS Integration',
  '24/7 Support',
  'Performance Optimization',
  'Security Enhancements',
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="w-6 h-6 text-primary mr-4" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}