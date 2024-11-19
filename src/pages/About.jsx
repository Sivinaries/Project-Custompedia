import Aboutus from "../components/About/Aboutus";
import Hero from "../components/About/Hero";
import Ready from "../components/About/Ready";
import Why from "../components/About/Why";
import Nineyears from "../components/About/Nineyears";
import Workus from "../components/About/Workus";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import What from "../components/About/What";

function About() {
  return (
    <main>
      <Navbar />
      <div>
        <Whatsapp />
        <Hero />
        <Aboutus />
        <Nineyears />
        <Why />
        <What />
        <Workus />
        <Ready />
      </div>
      <Footer />
    </main>
  );
}

export default About;
