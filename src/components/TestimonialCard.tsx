import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  image: string
  rating: number
  review: string
}

export default function TestimonialCard({ name, image, rating, review }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'fill-[#F4CE14] text-[#F4CE14]' : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  )
}

