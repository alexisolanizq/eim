import { useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import Brands from "./components/BrandsSlider";
import Comments from "./pages/Comments";
import Examples from "./pages/Examples";
import Hero from "./pages/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
// import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // <ScrollToTop>
      <div className="w-full">
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
    // </ScrollToTop>
  );
};

export default App;
