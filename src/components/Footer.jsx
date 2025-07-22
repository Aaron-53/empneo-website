import React from "react";
import footerBg from "../assets/empneobg2.png"; // Adjust path as needed
import logos from "../assets/footer.png";

function Footer() {
  return (
    <div
      className="w-full h-[300px] text-[#441902] bg-cover bg-center gap-40 font-[30px] text-[25px] font-[MyFont] flex items-center justify-between p-[10%]"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div>
        <h2 className="text-lg font-semibold">EMAIL?</h2>
        <h3 className="text-base">
          <a
            href="mailto:wie.ieeemec@gmail.com"
          >
            wie.ieeemec@gmail.com
          </a>
        </h3>
      </div>
      <div>
        <h2>LINK?</h2>
        <h3>ieeemec</h3>
        <h3>ieeemec</h3>
        <h3>ieeemec</h3>
      </div>
      <div className="flex items-center space-x-6  justify-end">
        <img
          src={logos}
          alt="Empneo Logo"
          className="w-[30vw] flex z-10 hover:scale-110 transition-transform duration-300 object-contain"
        />
      </div>
    </div>
  );
}

export default Footer;
