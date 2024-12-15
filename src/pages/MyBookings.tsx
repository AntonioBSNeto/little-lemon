import { useState } from 'react'
import BookingCard from '../components/BookingCard'

// In a real app, this would come from an API
const mockBookings = [
  {
    id: 1,
    date: '2024-12-02',
    time: '21:30',
    guests: 4,
    seating: 'indoor' as const,
  },
  {
    id: 2,
    date: '2024-12-05',
    time: '19:00',
    guests: 2,
    seating: 'outdoor' as const,
  },
  {
    id: 3,
    date: '2024-12-10',
    time: '20:00',
    guests: 6,
    seating: 'indoor' as const,
  }
]

export default function MyBookingsPage() {
  const [bookings] = useState(mockBookings)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="mt-2 text-gray-600">View and manage your restaurant reservations</p>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">You don't have any bookings yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                date={booking.date}
                time={booking.time}
                guests={booking.guests}
                seating={booking.seating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

