import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Serviceus from '../components/Works/Serviceus'
import Whatsapp from '../components/Whatsapp'
import { useEffect } from 'react'
import Hero from '../components/Works/Hero'

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Navbar />
    <div>
      <Whatsapp />
      <Hero />
      <Serviceus />
    </div>
    <Footer />
    </main>
  )
}

export default Services
