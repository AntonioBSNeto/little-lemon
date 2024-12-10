interface ItemCardProps {
  title: string
  price: string
  description: string
  imageSrc: string
}

export const  ItemCard = ({ title, price, description, imageSrc }: ItemCardProps) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-48">
        <img
          src={imageSrc}
          alt={title}
          className=" w-full object-cover max-h-[184px]"
        />
      </div>
      <div className="p-6 font-markazi flex flex-col flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <span className="text-[#F4CE14] font-medium text-xl">${price}</span>
        </div>
        <p className="text-gray-600 mb-4 text-lg">
          {description}
        </p>
        <a
          href="/order"
          className="inline-flex items-center text-base font-karla font-medium text-gray-900 hover:text-[#465B4B] mt-auto"
        >
          Order a delivery
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

