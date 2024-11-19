import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Category from '../components/News/Category'
import Whatsapp from '../components/Whatsapp'

function Categories() {
  return (
    <main>
      <Navbar />
      <div>
        <Whatsapp />
        <Category />
      </div>
      <Footer />
    </main>
  )
}

export default Categories
