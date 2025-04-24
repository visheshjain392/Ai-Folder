import { FiExternalLink, FiStar } from 'react-icons/fi'

const ToolCard = ({ tool }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex items-start space-x-4">
          {/* Tool Logo */}
          <div className="flex-shrink-0">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="w-12 h-12 object-contain rounded-lg"
            />
          </div>
          
          {/* Tool Info */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                {tool.name}
              </h3>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                {tool.category}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {tool.description}
            </p>
            
            {/* Rating and Pricing */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center">
                <FiStar className="text-yellow-400" />
                <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tool.rating}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tool.pricing}
              </span>
            </div>
          </div>
        </div>
        
        {/* Visit Button */}
        <div className="mt-4">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
          >
            Visit <FiExternalLink className="ml-2" size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ToolCard