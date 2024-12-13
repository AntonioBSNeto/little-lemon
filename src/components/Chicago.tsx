
import { useState } from 'react'

export default function Chicago() {
  const [isFirstImageFront, setIsFirstImageFront] = useState(true)

  const toggleImages = () => {
    setIsFirstImageFront(!isFirstImageFront)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-[#F4CE14] mb-2">Little Lemon</h2>
              <h3 className="text-2xl font-medium text-gray-900">Chicago</h3>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                Founded in the heart of Chicago's culinary scene, Little Lemon brings the authentic flavors of the Mediterranean to the Windy City. Our story began with a simple dream: to share our family's treasured recipes with our community.
              </p>
              <p>
                For over two decades, we've been serving traditional Mediterranean dishes with a modern twist, creating an experience that honors our heritage while embracing contemporary tastes. Our commitment to using fresh, locally-sourced ingredients combined with time-honored cooking techniques has made us a beloved fixture in Chicago's diverse dining landscape.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <div
              className={`absolute transition-all duration-700 ease-in-out w-3/4 h-3/4 cursor-pointer hover:scale-105 ${
                isFirstImageFront
                  ? 'right-0 top-0 z-10 scale-100 opacity-100'
                  : 'right-0 top-0 z-0 scale-95 opacity-80'
              }`}
              onClick={toggleImages}
            >
              <img
                src="src\assets\restaurant.webp"
                alt="Little Lemon restaurant interior"
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div
              className={`absolute transition-all duration-700 ease-in-out w-3/4 h-3/4 cursor-pointer hover:scale-105 ${
                isFirstImageFront
                  ? 'left-0 bottom-0 z-0 scale-95 opacity-80'
                  : 'left-0 bottom-0 z-10 scale-100 opacity-100'
              }`}
              onClick={toggleImages}
            >
              <img
                src="src\assets\restaurant chef B.webp"
                alt="Little Lemon chefs at work"
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

