import { ItemCard } from "./ItemCard"

export const Highlights = () => {
  const specials = [
    {
      title: "Greek salad",
      price: "12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      imageSrc: "src/assets/greek salad.webp"
    },
    {
      title: "Bruschetta",
      price: "5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      imageSrc: "src/assets/bruchetta.webp"
    },
    {
      title: "Lemon Dessert",
      price: "5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      imageSrc: "src/assets/lemon dessert.webp"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-normal text-gray-900 font-markazi">This weeks specials!</h2>
          <a
            href="/menu"
            className="bg-primary-yellow text-black font-karla font-semibold px-6 py-2 rounded-full hover:bg-[#E4BE04] transition-colors duration-200"
          >
            Online Menu
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              price={item.price}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

