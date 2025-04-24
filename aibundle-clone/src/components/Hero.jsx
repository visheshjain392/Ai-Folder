import { FiSearch } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Discover the Best AI Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Curated collection of the most powerful AI tools to boost your productivity and creativity.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search AI tools..."
              className="w-full px-5 py-4 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <FiSearch size={20} />
            </button>
          </div>
          
          {/* Popular Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['ChatGPT', 'Midjourney', 'Stable Diffusion', 'DALL-E', 'AI Writing', 'AI Video'].map((tag) => (
              <a
                key={tag}
                href="#"
                className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero