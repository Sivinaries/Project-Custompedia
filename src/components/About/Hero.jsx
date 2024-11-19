import team from '../../assets/images/team.jpg';

const Hero = () => {
  return (
    <div
      className="relative grid grid-cols-1 h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${team})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center m-auto">
        <h1 className="text-4xl md:text-8xl font-bold text-yellow-500">
          CUSTOMPEDIA
        </h1>
        <p className="text-sm md:text-2xl mx-auto font-extrabold p-2 md:w-3/4 text-center text-white"
        >
          A full-service marketing agency that creates integrated, end-to-end marketing experiences with a creative touch. We help you optimize the full customer journey.
        </p>
      </div>
    </div>
  );
}

export default Hero;
