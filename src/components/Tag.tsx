import type React from "react";

interface TagProps {
  name: string;
  icon?: React.ReactNode;
  src: string;
}
const Tag: React.FC<TagProps> = ({ name, icon, src }) => {
  const isExternal = /^https?:\/\//.test(src);

  return (
    <a
      href={src}
      className="rounded-lg"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <button
        className="
          flex flex-row items-center gap-2
          rounded-[8px] border border-transparent
          py-[0.6em] px-[1.2em] 
          text-[1em] font-medium font-inherit
          cursor-pointer transition-colors duration-250
          
          bg-hollow2 text-hollow4
          
          hover:bg-hollow3

          
        "
      >
        <p className="text-md">{name}</p>
        {icon}
      </button>
    </a>
  );
};
export default Tag;
