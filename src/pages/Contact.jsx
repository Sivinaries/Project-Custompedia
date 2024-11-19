import Contactus from "../components/Contactus"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Whatsapp from "../components/Whatsapp"


function Contact() {
  return (
    <main>
      <Navbar />
      <div>
        <Whatsapp />
        <Contactus />
      </div>
      <Footer />
    </main>
  )
}

export default Contact
