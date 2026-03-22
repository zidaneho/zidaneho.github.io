import Experience from "../components/Experience";
import NavBar from "../components/NavBar";

function About() {
  const experiences = [
    {
      title: "Blockography.AI",
      imageUrl: "/experience-images/blockography.jpg",
      description:
        "Achieved 1st on the beginner track, 5th out of 45 teams overall, in UCSD ACM’s Blockography.AI competition by developing a high performance XGBooster model in Python that classifes Minecraft biomes from a dataset of screenshots in the game. Optimized the model’s test accuracy from 60% to 92% through tuning hyperparameters, resizing images, and feature engineering",
    },
    {
      title : "CSE 167 Final",
      imageUrl:"/experience-images/gojo-render.png",
      description: "For our final ray tracing project in CSE 167: Intro to Computer Graphics, we recreated a dramatic 3D scene of Satoru Gojo from Jujutsu Kaisen casting his \"Hollow Purple\" technique. To achieve this, we expanded our core engine—which features multi-bounce global illumination and soft shadows—to support .glb files via tinygltf for custom textured models. Because the high-poly mesh was computationally expensive, we drastically optimized our render times by implementing a Bounding Volume Hierarchy (BVH) structure to reduce intersection complexity from O(n) to O(log n) and decimated unseen triangles. Finally, to capture the explosive lighting of the scene without the heavy cost of true volumetric rendering, we utilized creative workarounds, such as placing an invisible, backface-culled emitting plane to perfectly illuminate Gojo's face, resulting in our dynamic final image."
    }

    // Add more experiences here...
  ];
  return (
    <div className="flex flex-col w-full min-h-screen mt-4 items-center">
      <NavBar includeHome={true} />
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
