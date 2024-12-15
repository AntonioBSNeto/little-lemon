import { CalendarDays, Users, HomeIcon } from 'lucide-react'
import { formatDate } from '../lib/utils'

interface BookingCardProps {
  date: string
  time: string
  guests: number
  seating: 'indoor' | 'outdoor'
}

export default function BookingCard({ date, time, guests, seating }: BookingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={`src/assets/${seating}.webp`}
          alt="Restaurant interior"
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-gray-700">
          <CalendarDays className="h-4 w-4" />
          <span className="text-sm">{formatDate(date)} - {time}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Users className="h-4 w-4" />
          <span className="text-sm">{guests} Guests</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <HomeIcon className="h-4 w-4" />
          <span className="text-sm capitalize">{seating}</span>
        </div>
      </div>
    </div>
  )
}

