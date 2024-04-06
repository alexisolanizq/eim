const Examples = () => {
  return (
    <div className="bg-white w-full relative">
      <div
        data-aos="fade-up"
        className="absolute -top-36 lg:-top-44 w-full hidden md:flex items-center justify-center gap-16"
      >
        <a href="/" className="relative">
          <img
            loading="lazy"
            src="https://llantastogo.com/EIM/img/women-1.webp"
            className="h-80 w-64 object-contain pt-8 px-5 rounded-full bg-yellow-500"
            alt="user-example-1"
          />
        </a>
        <a href="/" className="relative">
          <img
            loading="lazy"
            src="https://llantastogo.com/EIM/img/men-1.webp"
            className="h-80 w-64 object-contain pt-8 px-5 rounded-full bg-pink-500"
            alt="user-example-2"
          />
        </a>
        <a href="/" className="relative">
          <img
            loading="lazy"
            src="https://llantastogo.com/EIM/img/women-2.webp"
            className="h-80 w-64 object-contain pt-8 px-5 rounded-full bg-main-dark"
            alt="user-example-3"
          />
        </a>
      </div>
    </div>
  );
};

export default Examples;
