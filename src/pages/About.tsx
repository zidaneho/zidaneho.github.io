import Experience from "../components/Experience";

function About() {
  const experiences = [
    {
      title: "Blockography.AI",
      imageUrl: "/experience-images/blockography.jpg",
      description:
        "Achieved 1st on the beginner track, 5th out of 45 teams overall, in UCSD ACM’s Blockography.AI competition by developing a high performance XGBooster model in Python that classifes Minecraft biomes from a dataset of screenshots in the game. Optimized the model’s test accuracy from 60% to 92% through tuning hyperparameters, resizing images, and feature engineering",
    },
    {
      title: "CSE 167 Final",
      imageUrl: "/experience-images/gojo-render.png",
      description:
        'For our final ray tracing project in CSE 167: Intro to Computer Graphics, we recreated a dramatic 3D scene of Satoru Gojo from Jujutsu Kaisen casting his "Hollow Purple" technique. To achieve this, we expanded our core engine—which features multi-bounce global illumination and soft shadows—to support .glb files via tinygltf for custom textured models. Because the high-poly mesh was computationally expensive, we drastically optimized our render times by implementing a Bounding Volume Hierarchy (BVH) structure to reduce intersection complexity from O(n) to O(log n) and decimated unseen triangles. Finally, to capture the explosive lighting of the scene without the heavy cost of true volumetric rendering, we utilized creative workarounds, such as placing an invisible, backface-culled emitting plane to perfectly illuminate Gojo\'s face, resulting in our dynamic final image.',
    },
    {
      title: "Student Engineer at UCSD ITS Services",
      imageUrl: "/about-images/ucsditservices.jpg",
      description:
        "I recently received and is currently am working for ITS Services as of Spring 2026! I am honored to have received this opportunity, especially a great team that I rely on (a lot) for help and questions. I work on a variety of tasks: contributing to the ticket system (SNOW), migrating Canvas LTI tools from 1.1 to 1.3 (C#, .NET), and contributing to active UCSD repositories (SAL, DataHub, Podcast). I am additionally learning how to write SQL and Groovy code.",
    },
    {
      title: "CSE 168 Final",
      imageUrl: "/experience-images/512spp.png",
      description:
        "Over the course we built on a path tracer implemented with C++ and the Embree library. It was a fun experience; the most fun part about the class was the final project. Me and my partner wanted to try creating a volumetric fire effect, similar to the one in Pixar's 'Elemental'. While I think there is a lot of room for improvement, we would probably have to start a new project with different sysematic choices. However, I think the end result looks very nice. We have further documentation here: https://sites.google.com/view/cse168-znho-ibku/home",
    },
    {
      title: "Stellatro",
      imageUrl: "/experience-images/stellatro-group.JPG",
      description:
        "As a competitions developer on ACM AI, I helped out in hosting the competition 'Stellatro,' a poker game where competitiors have to develop bots and compete for the highest scoring poker hand, of course with a twist of power ups (Balatro inspiration of jokers). Competitors ideally has to develop a bot that picks the best power ups that is suited for their hand, or they can also try to deny what the other bot is going to pick up. We had around 30 teams compete and submit scores, and distributed laptops and AI dev kits sponsored by Qualcomm. I worked on the GUI game, helping competitiors understand how to play the game, in case they were unfamiliar. I developed the game coordinating with my team, but I developed the interface alone using pygame.",
    },
    {
      title: "CalHacks 12.0",
      imageUrl: "/experience-images/spotlight.png",
      description:
        "I participated in CalHacks 12.0 with Isabel Ku, creating Spotlight, an app aimed to help older people navigate websites using AI-assisted technology. While we did not win, I was really proud that we were able to implement an early research topic: allowing AI to make decisions based on screenshots and DOM snapshots. Next year, I would notice in DiamondHacks 2026 that a similar approach was used with BrowserUse, an LLM designed to do anything for you on the web.",
    },
    {
      title: "LAHacks 2026",
      imageUrl: "/experience-images/future-fixers.png",
      description:
        "For my first LAHacks, I developed Future Fixers along with 3 other devs, a Roblox game that aimed to gamify education by combining direct problem solving with a popular Roblox game: Flee the Facility. While we did not win, I had a lot of fun learning how Roblox worked, and making cool graphics and animations with Blender. I think one challenge we faced that ultimately seperated us from the winners was our game design; a good game should only have one clear problem that the player has to tackle. In short, gamers aren't there to solve math problems, but to play games.",
    },

    // Add more experiences here...
  ];
  return (
    <div
      id="about"
      className="flex flex-col w-full mt-4 items-center scroll-mt-20"
    >
      <main className="flex flex-col p-6 sm:p-12 lg:p-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          <div className="w-full max-w-[320px] shrink-0 aspect-[4/5] overflow-hidden rounded-xl bg-slate-200">
            <img
              src={"/about-images/myself-LoLPark.webp"}
              className="w-full h-full object-cover object-center"
              alt="Zidane Ho"
            />
          </div>

          {/* TEXT CONTENT: Added text-center for mobile, text-left for desktop */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <p className="text-xl font-semibold">Hello!</p>
            <p className="text-lg leading-relaxed">
              My name is Zidane Ho and I'm currently studying for my B.S of
              Computer Science at UC San Diego. In my spare time, you'd find me
              building personal coding projects, going out to eat delicious
              food, or playing videogames with friends. I enjoy working with
              other like-minded people, so please feel free to contact me.
            </p>
            <p className="text-lg">
              Below is a collection of experiences I would like to share in my
              academic journey.
            </p>
          </div>
        </div>

        {/* COLLECTION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 lg:mt-24">
          {experiences.map((exp, index) => (
            <Experience
              key={index}
              title={exp.title}
              imageUrl={exp.imageUrl}
              description={exp.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default About;
