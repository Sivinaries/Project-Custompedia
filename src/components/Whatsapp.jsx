import { FaArrowUp } from "react-icons/fa6";
import wa from '../assets/images/wa.png';

function Whatsapp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="z-50 fixed bottom-8 left-6 opacity-85 shadow-blue-500 hover:opacity-100">
        <button onClick={scrollToTop}>
          <div className="bg-blue-600 opacity-85 shadow-blue-600 xl:p-2 rounded-xl px-2 py-6 hover:opacity-100">
            <FaArrowUp className="text-white xl:w-6 xl:h-20 w-4 h-8" />
          </div>
        </button>
      </div>
      <div className="z-50 fixed bottom-10 right-6 opacity-85 shadow-emerald-200 hover:opacity-100">
        <a href="https://wa.me/628190832111" target="_blank" rel="noopener noreferrer">
          <img src={wa} alt="WhatsApp Logo" className="w-16 h-16 xl:w-20 xl:h-20" />
        </a>
      </div>
    </>
  );
}

export default Whatsapp;
