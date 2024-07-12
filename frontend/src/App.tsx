import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { Skill } from "./components/Skill";
import { Social } from "./components/Social";

function App() {
  return (
    <>
      <div>
        <div className="">
          <HeroSection />
          <About />
          <Skill />
          <Projects/>
          <Footer/>
        </div>
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
          <Social />
        </div>
      </div>
    </>
  );
}

export default App;
