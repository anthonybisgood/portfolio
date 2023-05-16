import React from "react";
import Switcher from "./Components/Switcher";
import RotatingText from "./Components/RotatingText";
import { useRef } from "react";

import "./App.css";

const height = window.screen.height;

function doClick(ref) {
  var element = document.getElementById(ref.current.id);
  var screenHeight = window.screen.height;
  var offset = screenHeight * 0.1;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.scrollY - offset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function AboutSection() {
  return (
    <div className="justify-center">
      <h1 className="flex text-5xl justify-center">About</h1>
      <div className="grid grid-rows-1 grid-flow-col place-items-center justify-center">
        <div className="col-span-0 row-span-1">
          <img
            src={require("./Images/IMG_0444.jpg")}
            alt="A picture of me"
            className="object-fill h-64 min-h-64 rounded-full"
          />
        </div>
        <div className="col-span-2 row-span-1 pl-14 max-w-lg">
          <p className="pb-4">
            I am a student attending the University of Arizona, pursuing a
            degree in Computer Science and a minor in Buisness Administration.
          </p>
          <p className="pb-4">
            My main interests are in cloud computing, database design, and
            computer security. I also enjoy working on projects that involve
            blockchain technology.
          </p>
          <p>I also love to hike, read sci-fi novels, and test new recipes.</p>
        </div>
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div className="h-screen justify-center mt-96">
      <h2 className="flex text-5xl justify-center">My Projects</h2>
      <div>djioawjfioawjiofjawio</div>
    </div>
  );
}

function App() {
  const aboutButton = useRef(null);
  const projectsButton = useRef(null);
  const ContactButton = useRef(null);
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-white dark:text-slate-900 text-white">
      <header className="pt-4 mx-4 font-century_gothic">
        <nav>
          <button
            className="header-container-item"
            id="about"
            onClick={() => doClick(aboutButton)}
          >
            About
          </button>
          <button
            className="header-container-item"
            id="projects"
            onClick={() => doClick(projectsButton)}
          >
            Projects
          </button>
          <button
            className="header-container-item"
            id="contact"
            onClick={() => doClick(ContactButton)}
          >
            Contact
          </button>
          <div className="pt-1">
            <Switcher />
          </div>
        </nav>
      </header>

      <div className="flex h-screen pb-48 items-center justify-center text-3xl ">
        <div>
          <RotatingText />
          <h2 className="mt-16 max-w-xl ">
            I'm <span className="font-bold">Anthony Bisgood</span>, a full-stack
            developer and data scientist focused on data-driven solutions.
          </h2>
        </div>
        <div className="h-screen">
          <div className="pt-96" id="about-me"></div>
        </div>
      </div>
      <div ref={aboutButton} id="About Section">
        <AboutSection />
      </div>
      <div ref={projectsButton} id="Projects Section">
        <ProjectSection />
      </div>
    </div>
  );
}

export default App;
