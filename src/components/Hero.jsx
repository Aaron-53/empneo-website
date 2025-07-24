import React, { useRef, useState } from "react";
import SideNavbar from "./SideNavbar";
import Herobg from "../assets/empneobgbtr.jpg";
import logo from "../assets/empneologo.png";
import ieee from "../assets/ieeelogos.png";
import mysterySound from "../assets/sounds/MYSTERY.mp3";
import hedwigTheme from "../assets/sounds/hedwig_theme.mp3";

function Hero() {
  const mysteryAudioRef = useRef(null);
  const hedwigAudioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  // Handles both starting sound and mute toggle
  const handleMuteOrStart = () => {
    if (!started) {
      setStarted(true);
      if (mysteryAudioRef.current) {
        mysteryAudioRef.current.currentTime = 0;
        mysteryAudioRef.current.muted = muted;
        mysteryAudioRef.current.play();
        mysteryAudioRef.current.onended = () => {
          if (hedwigAudioRef.current) {
            hedwigAudioRef.current.currentTime = 0;
            hedwigAudioRef.current.loop = true;
            hedwigAudioRef.current.muted = muted;
            hedwigAudioRef.current.play();
          }
        };
      }
    } else {
      setMuted((m) => !m);
    }
  };

  // Update mute state for both audios
  React.useEffect(() => {
    if (mysteryAudioRef.current) {
      mysteryAudioRef.current.muted = muted;
    }
    if (hedwigAudioRef.current) {
      hedwigAudioRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <div
      className="w-[100vw] min-h-[100vh] pt-[-0px] flex items-center justify-center sm:pt-20 md:pt-10 px-4 sm:px-6 md:px-8"
      id="hero-section"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Audio elements */}
      <audio ref={mysteryAudioRef} src={mysterySound} />
      <audio ref={hedwigAudioRef} src={hedwigTheme} loop />

      {/* Sticky mute/start button */}
      <button
        className={`fixed bottom-6 right-6 z-50 bg-black text-white border-2 border-[#a87d36] rounded-full p-3 hover:border-[#d49c3e] hover:text-[#d49c3e] transition-all duration-200`}
        onClick={handleMuteOrStart}
        aria-label={!started ? "Start Sound" : muted ? "Unmute" : "Mute"}
      >
        {!started ? (
          // Play icon for "Start Sound"
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        ) : muted ? (
          // Muted icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth={2} />
          </svg>
        ) : (
          // Unmuted icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
          </svg>
        )}
      </button>

      <SideNavbar />
      <div className="flex flex-col items-center text-center space-y-14 sm:space-y-6 md:space-y-8 w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <img
            src={ieee}
            alt="IEEE Logos"
            className="w-72 sm:w-48 md:w-56 lg:w-64 xl:w-80 scale-110 h-auto z-10 hover:scale-130 transition-transform duration-300 max-w-[85vw]"
          />
        </div>
        <img
          src={logo}
          alt="Real Empneo Logo"
          className="w-80 sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] h-auto z-10 max-w-[90vw]"
        />
        <a
          href="https://bit.ly/EMPNEO9"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[MyFont] mt-4 sm:mt-4 px-6 sm:px-6 md:px-8 py-3 sm:py-3 border-2 border-[#D49C3E] text-[#D49C3E] text-lg sm:text-lg md:text-xl rounded-md hover:bg-[#D49C3E] hover:text-white transition-all duration-300 w-auto min-w-[160px] sm:min-w-[160px] text-center inline-block"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

export default Hero;