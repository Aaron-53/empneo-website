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
      className="relative w-screen h-screen "
      id="about-section"
      style={backgroundStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">
              THE PROPHECY UNFOLDS...
            </h1>
          </div>

          {/* Main content */}
          <div className="flex items-start gap-8 mb-8">
            {/* Crest or Logo */}
            <div className="flex-shrink-0">
              {customLogo || empneoLogo ? (
                <div className="w-32 h-40 flex items-center justify-center">
                  <img
                    src={customLogo || empneoLogo}
                    alt="Empneo Logo"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-32 h-40 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-xl flex flex-col items-center justify-center border-4 border-amber-900 relative overflow-hidden">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold border border-amber-700 shadow-md">
                    EMPNEO 9.0
                  </div>
                  <div className="w-20 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 border-2 border-amber-900 flex items-center justify-center mt-4 relative shadow-inner">
                    <div className="text-3xl font-bold text-amber-900">E</div>
                    <div className="absolute top-1 left-1 w-2 h-2 bg-amber-900 rounded-full" />
                    <div className="absolute top-1 right-1 w-2 h-2 bg-amber-900 rounded-full" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 bg-amber-900 rounded-full" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-amber-900 rounded-full" />
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-amber-900 px-2 py-0.5 rounded text-xs font-semibold border border-amber-700 w-28 text-center shadow-md">
                    <div>INCANI</div>
                    <div className="text-xs">PER SCIENTIAM</div>
                    <div>CRES!</div>
                  </div>
                </div>
              )}
            </div>

            {/* Letter content */}
            <div className="flex-1 bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-xl">
              <div className="mb-6">
                <div className="text-amber-900 font-bold text-lg mb-2">
                  MODEL ENGINEERING CASTLE
                  <br />
                  DEAR WITCH/WIZARD.
                </div>
              </div>

              <div className="text-amber-900 space-y-4 leading-relaxed">
                <p>
                  WE ARE PLEASED TO INFORM YOU THAT YOU HAVE BEEN ACCEPTED TO
                  ATTEND EMPNEO 9.0, THE ANNUAL WIZARDING TECH CONCLAVE HOSTED
                  BY IEEE MEC SB, TAKING PLACE ON AUGUST 9 & 10 HAPPENING WITHIN
                  THE ANCIENT HALLS OF MEC.
                </p>
                <p>
                  TO SEAL YOUR ADMISSION, YOU MUST COMPLETE YOUR REGISTRATION
                  THROUGH THE MAGIC PORTAL : LINKLINK.COM
                </p>
                <p className="font-semibold">
                  WANDS AT THE READY. THE PROPHECY IS ABOUT TO UNFOLD.
                </p>
              </div>

              <div className="mt-8 text-amber-900">
                <div className="font-semibold">
                  YOURS SINCERELY,
                  <br />
                  IEEE MEC SB
                  <br />
                  MAGICAL AFFAIRS DIVISION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
