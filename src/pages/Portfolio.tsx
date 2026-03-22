import React from "react";
import NavBar from "../components/NavBar";
import Tag from "../components/Tag";
import ToolstackBar from "../components/ToolstackBar";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  toolStack: string[];
  repoLink: string;
}

const projects: Project[] = [
  {
    title: "SamiraMod: A Risk of Rain 2 Mod",
    description:
      "Engineered and launched a character mod, achieving over 149,000 downloads on Thunderstore.io. Developed custom character abilities, animations, and gameplay mechanics using Risk of Rain 2's API and C#. Iteratively improved the mod by actively managing user feedback and resolving issues via the project's GitHub repository.",
    imageUrl: "/project-images/samira_background5.webp",
    toolStack: ["c#", "unity", "rider"],
    repoLink: "https://thunderstore.io/package/CafeHo/SamiraMod/",
  },
  {
    title: "Doodle Derby",
    description:
      "Doodle Derby is a web-based, real-time multiplayer drawing and guessing game developed as part of the VGDC @ UCSD Project Forge program. Built using Solid.js, TypeScript, and Vite, the platform leverages Playroomkit for seamless multiplayer synchronization and Konva for interactive canvas drawing. Players participate in a competitive loop where they submit custom drawable prompts, draw assigned words under time pressure, and guess opponents' sketches to earn points based on speed and accuracy.",
    imageUrl: "/project-images/doodle-derby.png",
    toolStack: ["typescript", "solidjs"],
    repoLink: "https://doodlederby.com",
  },
  {
    title: "Auto Battler Game Engine",
    description:
      "An auto battler roguelike. Field units, level them up, equip new items, evolve them, fight challenging enemies, on various terrains. This is a solo project that is currently a work in progress.",
    imageUrl: "/project-images/autobattler.webp",
    toolStack: [
      "typescript",
      "react",
      "tailwindcss",
      "nextjs",
      "vercel",
      "threejs",
    ],
    repoLink: "https://auto-battler-two.vercel.app/",
  },
  {
    title: "Steam Review Analysis Tool",
    description:
      "Created a full-stack research tool to provide game developers with competitive analysis of similar games on Steam. Utilized cosine similarity on review embeddings to identify and rank analogous games for market research and integrated the Gemini API to perform sentiment analysis and generate concise summaries of thousands of user reviews.",
    imageUrl: "/project-images/steamanalysis.webp",
    toolStack: ["python", "pandas", "scitkitlearn"],
    repoLink: "https://github.com/zidaneho/steam_analysis",
  },
  {
    title: "Lab 30",
    description:
      "Find yourself immersed in a dark lab full of dangerous monsters. Avoid them and find a way out of the lab! This project was apart of UCSD VGDC's Tritonware kickoff in Fall 2024, made by 5 members to design and deliver the project within 2 weeks.",
    imageUrl: "/project-images/lab30tritonware.webp",
    toolStack: ["c#", "unity"],
    repoLink: "https://github.com/zidaneho/TritonWare30",
  },
  {
    title: "Lunar Learning",
    description:
      "Lunar Learning is an interactive, space-themed science game designed specifically to engage elementary school students with learning disabilities. This project is apart of UCSD ACM's DiamondHacks 2025, created by a team of 4. I helped contribute to this project by designing the UI and page.",
    imageUrl: "/project-images/lunarlearning.webp",
    toolStack: ["javascript", "react"],
    repoLink: "https://github.com/zidaneho/mission_learn",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="w-screen pt-4 flex flex-col">
      <NavBar includeHome={true}></NavBar>
      <div className="container mx-auto p-4">
        {projects.map((project, index) => (
          <div key={index}>
            <hr className="h-px my-8 bg-hollow2 border-0"></hr>
            <div
              className={`flex items-center justify-center my-8 ${
                (index + 1) % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-1/2 h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="w-1/2 p-6">
                <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
                <p className="text-base">{project.description}</p>
                <ToolstackBar tools={project.toolStack} />
                <div className="pt-4 pb-2">
                  <a href={project.repoLink} className=" rounded-lg">
                    <Tag
                      name="View Repository"
                      src={project.repoLink}
                      iconSrc="none"
                    ></Tag>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
