import React from "react";
import FooterIcon from "./FooterIcon";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-10 flex p-5 items-center gap-8 bg-hollow2 w-full h-20 min-w-80">
      <a href={"#home"} className="rounded-lg mr-3">
        <strong className="text-3xl">zidaneho\</strong>
      </a>

      <a href={"#about"} className="rounded-lg">
        <strong>About</strong>
      </a>

      <a href={"#portfolio"} className="rounded-lg mr-5">
        <strong>Portfolio</strong>
      </a>

      <a
        href={"https://www.overleaf.com/read/qjktbmtkzfkd#36c428"}
        className="rounded-lg shrink-0"
      >
        <DocumentTextIcon className="w-6 h-6" />
      </a>

      <FooterIcon
        src="https://github.com/zidaneho"
        icon={FaGithub}
      ></FooterIcon>
      <FooterIcon
        src="https://www.linkedin.com/in/zidane-ho/"
        icon={FaLinkedin}
      ></FooterIcon>
    </div>
  );
};

export default NavBar;
