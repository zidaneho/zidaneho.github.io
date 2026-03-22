import React, { useState } from "react";

interface ExperienceProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end p-6 pointer-events-none">
          <h3 className="text-2xl font-bold text-hollow4 drop-shadow-md">
            {title}
          </h3>
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
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-hollow2/80 hover:bg-hollow2 p-2 rounded-full shadow-md text-hollow4 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;