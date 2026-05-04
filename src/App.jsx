import { useState } from 'react'
import {
  Header,
  HeroSlider,
  Services,
  About,
  Features,
  SideMenu,
  Footer,
  FloatingWhatsApp
} from './components'
import './App.css'

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  return (
    <>
      <Header onOpenSideMenu={() => setSideMenuOpen(true)} />
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />

      <main>
        <HeroSlider />
        <Services />
        <About />
        <Features />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App