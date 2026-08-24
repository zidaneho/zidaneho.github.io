import React from "react";
import FooterIcon from "./FooterIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2 mb-4">
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
      <p className="text-xs text-hollow3">Made by Zidane Ho, Last Updated 08/2026</p>
    </div>
  );
};

export default Footer;
