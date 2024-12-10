export const Hero = () => {
  return (
    <section className="bg-primary-green bg-gradient-to-b from-75% to-75% from-primary-green to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-10">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-auto">
            <h1 className="text-primary-yellow font-markazi text-4xl md:text-6xl font-medium">
              Little Lemon
            </h1>
            <h2 className="text-white font-karla text-2xl md:text-3xl mb-4">
              Chicago
            </h2>
            <p className="text-gray-100 font-karla text-lg md:text-xl max-w-md mb-8 font-bold">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button
              className="inline-block font-karla bg-primary-yellow text-black font-medium px-8 py-3 rounded-full hover:bg-[#E4BE04] transition-colors duration-200"
            >
              Reserve a Table
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative max-w-[350px] max-h-[370px] rounded-lg overflow-hidden">
              <img
                src="src\assets\restauranfood.jpg"
                alt="Mediterranean appetizers"
                className="h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}