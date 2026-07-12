
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
import CVPrint from './components/CVPrint'

function App() {
  return (

    <div className="font-sans antialiased transition-colors duration-300"
    >
      <SEO />
      <div className="min-h-screen print:hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <CVPrint />
    </div>
  )
}

export default App;
