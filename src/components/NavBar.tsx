import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Bars3Icon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import FooterIcon from "./FooterIcon";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#portfolio", label: "Portfolio" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-hollow2 w-full">
      <div className="flex p-5 w-full h-20 justify-between items-center">
        <div className="flex gap-2 items-center">
          <a
            href={"#home"}
            className="rounded-lg mr-10"
            onClick={() => setIsOpen(false)}
          >
            <strong className="text-3xl underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200 underline">
              zidaneho
            </strong>
          </a>

          <div className="hidden md:flex gap-2 items-center">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="rounded-lg">
                <strong className="underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200 underline">
                  {label}
                </strong>
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-row justify-center items-center gap-5">
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

        <button
          type="button"
          className="md:hidden text-hollow4-dark p-1 transition-colors duration-300 hover:text-hollow4"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-5 px-5 pb-6 bg-hollow2">
          <div className="flex flex-col gap-4 items-start">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3"
                onClick={() => setIsOpen(false)}
              >
                <strong className="underline-offset-4 decoration-transparent hover:decoration-current transition-colors duration-200 underline">
                  {label}
                </strong>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 items-start">
            <a
              href="https://www.overleaf.com/read/qjktbmtkzfkd#36c428"
              className="flex flex-row items-center gap-2 rounded-lg border border-hollow4-dark text-hollow4-dark px-3 py-1.5 shrink-0 transition-colors duration-300 hover:border-hollow4 hover:text-hollow4"
              onClick={() => setIsOpen(false)}
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
      )}
    </div>
  );
};

export default NavBar;
