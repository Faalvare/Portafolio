
import './App.css'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'

function App() {
  return (

    <div className="min-h-screen font-sans antialiased transition-colors duration-300"
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none
          bg-[radial-gradient(circle,_rgba(37,99,235,0.18)_1px,_transparent_1px)]
          dark:bg-[radial-gradient(circle,_rgba(96,165,250,0.14)_1px,_transparent_1px)]
          [background-size:26px_26px]
          [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]"
      />
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
