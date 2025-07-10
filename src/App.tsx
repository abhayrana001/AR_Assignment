import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Development from "./components/Development"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"


const App = () => {
  return (
    <div>
      <Header />
      <main className="scroll-smooth">
        <section id="home" className="scroll-mt-20"><Home /></section>
        <section id="about" className="scroll-mt-18"><About /></section>
        <section id="services" className="scroll-mt-20"><Services /></section>
        <section id="blog" className="scroll-mt-20"><Blog /></section>
        <section id="development" className="scroll-mt-20"><Development /></section>
        <section id="contact" className="scroll-mt-20"><Contact /></section>
        <section id="footer"><Footer /></section>
        <img
          src="/arrowup.png"  alt="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="h-8 w-8 md:h-12 md:w-12 fixed bottom-5 right-7 cursor-pointer"
        />

      </main>
    </div>
  )
}

export default App