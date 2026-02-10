import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Spaces from './components/Spaces'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Marketplace from './components/Marketplace'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Spaces />
      <Marketplace />
      <Events />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
