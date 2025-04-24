import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop