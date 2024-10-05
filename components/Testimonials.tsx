import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Innovators',
    content: 'WebTech Solutions transformed our online presence. Their team is professional and delivered beyond our expectations.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Jane Smith',
    company: 'Creative Studios',
    content: 'The web application they built for us has significantly improved our business processes. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}