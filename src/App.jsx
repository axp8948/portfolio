import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <section id="home"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  )
}

export default App
