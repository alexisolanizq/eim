import women1 from "@/assets/img/women-1.png";
import men1 from "@/assets/img/men-1.png";
import women3 from "@/assets/img/women-3.png";

const Examples = () => {
  return (
    <div className="bg-white w-full relative">
      <div data-aos="fade-up" className="absolute -top-36 lg:-top-44 w-full hidden md:flex items-center justify-center gap-16">
        <div className="relative">
          <img
            src={women1}
            className="h-80 w-64 object-contain pt-8 px-5 rounded-full bg-yellow-500"
            alt="user-example-1"
          />
        </div>
        <div className="relative">
          <img
            src={men1}
            className="h-80 w-64 object-contain pt-8 px-5 rounded-full bg-pink-500"
            alt="user-example-2"
          />
        </div>
        <div className="relative">
          <img
            src={women3}
            className="h-80 w-64 object-contain pt-8 px-5 rounded-full bg-main-dark"
            alt="user-example-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Examples;
