const Categories = () => {
    const categories = [
      { name: 'AI Writing', icon: '✍️', count: 42 },
      { name: 'AI Image', icon: '🖼️', count: 36 },
      { name: 'AI Video', icon: '🎥', count: 28 },
      { name: 'AI Code', icon: '💻', count: 31 },
      { name: 'AI Voice', icon: '🎙️', count: 19 },
      { name: 'AI Chat', icon: '💬', count: 27 },
      { name: 'AI Music', icon: '🎵', count: 15 },
      { name: 'AI Design', icon: '🎨', count: 23 },
    ]
  
    return (
      <section id="categories" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Browse by Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find AI tools organized by categories to suit your specific needs.
            </p>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-medium text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {category.count} tools
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Categories