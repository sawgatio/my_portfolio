import { Navbar } from "./components/navbar";
import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/project";
import { Skill } from "./components/skills";

export default function Home() {

  return (
    <div className="p-3 w-full ">
      <Container>
        <Navbar/>
        <Hero/>
        <About/>
        <Skill/>
        <Projects/>
      </Container>
            
    </div>
  );
}
