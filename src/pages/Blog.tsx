import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Experience from "../components/Experience";
import type { ExperienceLink } from "../components/Experience";

interface ExperienceEntry {
  title: string;
  imageUrl: string;
  date: Date;
  description: string;
  links?: ExperienceLink[];
}

function Blog() {
  const experiences: ExperienceEntry[] = [
    {
      title: "Blockography.AI",
      imageUrl: "/experience-images/blockography.jpg",
      date: new Date(2025, 10),
      description:
        "Achieved 1st on the beginner track, 5th out of 45 teams overall, in UCSD ACM’s Blockography.AI competition by developing a high performance XGBooster model in Python that classifes Minecraft biomes from a dataset of screenshots in the game. Optimized the model’s test accuracy from 60% to 92% through tuning hyperparameters, resizing images, and feature engineering",
      links: [
        {
          title: "Competition Page",
          url: "https://ai.acmucsd.com/competitions/Blockography.AI",
          icon: <GlobeAltIcon className="w-5 h-5" />,
        },
        {
          title: "GitHub",
          url: "https://github.com/acmucsd/blockography-ai",
          icon: <FaGithub className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "CSE 167 Final",
      imageUrl: "/experience-images/gojo-render.png",
      date: new Date(2026, 2),
      description:
        'For our final ray tracing project in CSE 167: Intro to Computer Graphics, we recreated a dramatic 3D scene of Satoru Gojo from Jujutsu Kaisen casting his "Hollow Purple" technique. To achieve this, we expanded our core engine—which features multi-bounce global illumination and soft shadows—to support .glb files via tinygltf for custom textured models. Because the high-poly mesh was computationally expensive, we drastically optimized our render times by implementing a Bounding Volume Hierarchy (BVH) structure to reduce intersection complexity from O(n) to O(log n) and decimated unseen triangles. Finally, to capture the explosive lighting of the scene without the heavy cost of true volumetric rendering, we utilized creative workarounds, such as placing an invisible, backface-culled emitting plane to perfectly illuminate Gojo\'s face, resulting in our dynamic final image.',
      links: [
        {
          title: "GitHub",
          url: "https://github.com/zidaneho/cse167-final",
          icon: <FaGithub className="w-5 h-5" />,
        },
        {
          title: "Course Gallery",
          url: "https://cseweb.ucsd.edu/~alchern/teaching/cse167_wi26/final_gallery.html",
          icon: <GlobeAltIcon className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Student Engineer at UCSD ITS Services",
      imageUrl: "/about-images/ucsditservices.jpg",
      date: new Date(2026, 1),
      description:
        "I recently received and is currently am working for ITS Services as of Spring 2026! I am honored to have received this opportunity, especially a great team that I rely on (a lot) for help and questions. I work on a variety of tasks: contributing to the ticket system (SNOW), migrating Canvas LTI tools from 1.1 to 1.3 (C#, .NET), and contributing to active UCSD repositories (SAL, DataHub, Podcast). I am additionally learning how to write SQL and Groovy code.",
    },
    {
      title: "CSE 168 Final",
      imageUrl: "/experience-images/512spp.png",
      date: new Date(2026, 5),
      description:
        "Over the course we built on a path tracer implemented with C++ and the Embree library. It was a fun experience; the most fun part about the class was the final project. Me and my partner wanted to try creating a volumetric fire effect, similar to the one in Pixar's 'Elemental'. While I think there is a lot of room for improvement, we would probably have to start a new project with different sysematic choices. However, I think the end result looks very nice. We have further documentation here.",
      links: [
        {
          title: "Project Site",
          url: "https://sites.google.com/view/cse168-znho-ibku/home",
          icon: <GlobeAltIcon className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Stellatro",
      imageUrl: "/experience-images/stellatro-group.JPG",
      date: new Date(2026, 4),
      description:
        "As a competitions developer on ACM AI, I helped out in hosting the competition 'Stellatro,' a poker game where competitiors have to develop bots and compete for the highest scoring poker hand, of course with a twist of power ups (Balatro inspiration of jokers). Competitors ideally has to develop a bot that picks the best power ups that is suited for their hand, or they can also try to deny what the other bot is going to pick up. We had around 30 teams compete and submit scores, and distributed laptops and AI dev kits sponsored by Qualcomm. I worked on the GUI game, helping competitiors understand how to play the game, in case they were unfamiliar. I developed the game coordinating with my team, but I developed the interface alone using pygame.",
      links: [
        {
          title: "Competition Page",
          url: "https://ai.acmucsd.com/competitions/Stellatro.AI",
          icon: <GlobeAltIcon className="w-5 h-5" />,
        },
        {
          title: "Starter Kit",
          url: "https://github.com/acmucsd/stellatro-kit",
          icon: <FaGithub className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "CalHacks 12.0",
      imageUrl: "/experience-images/spotlight.png",
      date: new Date(2025, 9),
      description:
        "I participated in CalHacks 12.0 with Isabel Ku, creating Spotlight, an app aimed to help older people navigate websites using AI-assisted technology. While we did not win, I was really proud that we were able to implement an early research topic: allowing AI to make decisions based on screenshots and DOM snapshots. Next year, I would notice in DiamondHacks 2026 that a similar approach was used with BrowserUse, an LLM designed to do anything for you on the web.",
      links: [
        {
          title: "Devpost",
          url: "https://devpost.com/software/spotlight-12sk7z",
          icon: <SiDevpost className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "LAHacks 2026",
      imageUrl: "/experience-images/future-fixers.png",
      date: new Date(2026, 3),
      description:
        "For my first LAHacks, I developed Future Fixers along with 3 other devs, a Roblox game that aimed to gamify education by combining direct problem solving with a popular Roblox game: Flee the Facility. While we did not win, I had a lot of fun learning how Roblox worked, and making cool graphics and animations with Blender. I think one challenge we faced that ultimately seperated us from the winners was our game design; a good game should only have one clear problem that the player has to tackle. In short, gamers aren't there to solve math problems, but to play games.",
      links: [
        {
          title: "Devpost",
          url: "https://devpost.com/software/future-fixers",
          icon: <SiDevpost className="w-5 h-5" />,
        },
      ],
    },

    // Add more experiences here...
  ];
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  return (
    <div id="blog" className="p-16">
      <h1 className="font-bold text-4xl text-center">Blog</h1>
      <hr className="h-px my-8 bg-hollow2 border-0"></hr>
      {/* COLLECTION GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-16 lg:mt-24">
        {sortedExperiences.map((exp, index) => (
          <Experience
            key={index}
            title={exp.title}
            imageUrl={exp.imageUrl}
            description={exp.description}
            date={exp.date}
            links={exp.links}
          />
        ))}
      </div>
    </div>
  );
}
export default Blog;
