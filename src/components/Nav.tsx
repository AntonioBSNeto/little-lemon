import { useNavigate } from "react-router-dom"

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="hidden sm:ml-6 md:flex sm:space-x-8 font-karla">
      <div
        onClick={() => navigate('/')}
        className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center cursor-pointer"
      >
        Home
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center cursor-pointer">
        About
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center cursor-pointer">
        Menu
      </div>
      <div
        className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center cursor-pointer"
        onClick={() => navigate('/booking')}
      >
        Reservations
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center cursor-pointer">
        Order Online
      </div>
      <div className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold content-center cursor-pointer">
        Login
      </div>
    </nav>
  )
}