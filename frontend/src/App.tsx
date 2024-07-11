import { About } from "./components/About";
import { HeroSection } from "./components/HeroSection";
import { Skill } from "./components/Skill";
import { Social } from "./components/Social";

function App() {
  return (
    <>
      <div>
        <div className="h-screen">
          <HeroSection />
          <Skill />
          <About />
        </div>
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
          <Social />
        </div>
      </div>
    </>
  );
}

export default App;
