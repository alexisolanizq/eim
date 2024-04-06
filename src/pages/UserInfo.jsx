import Loader from "@/components/Loader";
import useInfluencer from "@/hooks/useInfluencer";

const UserInfo = () => {
  const { influencer } = useInfluencer();
  return (
    <>
      {!influencer ? (
        <Loader />
      ) : (
        <section className="w-full pt-20 md:pt-10 pb-40 md:pb-52">
          <div className="flex flex-col items-center justify-center w-4/5 mx-auto">
            <img
              data-aos="fade-down"
              src={influencer?.src}
              alt={influencer?.name}
              className={`rounded-full w-72 h-72 pt-10 object-contain bg-${influencer?.color}-500 mb-4`}
            />
            <h2
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-4xl md:text-6xl text-center font-bold mb-4"
            >
              {influencer?.name}
            </h2>
            <p
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-xl text-gray-600 mb-4"
            >
              {influencer?.location}
            </p>
            <p
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-xl text-center mb-8"
            >
              {influencer?.description}
            </p>
            <p data-aos="fade-down" data-aos-delay="700" className="text-4xl font-bold mb-4">Mis redes</p>
            <div data-aos="fade-down" data-aos-delay="700" className="flex items-center gap-4 md:gap-20">
              {influencer?.socialMedia &&
                influencer?.socialMedia.map(({ icon: Icon, id, link }) => (
                  <a href={link} key={id}>
                    <Icon fontSize={40} />
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserInfo;
