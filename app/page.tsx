import HeroSection from "@/components/home/HeroSection";
import UISection from "@/components/home/UISection";
import ThreeCanvas from "@/components/three/ThreeCanvas";

const Home = () => {
  return (
    <main className="app transition-all ease-in">
      <HeroSection />
      <UISection />
      <ThreeCanvas />
    </main>
  );
};

export default Home;
