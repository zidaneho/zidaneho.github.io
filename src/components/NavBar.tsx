import React from "react";
import Tag from "./Tag";


export interface NavBarProps {
  includeHome: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ includeHome }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      {includeHome && <Tag name="Home" src="/" iconSrc="none"></Tag>}
      <Tag name="Portfolio" src="/portfolio" iconSrc="none"></Tag>
      <Tag name="About" src="/about" iconSrc="none"></Tag>
      <Tag name="Contact" src="/contact" iconSrc="none"></Tag>
      <Tag name="Resume" src="/resume" iconSrc="none"></Tag>
    </div>
  );
};

export default NavBar;
