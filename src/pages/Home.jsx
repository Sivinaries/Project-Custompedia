import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactus from '../components/Contactus'
import Workus from '../components/Home/Workus'
import Motion from '../components/Home/Motion'
import OurNetwork from '../components/Home/OurNetwork'
import Quote1 from '../components/Home/Quote1'
import OurServices from '../components/Home/OurServices'
import Whatsapp from '../components/Whatsapp'
import Runningtext from '../components/Home/Runningtext'
import AboutUs from '../components/Home/AboutUs'
import GetInTouch from '../components/Home/GetInTouch'
import Clientus from '../components/Home/Clientus'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Whatsapp />
                <Hero />
                <Runningtext />
                <AboutUs />
                <Quote1 />
                <Motion />
                <OurNetwork />
                <OurServices />
                <Clientus />
                <Workus />
                <GetInTouch />
            </div>
            <Footer />
        </main>
    )
}

export default Home
