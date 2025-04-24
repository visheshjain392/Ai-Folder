import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ToolsGrid from './components/ToolsGrid'
import Categories from './components/Categories'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <ToolsGrid />
          <Categories />
          <Newsletter />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App