import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { brands } from "@/constatnts/examples";

const Brands = () => {
  return (
    <section className="w-full bg-white pt-40 md:pt-96 md:pb-20 px-10">
      <div data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl text-center font-bold capitalize ml-5 md:ml-0">
          These brands are doing it
        </h2>
        <p className="text-center mt-3 w-4/5 md:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum vitae
          iste modi error, ipsa maiores explicabo ipsam eaque non odio
          voluptatibus commodi accusantium eos, saepe quo repellendus ea
          asperiores quod dignissimos obcaecati sint magni autem quam?
        </p>
      </div>
      <div data-aos="fade-up" className="md:mt-20">
        <Swiper
          className="h-36"
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {brands &&
            brands.map((brand, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  src={brand.src}
                  alt={brand.alt}
                  className="object-cover grayscale w-28 md:w-44"
                />
              </SwiperSlide>
            ))}
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
