import { influencers } from "@/constatnts/examples";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-white w-full pt-40 md:pt-40 pb-40 md:pb-52">
      <div data-aos="fade-down">
        <h2 className="text-2xl md:text-4xl text-center font-bold capitalize ml-5 md:ml-0">
          About us
        </h2>
        <p className="text-center mt-3 mb-10 w-4/5 md:w-1/2 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          aspernatur nostrum ullam adipisci dolorum obcaecati labore
          necessitatibus in quod soluta?
        </p>
      </div>
      <div
        data-aos="fade-down"
        className="w-3/4 mx-auto flex justify-around items-center flex-wrap gap-10"
      >
        {influencers.length > 0
          ? influencers.map(({ id, color, src, socialMedia }) => (
              <Link to={`/${id}`} key={id} className="relative">
                <img
                  loading="lazy"
                  key={id}
                  src={src}
                  alt={id}
                  className={`object-contain w-80 h-80 pt-8 px-5 rounded-b-[50px] rounded-t-[600px] bg-${color}-500`}
                />
                <div className="absolute left-1/2 bottom-5 -translate-x-1/2 -translate-y-3 bg-white rounded px-4 py-2 shadow flex items-center gap-2">
                  {socialMedia.length > 0
                    ? socialMedia.map(({ icon: Icon, id, link }) => (
                        <button to={link} key={id}>
                          <Icon fontSize={20} />
                        </button>
                      ))
                    : null}
                </div>
              </Link>
            ))
          : null}
      </div>
    </section>
  );
};

export default AboutUs;
