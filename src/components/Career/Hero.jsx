

function Hero() {
    return (
        <div className='grid grid-cols-1 h-screen bg-black'>
            <div className="my-auto mx-5 md:mx-28">
                <div className="space-y-8 md:space-y-10">
                    <div className="flex space-x-2">
                        <div>
                            <h1 className="text-2xl text-center md:text-left md:text-8xl text-white font-extrabold">Career</h1>
                        </div>
                        <div className='pt-3.5 md:pt-7'>
                            <div className='border-2 md:border-4 border-yellow-400 p-1 md:p-2 rounded-xl px-12 md:px-24'>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="md:w-1/2">
                            <h1 className="text-xl text-left md:text-7xl text-white font-bold">Lorem ipsum dolor sit amet</h1>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-white font-semibold text-left text-xs md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique lorem sem, et semper libero ornare lacinia. Nunc efficitur dolor id diam consequat congue. Aenean aliquet facilisis augue, vel lobortis lectus vestibulum sed. Integer sit amet mauris rhoncus, tincidunt augue quis, tristique nulla. Etiam mattis sollicitudin est, sed dictum tortor scelerisque at.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;
