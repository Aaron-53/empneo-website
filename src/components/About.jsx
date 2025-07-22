import React from "react";
import empneobg2 from "../assets/empneobg2.png";
import empneoLogo from "../assets/empneologo.png";

export default function EmpneoAcceptanceLetter({
  customBackground = null,
  customLogo = null,
  backgroundImage = null,
}) {
  const backgroundStyle = customBackground
    ? { background: customBackground }
    : {
        backgroundImage: `url(${backgroundImage || empneobg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

  return (
    <div
      className="relative w-screen min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8"
      id="about-section"
      style={backgroundStyle}
    >
      <div className="max-w-7xl mx-auto text-[#6d2d00] font-[MyFont] w-full">
        {/* Centered Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 mt-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            The Prophecy Unfolds...
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column - Logo */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <img
              src={empneoLogo}
              alt="Empneo Logo"
              className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] object-contain mx-auto"
            />
          </div>

          {/* Right Column - Message */}
          <div className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-3 sm:space-y-4 order-1 lg:order-2 text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2">
              Model Engineering Castle
            </p>
            <p className="text-2xl sm:text-2xl md:text-4xl font-medium mb-4 ">
              Dear Witch/Wizard,
            </p>
            <p className="text-xl sm:text-2xl md:text-4xl font-medium mb-4">
              We are pleased to inform you that you have been accepted to attend{" "}
              <strong>Empneo 9.0</strong>, the annual wizarding tech conclave
              hosted by <strong>IEEE MEC SB</strong>. Taking place on
              <strong> August 9 & 10</strong>, happening within the ancient
              halls of MEC.
            </p>

            <p className="text-xl sm:text-2xl md:text-4xl font-medium mb-4">
              To seal your admission, you must complete your registration
              through the magic portal:
              <a
                href="https://bit.ly/EMPNEO9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 ml-1 transition-opacity inline-block"
              >
                REGISTER HERE
              </a>
            </p>

            <p className="text-2xl sm:text-2xl md:text-4xl font-medium mb-4">
              Wands at the ready. The prophecy is about to unfold.
            </p>

            <div className="mt-6 sm:mt-8">
              <p>
                Yours sincerely,
                <br />
                <strong>IEEE MEC SB</strong>
                <br />
                Magical Affairs Division
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
