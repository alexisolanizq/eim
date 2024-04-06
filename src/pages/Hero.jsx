const Hero = () => {
  return (
    <section className="w-full h-96 flex items-center justify-center mt-10 md:mt-0 mb-28">
      <div data-aos="fade-down" className="w-3/4 md:w-1/2 mt-24 md:mt-0">
        <h2 className="text-2xl md:text-4xl uppercase font-extrabold text-center md:leading-10 md:tracking-wide py-3">
          Discover our content creators community
        </h2>
        <p className="text-center md:text-lg py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
          voluptate.
        </p>
        <div className="py-3 flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="rounded-full bg-black px-8 py-4 text-white font-medium text-lg hover:bg-main hover:text-black hover:border-main-dark hover:border-2 transition ease-in-out delay-100 duration-200">
            Conoce más
          </button>
          <button className="rounded-full border-2 border-black px-8 py-4  font-semibold text-lg hover:bg-black hover:text-white transition ease-in-out delay-100 duration-200">
            Conoce más
          </button>
        </div>
      </div>
        <svg
          className="absolute -bottom-8 md:-bottom-0 lg:-bottom-28 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f1eafa"
            fillOpacity="1"
            d="M0,96L120,85.3C240,75,480,53,720,58.7C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
    </section>
  );
};

export default Hero;
