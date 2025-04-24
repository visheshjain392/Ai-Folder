import { useState } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Categories', href: '#categories' },
    { name: 'Popular', href: '#popular' },
    { name: 'About', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          AIBundle
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Theme Toggle and CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <a
            href="#"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit Tool
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-center"
            >
              Submit Tool
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header