import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Brands from "./pages/Brands";
import Comments from "./pages/Comments";
import Examples from "./pages/Examples";
import Hero from "./pages/Hero";
import "swiper/css";

const app = () => (
  <>
    <div className="w-full">
      <Navbar />
      <Hero />
      <Examples />
      <Brands />
      <AboutUs />
      <Comments />
      <span className="bg-yellow-500"></span>
      <span className="bg-pink-500"></span>
      <span className="bg-cyan-500"></span>
      <span className="bg-green-500"></span>
      <span className="bg-purple-500"></span>
      <span className="bg-orange-500"></span>
    </div>
  </>
);

export default app;