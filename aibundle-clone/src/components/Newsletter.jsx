const Newsletter = () => {
    return (
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 text-indigo-100">
              Subscribe to our newsletter to get the latest AI tools and updates delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-sm text-indigo-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Newsletter