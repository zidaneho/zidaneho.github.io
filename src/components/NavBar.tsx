import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import FooterIcon from "./FooterIcon";

const NavBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-10 flex p-5 bg-hollow2 w-full h-20 justify-between">
      <div className="flex gap-2 items-center">
        <a href={"#home"} className="rounded-lg mr-10">
          <strong className="text-3xl underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200 underline">
            zidaneho
          </strong>
        </a>

        <a href={"#about"} className="rounded-lg">
          <strong className="underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200 underline">
            About
          </strong>
        </a>

        <a href={"#blog"} className="rounded-lg">
          <strong className="underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200 underline">
            Blog
          </strong>
        </a>

        <a href={"#portfolio"} className="rounded-lg mr-5">
          <strong className="underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200 underline">
            Portfolio
          </strong>
        </a>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center gap-5">
          <a
            href="https://www.overleaf.com/read/qjktbmtkzfkd#36c428"
            className="flex flex-row items-center gap-2 rounded-lg border border-hollow4-dark text-hollow4-dark px-3 py-1.5 shrink-0 transition-colors duration-300 hover:border-hollow4 hover:text-hollow4"
          >
            <span className="text-sm">Resume</span>
            <DocumentTextIcon className="w-5 h-5" />
          </a>
          <FooterIcon
            src="https://github.com/zidaneho"
            icon={FaGithub}
            label="GitHub"
          ></FooterIcon>
          <FooterIcon
            src="https://www.linkedin.com/in/zidane-ho/"
            icon={FaLinkedin}
            label="LinkedIn"
          ></FooterIcon>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
