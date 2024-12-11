export default function Footer() {
  return (
    <footer className="bg-[#465B4B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <img
              src="src\assets\Asset 9@4x.png"
              alt="Little Lemon logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-[#F4CE14] font-semibold text-lg mb-4">Doormat Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#F4CE14] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#F4CE14] transition-colors">About</a></li>
              <li><a href="/menu" className="hover:text-[#F4CE14] transition-colors">Menu</a></li>
              <li><a href="/reservations" className="hover:text-[#F4CE14] transition-colors">Reservations</a></li>
              <li><a href="/order" className="hover:text-[#F4CE14] transition-colors">Order Online</a></li>
              <li><a href="/login" className="hover:text-[#F4CE14] transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[#F4CE14] font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>123 Restaurant Lane</li>
              <li>Chicago, IL 60601</li>
              <li>(312) 555-0123</li>
              <li>
                <a href="mailto:info@littlelemon.com" className="hover:text-[#F4CE14] transition-colors">
                  info@littlelemon.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-[#F4CE14] font-semibold text-lg mb-4">Social Media Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4CE14] transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4CE14] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4CE14] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4CE14] transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

