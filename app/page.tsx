import HomeAnimateContainer from "@/components/home/HomeAnimateContainer";
import ThreeCanvas from "@/components/three/ThreeCanvas";

const Home = () => {
  return (
    <main className="app transition-all ease-in">
      <HomeAnimateContainer />
      <ThreeCanvas />
    </main>
  );
};

export default Home;
