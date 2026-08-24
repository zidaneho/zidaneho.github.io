import React from "react";
import { FaGithub } from "react-icons/fa";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Tag from "../components/Tag";
import ToolstackBar from "../components/ToolstackBar";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  toolStack: string[];
  githubLink?: string;
  itchioLink?: string;
  websiteLink?: string;
  thunderStoreLink?: string;
}

const projects: Project[] = [
  {
    title: "SamiraMod: A Risk of Rain 2 Mod",
    description:
      "Engineered and launched a character mod, achieving over 149,000 downloads on Thunderstore.io. Developed custom character abilities, animations, and gameplay mechanics using Risk of Rain 2's API and C#. Iteratively improved the mod by actively managing user feedback and resolving issues via the project's GitHub repository.",
    imageUrl: "/project-images/samira_background5.webp",
    toolStack: ["c#", "unity", "blender"],
    githubLink: "https://github.com/zidaneho/SamiraMod",
    thunderStoreLink: "https://thunderstore.io/package/CafeHo/SamiraMod/",
  },
  {
    title: "Doodle Derby",
    description:
      "Doodle Derby is a web-based, real-time multiplayer drawing and guessing game developed as part of the VGDC @ UCSD Project Forge program. Built using Solid.js, TypeScript, and Vite, the platform leverages Playroomkit for seamless multiplayer synchronization and Konva for interactive canvas drawing. Players participate in a competitive loop where they submit custom drawable prompts, draw assigned words under time pressure, and guess opponents' sketches to earn points based on speed and accuracy.",
    imageUrl: "/project-images/doodle-derby.png",
    toolStack: ["typescript", "solidjs"],
    githubLink: "https://github.com/alliemw/Doodle-Derby",
    websiteLink: "https://doodlederby.com",
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
    websiteLink: "https://auto-battler-two.vercel.app/",
  },
  {
    title: "Steam Review Analysis Tool",
    description:
      "Created a full-stack research tool to provide game developers with competitive analysis of similar games on Steam. Utilized cosine similarity on review embeddings to identify and rank analogous games for market research and integrated the Gemini API to perform sentiment analysis and generate concise summaries of thousands of user reviews.",
    imageUrl: "/project-images/steamanalysis.webp",
    toolStack: ["python", "pandas", "scikitlearn"],
    githubLink: "https://github.com/zidaneho/steam_analysis",
  },
  {
    title: "Blob Slop",
    description: "A 3D endless-runner built in Godot 4.6 where you steer a growing swarm of blobs down a road, passing through math gates and fighting bosses across changing biomes.",
    imageUrl:"/project-images/blob-slop.png",
    toolStack: ["godot"],
    itchioLink:"https://caffieno.itch.io/blob-slop"
  },
  {
    title: "Lab 30",
    description:
      "Find yourself immersed in a dark lab full of dangerous monsters. Avoid them and find a way out of the lab! This project was apart of UCSD VGDC's Tritonware kickoff in Fall 2024, made by 5 members to design and deliver the project within 2 weeks.",
    imageUrl: "/project-images/lab30tritonware.webp",
    toolStack: ["c#", "unity"],
    githubLink: "https://github.com/zidaneho/TritonWare30",
    itchioLink: "https://caffieno.itch.io/lab-30",
  },
  {
    title: "Lunar Learning",
    description:
      "Lunar Learning is an interactive, space-themed science game designed specifically to engage elementary school students with learning disabilities. This project is apart of UCSD ACM's DiamondHacks 2025, created by a team of 4. I helped contribute to this project by designing the UI and page.",
    imageUrl: "/project-images/lunarlearning.webp",
    toolStack: ["js", "react"],
    githubLink: "https://github.com/zidaneho/mission_learn",
  },
  
];

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="w-full pt-4 flex flex-col scroll-mt-20">
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-4xl text-center">Portfolio</h1>
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
                <div className="pt-4 pb-2 flex flex-row flex-wrap gap-3">
                  {project.githubLink && (
                    <Tag
                      name="GitHub"
                      src={project.githubLink}
                      icon={<FaGithub className="w-5 h-5" />}
                    ></Tag>
                  )}
                  {project.itchioLink && (
                    <Tag
                      name="itch.io"
                      src={project.itchioLink}
                      icon={
                        <img
                          src="/custom-icons/itchio-textless-white.svg"
                          className="w-5 h-5"
                        ></img>
                      }
                    ></Tag>
                  )}
                  {project.thunderStoreLink && (
                    <Tag
                      name="Thunderstore"
                      src={project.thunderStoreLink}
                      icon={
                        <img
                          src="/custom-icons/thunderstore.svg"
                          className="w-5 h-5"
                        ></img>
                      }
                    ></Tag>
                  )}
                  {project.websiteLink && (
                    <Tag
                      name="Website"
                      src={project.websiteLink}
                      icon={<GlobeAltIcon className="w-5 h-5" />}
                    ></Tag>
                  )}
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
