import { useState } from 'react';
import drop from '..//../assets/images/dropdown.png'

function Serviceus() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
    const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
    };
    const toggleDropdown4 = () => {
        setIsDropdownOpen4(!isDropdownOpen4);
    };
    const toggleDropdown5 = () => {
        setIsDropdownOpen5(!isDropdownOpen5);
    };
    const toggleDropdown6 = () => {
        setIsDropdownOpen6(!isDropdownOpen6);
    };
    return (
        <div className='grid grid-cols-1 bg-black'>
            <div className="my-28 md:my-36 mx-5 md:mx-28">
                <div className="space-y-8 md:space-y-10">
                    <div className="flex space-x-2">
                        <div>
                            <h1 className="text-2xl text-center md:text-left md:text-8xl text-white font-extrabold">SERVICES</h1>
                        </div>
                        <div className='pt-3.5 md:pt-7'>
                            <div className='border-2 md:border-4 border-yellow-400 p-1 md:p-2 rounded-xl px-12 md:px-24'>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="md:w-1/2">
                            <h1 className="text-xl text-left md:text-7xl text-white font-bold">Solutions for all your business needs</h1>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-white font-semibold text-left text-xs md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                        </div>
                    </div>
                    <div className='my-auto space-y-4 '>
                        <div className='bg-gray-800 p-4 md:p-6 rounded-3xl'>
                            <div className='flex justify-between'>
                                <div className='my-auto'>
                                    <h1 className='text-white font-semibold text-xl md:text-3xl'>DIGITAL MARKETING</h1>
                                </div>
                                <button onClick={toggleDropdown}>
                                    <div className='my-auto'>
                                        <img className='my-auto w-3/4 md:w-full' src={drop} alt="" />
                                    </div>
                                </button>
                            </div>
                            {isDropdownOpen && (
                                <div className='my-4 bg-gray-700 p-4 rounded-xl'>
                                    <p className='text-white font-semibold text-left text-xs md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                </div>
                            )}
                        </div>
                        <div className='bg-gray-800 p-4 md:p-6 rounded-3xl'>
                            <div className='flex justify-between'>
                                <div className='my-auto'>
                                    <h1 className='text-white font-semibold text-xl md:text-3xl'>SOSIAL MEDIA</h1>
                                </div>
                                <button onClick={toggleDropdown2}>
                                    <div className='my-auto'>
                                        <img className='my-auto w-3/4 md:w-full' src={drop} alt="" />
                                    </div>
                                </button>
                            </div>
                            {isDropdownOpen2 && (
                                <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                                    <p className='text-white font-semibold text-left text-xs md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                </div>
                            )}
                        </div>
                        <div className='bg-gray-800 p-4 md:p-6 rounded-3xl'>
                            <div className='flex justify-between'>
                                <div className='my-auto'>
                                    <h1 className='text-white font-semibold text-xl md:text-3xl'>KOL MANAGEMENT</h1>
                                </div>
                                <button onClick={toggleDropdown3}>
                                    <div className='my-auto'>
                                        <img className='my-auto w-3/4 md:w-full' src={drop} alt="" />
                                    </div>
                                </button>
                            </div>
                            {isDropdownOpen3 && (
                                <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                                    <p className='text-white font-semibold text-left text-xs md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                </div>
                            )}
                        </div>
                        <div className='bg-gray-800 p-4 md:p-6 rounded-3xl'>
                            <div className='flex justify-between'>
                                <div className='my-auto'>
                                    <h1 className='text-white font-semibold text-xl md:text-3xl'>ADVERTISING</h1>
                                </div>
                                <button onClick={toggleDropdown4}>
                                    <div className='my-auto'>
                                        <img className='my-auto w-3/4 md:w-full' src={drop} alt="" />
                                    </div>
                                </button>
                            </div>
                            {isDropdownOpen4 && (
                                <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                                    <p className='text-white font-semibold text-left text-xs md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                </div>
                            )}
                        </div>
                        <div className='bg-gray-800 p-4 md:p-6 rounded-3xl'>
                            <div className='flex justify-between'>
                                <div className='my-auto'>
                                    <h1 className='text-white font-semibold text-xl md:text-3xl'>BRAND ACTIVATION</h1>
                                </div>
                                <button onClick={toggleDropdown5}>
                                    <div className='my-auto'>
                                        <img className='my-auto w-3/4 md:w-full' src={drop} alt="" />
                                    </div>
                                </button>
                            </div>
                            {isDropdownOpen5 && (
                                <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                                    <p className='text-white font-semibold text-left text-xs md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                </div>
                            )}
                        </div>
                        <div className='bg-gray-800 p-4 md:p-6 rounded-3xl'>
                            <div className='flex justify-between'>
                                <div className='my-auto'>
                                    <h1 className='text-white font-semibold text-xl md:text-3xl'>CONTENT PRODUCTION</h1>
                                </div>
                                <button onClick={toggleDropdown6}>
                                    <div className='my-auto'>
                                        <img className='my-auto w-3/4 md:w-full' src={drop} alt="" />
                                    </div>
                                </button>
                            </div>
                            {isDropdownOpen6 && (
                                <div className='mt-4 bg-gray-700 p-4 rounded-xl'>
                                    <p className='text-white font-semibold text-left text-xs md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Serviceus
