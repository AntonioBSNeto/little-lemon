import TestimonialCard from './TestimonialCard'

export default function CustomersSay() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review: "The Mediterranean flavors at Little Lemon are absolutely authentic! The Greek salad transported me straight to Santorini."
    },
    {
      name: "Michael Chen",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      review: "Fantastic atmosphere and even better food. The bruschetta is a must-try appetizer. Will definitely be coming back!"
    },
    {
      name: "Emily Rodriguez",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review: "The lemon dessert is heavenly! You can really taste the love and tradition in every bite. Perfect end to a perfect meal."
    },
    {
      name: "David Thompson",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      review: "Great service and amazing food. The modern twist on traditional recipes makes this place unique. Highly recommend!"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

