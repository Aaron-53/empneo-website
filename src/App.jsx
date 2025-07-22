import { useState } from "react";

// Import your actual components
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Herobg from "./assets/empneobgbtr.jpg";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);

  const handleStartReveal = () => {
    setIsExpanding(true);
    // Complete the reveal after animation
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Match the animation duration
  };

  if (!isLoading) {
    return (
      <div className="App overflow-x-hidden">
        <TopNavbar />
        <Hero />
        <About />
        <Gallery />
        <Footer />
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      // style={{
      //   backgroundImage: `url(${Herobg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Components visible only in the expanding circular area */}
      <div
        className={`absolute inset-0 transition-all duration-[3s] ease-out ${
          isExpanding ? "opacity-100" : "opacity-100"
        }`}
        style={{
          clipPath: isExpanding
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
      >
        <div className="App overflow-x-hidden">
          <TopNavbar />
          <Hero />
          <About />
          <Gallery />
          <Footer />
        </div>
      </div>

      {/* Expanding light effect behind the reveal */}
      {/* <div
        className={`absolute inset-0 transition-all duration-1800 ease-out ${
          isExpanding ? "opacity-60" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 70%)",
          clipPath: isExpanding
            ? "circle(120% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
      /> */}

      {/* Center button */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-40 transition-all duration-500 px-4 sm:px-6 md:px-8 ${
          isExpanding ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      >
        <button
          onClick={handleStartReveal}
          disabled={isExpanding}
          className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[609px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[107px] opacity-100 rounded-[15px] gradient-border text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-[#D49C3E] text-center font-[MyFont] flex items-center justify-center"
        >
          The Prophecy Unfolds...
        </button>
      </div>

      {/* Expanding ring effects */}
      {isExpanding && (
        <>
          <div
            className="absolute inset-0 border-2 border-white/30 rounded-full transition-all animate-ping"
            style={{
              left: "50%",
              top: "50%",
              width: "100px",
              height: "100px",
              marginLeft: "-50px",
              marginTop: "-50px",
              animationDuration: "1s",
            }}
          />
          <div
            className="absolute inset-0 border border-blue-400/40 rounded-full transition-all animate-ping"
            style={{
              left: "50%",
              top: "50%",
              width: "200px",
              height: "200px",
              marginLeft: "-100px",
              marginTop: "-100px",
              animationDuration: "1.5s",
            }}
          />
          <div
            className="absolute inset-0 border border-purple-400/30 rounded-full transition-all animate-ping"
            style={{
              left: "50%",
              top: "50%",
              width: "300px",
              height: "300px",
              marginLeft: "-150px",
              marginTop: "-150px",
              animationDuration: "2s",
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
