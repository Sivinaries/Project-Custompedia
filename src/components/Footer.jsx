import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from '../assets/images/logofooter.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="h-fit w-full bg-white mx-auto">
            <div className="">
                <div className="grid grid-cols-2 p-8 md:p-10 space-y-4 md:space-y-0">
                    <div className="flex justify-around col-span-2 md:col-span-1">
                        <div className="">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className='space-y-4 col-span-1'>
                            <div>
                                <h1 className='font-extrabold font-sans text-black text-center text-xs md:text-xl'>Business</h1>
                            </div>
                            <div className='space-y-2 text-center'>
                                <h1 className='font-light font-sans text-black text-center text-xs md:text-xl'>hello@custompedia.company</h1>
                                <h1 className='font-light font-sans text-black text-center text-xs md:text-xl'>+62 819 0832 111</h1>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4 col-span-2 md:col-span-1'>
                        <div>
                            <h1 className='font-extrabold font-sans text-black text-center text-xs md:text-xl'>Address</h1>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-light font-sans text-black text-center text-xs md:text-xl'>Jl. Tlogo Sarangan No.39, Palebon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50246, Indonesia</h1>
                        </div>
                        <div className='mx-auto'>
                            <iframe className="mx-auto"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0812443948676!2d110.46186207514846!3d-6.99971426855708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d89d0806255%3A0x8191745364eecf1e!2sPT.%20CUSTOMPEDIA!5e0!3m2!1sid!2sid!4v1715880850598!5m2!1sid!2sid"
                                width="100%" height="200" style={{ border: 0 }} allowFullScreen="1" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='text-center order-2 md:order-1 p-2.5 md:p-5 my-auto'>
                        <h1 className='font-extrabold font-sans text-black text-center text-xs md:text-xl'>
                            Copyright © PT Custompedia Creative 2024
                        </h1>
                    </div>
                    <div className='space-y-4 mx-auto p-4 order-1 md:order-2'>
                        <div>
                            <h1 className='font-extrabold font-sans text-black text-center text-xs md:text-xl'>
                                Connect With Us
                            </h1>
                        </div>
                        <div className='flex gap-4 md:gap-8 justify-center'>
                            <Link to=''>
                                <FaInstagram className='text-black w-8 h-8' />
                            </Link>
                            <Link>
                                <FaFacebookSquare className='text-black w-8 h-8' />
                            </Link>
                            <Link>
                                <IoLogoWhatsapp className='text-black w-8 h-8' />
                            </Link>
                            <Link>
                                <SiGmail className="text-black w-8 h-8" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
