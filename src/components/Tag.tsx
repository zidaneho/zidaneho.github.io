import type React from "react";

interface TagProps {
  name: string;
  iconSrc: string | "none";
  src: string;
}
const Tag: React.FC<TagProps> = ({ name, iconSrc, src }) => {
  return (
    <a href={src} className="rounded-lg">
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
        {iconSrc !== "none" && <img src={iconSrc} className="w-5 h-5"></img>}
        <p className="text-md">{name}</p>
      </button>
    </a>
  );
};
export default Tag;
