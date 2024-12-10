export const Nav = () => {
  return (
    <nav className="hidden sm:ml-6 md:flex sm:space-x-8 font-karla">
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center">
        Home
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center">
        About
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center">
        Menu
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center">
        Reservations
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center">
        Order Online
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center">
        Login
      </div>
    </nav>
  )
}