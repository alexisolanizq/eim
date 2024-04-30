import Loader from "@/components/Loader";
import useInfluencer from "@/hooks/useInfluencer";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { influencer } = useInfluencer();
  return (
    <>
      {!influencer ? (
        <Loader />
      ) : (
        <section className="w-full md:pt-10 pb-40 md:pb-52">
          <div className="flex flex-col items-center justify-center w-4/5 mx-auto">
            <img
              data-aos="fade-down"
              src={influencer?.src}
              alt={influencer?.name}
              className={`rounded-full w-64 h-64 pt-5 object-contain bg-${influencer?.color}-500 mb-3`}
            />
            <h2
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-4xl md:text-5xl text-center font-bold mb-3"
            >
              {influencer?.name}
            </h2>
            <p
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-xl text-gray-600 mb-3"
            >
              {influencer?.location}
            </p>
            <p
              data-aos="fade-down"
              data-aos-delay="500"
              className="md:text-lg text-center mb-8"
            >
              {influencer?.description}
            </p>
            <p
              data-aos="fade-down"
              data-aos-delay="700"
              className="text-4xl font-bold mb-3"
            >
              Mis redes
            </p>
            <div
              data-aos="fade-down"
              data-aos-delay="700"
              className="flex items-center gap-4 md:gap-20"
            >
              {influencer?.socialMedia
                ? influencer?.socialMedia.map(({ icon: Icon, id, link }) => (
                    <Link to={link} key={id}>
                      <Icon fontSize={40} />
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserInfo;
