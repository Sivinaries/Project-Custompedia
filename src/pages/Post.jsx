import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Postdetail from '../components/News/Postdetail'
import Whatsapp from '../components/Whatsapp'


function Post() {
  return (
    <main>
      <Navbar />
      <div>
        <Whatsapp />
        <Postdetail />
      </div>
      <Footer />
    </main>
  )
}

export default Post
