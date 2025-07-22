import React from "react";
import Herobg from "../assets/empneobgbtr.jpg";
import img1 from "../assets/Gallery/1.png";
import img2 from "../assets/Gallery/2.png";
import img3 from "../assets/Gallery/3.png";
import img4 from "../assets/Gallery/4.png";
import img5 from "../assets/Gallery/5.png";
import img6 from "../assets/Gallery/6.png";

const topRow = [img1, img2, img3];
const bottomRow = [img4, img5, img6];

function Gallery() {
  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 pt-[80px] sm:pt-[90px] md:pt-[100px] overflow-hidden px-2 sm:px-4"
      id="gallery-section"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      <h1 className="text-[40px] sm:text-[60px] md:text-[75px] lg:text-[85px] xl:text-[94.89px] text-[#D49C3E] drop-shadow-lg font-normal leading-[100%] text-center font-[MyFont] mb-2 sm:mb-4 md:mb-6">
        Gallery
      </h1>

      {/* Top Scrolling Row */}
      <div className="w-full h-[25%] sm:h-[28%] md:h-[30%] lg:h-[32%]">
        <div className="flex h-full gap-3 sm:gap-4 md:gap-6 lg:gap-8 animate-scroll-right min-w-max will-change-transform">
          {[...topRow, ...topRow, ...topRow, ...topRow].map((src, idx) => (
            <img
              key={`top-${idx}`}
              src={src}
              alt={`Top ${idx}`}
              className="h-full w-auto object-contain rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Bottom Scrolling Row */}
      <div className="w-full h-[25%] sm:h-[28%] md:h-[30%] lg:h-[32%]">
        <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-full animate-scroll-left min-w-max will-change-transform">
          {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map(
            (src, idx) => (
              <img
                key={`bottom-${idx}`}
                src={src}
                alt={`Bottom ${idx}`}
                className="h-full object-contain flex-shrink-0 rounded-lg shadow-lg"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
