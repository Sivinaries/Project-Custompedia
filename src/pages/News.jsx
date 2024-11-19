import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsus from '../components/News/Newsus'
import Whatsapp from '../components/Whatsapp'

function News() {
  return (
    <main>
      <Navbar />
    <div>
      <Whatsapp />
      <Newsus />
    </div>
    <Footer />
    </main>
  )
}

export default News
