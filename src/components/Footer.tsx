import React from "react";
import FooterIcon from "./FooterIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-5 mb-4">
      <a
        href="https://www.overleaf.com/read/qjktbmtkzfkd#36c428"
        className="rounded-lg w-5 h-5 shrink-0"
      >
        <DocumentTextIcon className="w-full h-full" />
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

export default Footer;
