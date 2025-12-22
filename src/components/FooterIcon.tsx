import type React from "react";

interface FooterIconProps {
  iconSrc: string | "none";
  src: string;
}
const FooterIcon: React.FC<FooterIconProps> = ({ iconSrc, src }) => {
  return (
    <a href={src} className=" rounded-lg">
      <button
        className="
          flex flex-row items-center gap-2
          rounded-[8px] border border-transparent
          py-[0.6em] px-[1.2em] 
          text-[1em] font-medium font-inherit
          cursor-pointer transition-colors duration-250
          
          bg-hollow1 text-hollow4
          
          hover:bg-hollow2
        "
      >
        <img src={iconSrc} className="w-5 h-5"></img>
      </button>
    </a>
  );
};
export default FooterIcon;
