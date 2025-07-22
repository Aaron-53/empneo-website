import React from "react";
import footerBg from "../assets/empneobg2.png"; // Adjust path as needed
import logos from "../assets/footer.png";
import icon1 from "../assets/Links/Insta.png";
import icon2 from "../assets/Links/Linkedin.png";
import icon3 from "../assets/Links/X.png";

function Footer() {
  return (
    <div
      className="w-full h-[300px] text-[#441902] bg-cover bg-center font-[MyFont] flex items-center justify-between px-[10%]"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Email Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">EMAIL?</h2>
        <h3 className="text-base">
          <a
            href="mailto:wie.ieeemec@gmail.com"
            className="underline hover:text-[#6d2d00]"
          >
            wie.ieeemec@gmail.com
          </a>
        </h3>
      </div>

      {/* Links Section with icons */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold mb-2">LINK?</h2>

        <h3 className="flex items-center gap-2">
          <img src={icon1} alt="link 1" className="w-5 h-5" />
          <a
            href="https://www.instagram.com/ieeemec?igsh=MTAwdHJmd2RpaGd5MA=="
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6d2d00]"
          >
            ieeemec
          </a>
        </h3>

        <h3 className="flex items-center gap-2">
          <img src={icon2} alt="link 2" className="w-5 h-5" />
          <a
            href="https://www.linkedin.com/company/ieeemec/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6d2d00]"
          >
            ieeemec
          </a>
        </h3>

        <h3 className="flex items-center gap-2">
          <img src={icon3} alt="link 3" className="w-5 h-5" />
          <a
            href="https://x.com/IEEEMEC?t=ZhNP5xAQIfEy0oq3-BJ15A&s=08 "
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#6d2d00]"
          >
            ieeemec
          </a>
        </h3>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-end">
        <img
          src={logos}
          alt="Empneo Logo"
          className="w-[80%] h-auto z-10 hover:scale-110 transition-transform duration-300 object-contain"
        />
      </div>
    </div>
  );
}

export default Footer;
