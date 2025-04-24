import ToolCard from './ToolCard'
import { tools } from '../constants/tools'

const ToolsGrid = () => {
  return (
    <section id="popular" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Popular AI Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the most popular and trending AI tools used by professionals worldwide.
          </p>
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium">
            View All Tools
          </button>
        </div>
      </div>
    </section>
  )
}

export default ToolsGrid