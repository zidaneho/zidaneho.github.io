import Profile from "../components/Profile";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <Profile></Profile>
      <NavBar includeHome={false}></NavBar>
    </div>

  );
}
export default Home;
