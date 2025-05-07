import Nav from './components/Nav'
import Introduction from './components/Introduction'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import Education from './components/Education'
import Work from './components/Work'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Introduction />
        <About />
        <Education />
        <Work />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
