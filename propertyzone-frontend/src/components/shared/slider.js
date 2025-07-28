import { useRef } from "react";
// import "../../index.css";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

const Slider = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <div className="relative mb-8">
      <button onClick={scrollLeft} className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white dark:bg-black p-2 rounded-full shadow-md">
        <PiArrowLeft size={20} />
      </button>

      <div ref={scrollRef} className="flex overflow-x-auto gap-4 no-scrollbar px-8 scroll-smooth">
        {children}
      </div>

      <button onClick={scrollRight} className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white dark:bg-black p-2 rounded-full shadow-md">
        <PiArrowRight size={20} />
      </button>
    </div>
  );
};

export default Slider;