import React from "react";
import footerBg from "../assets/empneobg2.png"; // Adjust path as needed
import logos from "../assets/footer.png";
import icon1 from "src/assets/Links/Insta.png";
import icon2 from "src/assets/Links/LInkedin.png";
import icon3 from "src/assets/Links/X.png";

function Footer() {
  return (
    <div
    id="contact"
      className="w-full min-h-[200px] sm:min-h-[250px] md:h-[300px] text-[#441902] bg-cover bg-center font-[MyFont] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-[8%] lg:px-[10%] py-6 md:py-0 gap-6 md:gap-4"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Email Section */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">EMAIL?</h2>
        <h3 className="text-sm sm:text-base mb-4">
          <a
            href="mailto:wie.ieeemec@gmail.com"
            className="underline hover:text-[#6d2d00] break-all sm:break-normal"
          >
            wie.ieeemec@gmail.com
          </a>
        </h3>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">CONTACTS?</h2>
        <h3 className="text-base sm:text-lg lg:text-xl">
          afia - +91 8129098082
        </h3>
        <h3 className="text-base sm:text-lg lg:text-xl">
          amal - +91 9495454847
        </h3>
      </div>

      {/* Links Section with icons */}
      <div className="space-y-2 text-center md:text-left flex-1 md:flex-initial">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">LINK?</h2>

        <h3 className="flex items-center justify-center md:justify-start gap-2">
          <img src={icon1} alt="link 1" className="w-4 h-4 sm:w-5 sm:h-5" />
          <a
            href="https://www.instagram.com/ieeemec?igsh=MTAwdHJmd2RpaGd5MA=="
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6d2d00] text-sm sm:text-base"
          >
            ieeemec
          </a>
        </h3>

        <h3 className="flex items-center justify-center md:justify-start gap-2">
          <img src={icon2} alt="link 2" className="w-4 h-4 sm:w-5 sm:h-5" />
          <a
            href="https://www.linkedin.com/company/ieeemec/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6d2d00] text-sm sm:text-base"
          >
            ieeemec
          </a>
        </h3>

        <h3 className="flex items-center justify-center md:justify-start gap-2">
          <img src={icon3} alt="link 3" className="w-4 h-4 sm:w-5 sm:h-5" />
          <a
            href="https://x.com/IEEEMEC?t=ZhNP5xAQIfEy0oq3-BJ15A&s=08 "
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6d2d00] text-sm sm:text-base"
          >
            ieeemec
          </a>
        </h3>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center md:justify-end flex-1 md:flex-initial">
        <img
          src={logos}
          alt="Empneo Logo"
          className="w-[60%] sm:w-[70%] md:w-[80%] lg:w-[80%] h-auto z-10 hover:scale-110 transition-transform duration-300 object-contain max-w-[200px] md:max-w-none"
        />
      </div>
    </div>
  );
}

export default Footer;
