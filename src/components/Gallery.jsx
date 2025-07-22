import React from "react";
import Herobg from "../assets/empneobgbtr.jpg";
import img1 from "../assets/gallery/1.png";
import img2 from "../assets/gallery/2.png";
import img3 from "../assets/gallery/3.png";
import img4 from "../assets/gallery/4.png";
import img5 from "../assets/gallery/5.png";
import img6 from "../assets/gallery/6.png";

const topRow = [img1, img2, img3];
const bottomRow = [img4, img5, img6];

function Gallery() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center gap-8 py-6 pt-[100px] overflow-hidden"
      id="gallery-section"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      <h1 className="text-[94.89px] text-[#D49C3E] drop-shadow-lg font-normal leading-[100%] text-center font-[MyFont]">
        Gallery
      </h1>

      {/* Top Scrolling Row */}
      <div className="w-full h-[30%]">
        <div className="flex h-full gap-8 animate-scroll-right min-w-max will-change-transform">
          {[...topRow, ...topRow, ...topRow, ...topRow].map((src, idx) => (
            <img
              key={`top-${idx}`}
              src={src}
              alt={`Top ${idx}`}
              className="h-full w-auto object-contain"
            />
          ))}
        </div>
      </div>


      {/* Bottom Scrolling Row */}
      <div className="w-full h-[30%]">
        <div className="flex gap-8 h-full animate-scroll-left min-w-max will-change-transform">
          {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map(
            (src, idx) => (
              <img
                key={`bottom-${idx}`}
                src={src}
                alt={`Bottom ${idx}`}
                className="h-full object-contain flex-shrink-0"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
