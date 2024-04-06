import { comments } from "@/constatnts/examples";

const Comments = () => {
  return (
    <section className="w-full bg-main-dark pt-28 md:pt-32 px-3 pb-20 md:pb-32 relative">
      <svg className="absolute -top-10 md:-top-28 left-0 z-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b5a7d3"
          fillOpacity="1"
          d="M0,96L120,85.3C240,75,480,53,720,58.7C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div data-aos="fade-up">
        <h2 className="text-xl md:text-4xl text-center font-bold capitalize ml-5 md:ml-0">
          What customer say about us
        </h2>
        <p className="text-center mt-3 w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          aspernatur, laborum quos reprehenderit quam quod architecto! Ipsum
          quia minus unde!
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-center justify-center gap-5 flex-col md:flex-row mt-20 w-4/5 md:w-3/4 mx-auto"
      >
        {comments &&
          comments.map(({ id, img, name, time, comment }) => (
            <div key={id} className="bg-white rounded px-10 py-5 shadow">
              <div className="flex items-center gap-3 mb-5">
                <img src={img} className="rounded-full w-12" alt={name} />
                <div className="flex flex-col">
                  <p className="font-semibold">{name}</p>
                  <p className="text-gray-500">{time}</p>
                </div>
              </div>
              <p>{comment}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Comments;
