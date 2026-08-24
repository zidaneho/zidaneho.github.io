import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Tag from "./Tag";

export interface ExperienceLink {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

interface ExperienceProps {
  title: string;
  description: string;
  imageUrl: string;
  date: Date;
  links?: ExperienceLink[];
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  description,
  imageUrl,
  date,
  links,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* CARD VIEW: Only Image and Title */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer group rounded-xl overflow-hidden shadow-sm hover:outline-hollow3 hover:outline-2 transition-all"
      >
        {/* Image Container */}
        <div className="w-full aspect-video bg-hollow2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 from-0% via-black/15 via-25% to-transparent to-70% opacity-70"></div>

        {/* blur for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 backdrop-blur-sm [mask-image:linear-gradient(to_top,black,transparent)]"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-between gap-4 p-6 pointer-events-none">
          <h3 className="text-2xl font-bold text-hollow4 drop-shadow-md">
            {title}
          </h3>
          <span className="text-sm font-medium text-hollow3 drop-shadow-md whitespace-nowrap">
            {date.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </span>
        </div>
      </div>

      {/* MODAL VIEW: Full Display */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-hollow1/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)} // Close when clicking backdrop
        >
          <div
            className="bg-hollow1 border border-hollow2 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 text-hollow4-dark p-1 transition-colors duration-300 hover:text-hollow4"
              aria-label="Close"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <div className="flex flex-col">
              <img
                src={imageUrl}
                alt={title}
                className="w-full aspect-video object-contain bg-hollow2/20 rounded-t-3xl"
              />
              <div className="p-10 flex flex-col gap-6">
                <div>
                  <h2 className="text-4xl font-black text-hollow4 mb-2">
                    {title}
                  </h2>
                  {/* Custom Colored Divider */}
                  <div className="h-1.5 w-16 bg-hollow3 rounded-full"></div>
                </div>
                <p className="text-lg text-hollow3 leading-relaxed whitespace-pre-line">
                  {description}
                </p>
                {links && links.length > 0 && (
                  <div className="flex flex-row flex-wrap gap-3">
                    {links.map((link) => (
                      <Tag
                        key={link.url}
                        name={link.title}
                        src={link.url}
                        icon={link.icon}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;