import React from "react";
import FooterIcon from "./FooterIcon";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-1 mb-4">
      <FooterIcon
        src="https://github.com/zidaneho"
        iconSrc={"/contact-images/github-mark-white.png"}
      ></FooterIcon>
      <FooterIcon
        src="https://www.linkedin.com/in/zidane-ho/"
        iconSrc={"/contact-images/InBug-White.png"}
      ></FooterIcon>
    </div>
  );
};

export default Footer;
