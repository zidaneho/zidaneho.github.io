import Profile from "../components/Profile";
import NavBar from "../components/NavBar";
import Portfolio from "./Portfolio";
import About from "./About";

function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-8">
      <NavBar></NavBar>
      <div
        id="home"
        className="scroll-mt-20 w-full min-h-[calc(100vh-5rem)] flex items-center justify-center"
      >
        <Profile></Profile>
      </div>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}
export default Home;
