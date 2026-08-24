function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full mt-4 items-center scroll-mt-20"
    >
      <div className="w-full max-w-7xl px-6 sm:px-12 lg:px-24">
        <h1 className="font-bold text-4xl text-center">About Me</h1>
        <hr className="w-full h-px my-8 bg-hollow2 border-0"></hr>
      </div>
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
      </main>
    </div>
  );
}
export default About;
