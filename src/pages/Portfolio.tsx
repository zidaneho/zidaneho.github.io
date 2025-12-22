import React from "react";
import NavBar from "../components/NavBar";
import samiraBackground from "../assets/samira_background5.webp";
import autobattler from "../assets/autobattler.webp";
import steamanalysis from "../assets/steamanalysis.webp";
import lab30tritonware from "../assets/lab30tritonware.webp";
import lunarlearning from "../assets/lunarlearning.webp";
import Tag from "../components/Tag";

interface Project {
  title: string;
  description: string;
  image: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    title: "SamiraMod: A Risk of Rain 2 Mod",
    description:
      "Engineered and launched a character mod, achieving over 149,000 downloads on Thunderstore.io. Developed custom character abilities, animations, and gameplay mechanics using Risk of Rain 2's API and C#. Iteratively improved the mod by actively managing user feedback and resolving issues via the project's GitHub repository.",
    image: samiraBackground,
    repoLink: "https://thunderstore.io/package/CafeHo/SamiraMod/",
  },
  {
    title: "Auto Battler Game Engine",
    description:
      "An auto battler roguelike. Field units, level them up, equip new items, evolve them, fight challenging enemies, on various terrains. This is a solo project that is currently a work in progress.",
    image: autobattler,
    repoLink: "https://github.com/zidaneho/auto-battler",
  },
  {
    title: "Steam Review Analysis Tool",
    description:
      "Created a full-stack research tool to provide game developers with competitive analysis of similar games on Steam. Utilized cosine similarity on review embeddings to identify and rank analogous games for market research and integrated the Gemini API to perform sentiment analysis and generate concise summaries of thousands of user reviews.",
    image: steamanalysis,
    repoLink: "https://github.com/zidaneho/steam_analysis",
  },
  {
    title: "Lab 30",
    description:
      "Find yourself immersed in a dark lab full of dangerous monsters. Avoid them and find a way out of the lab! This project was apart of UCSD VGDC's Tritonware kickoff in Fall 2024, made by 5 members to design and deliver the project within 2 weeks.",
    image: lab30tritonware,
    repoLink: "https://github.com/zidaneho/TritonWare30",
  },
  {
    title: "Lunar Learning",
    description:
      "Lunar Learning is an interactive, space-themed science game designed specifically to engage elementary school students with learning disabilities. This project is apart of UCSD ACM's DiamondHacks 2025, created by a team of 4. I helped contribute to this project by designing the UI and page.",
    image: lunarlearning,
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
                src={project.image}
                alt={project.title}
                className="w-1/2 h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="w-1/2 p-6">
                <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
                <p className="text-base">{project.description}</p>
                <div className="pt-4 pb-2">
                  <a href={project.repoLink} className=" rounded-lg">
                    <Tag name="View Repository" src={project.repoLink} iconSrc="none"></Tag>
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
