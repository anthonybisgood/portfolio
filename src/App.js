import React from "react";
import Switcher from "./Components/Switcher";
import RotatingText from "./Components/RotatingText";
import LanguageGraph from "./Components/LanguageGraph";
import ProficiencyGraph from "./Components/ProficiencyGraph";
import { useRef } from "react";
import resume from "./resume.pdf";

import "./App.css";

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

function MediaIcons() {
  return (
    <div className="flex gap-10 ">
      <a
        target="_blank"
        href="https://github.com/anthonybisgood"
        className="hover:opacity-50 hover:text-cyan-300 hover:dark:text-cyan-500"
      >
        <i class="fa fa-github"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/anthony-bisgood-b028a4194/"
        className="hover:opacity-50 hover:text-cyan-300 hover:dark:text-cyan-500"
      >
        <i class="fa fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/Anthony_Bisgood/"
        className="hover:opacity-50 hover:text-cyan-300 hover:dark:text-cyan-500"
      >
        <i class="fa fa-instagram"></i>
      </a>
      <a
        target="_blank"
        href={resume}
        className="hover:opacity-50 hover:text-cyan-300  hover:dark:text-cyan-500"
      >
        <i class="fa fa-file"></i>
      </a>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="mt-52">
      <h1 className="flex text-5xl justify-center divide-x-4">About</h1>
      <hr className="my-4 w-1/2 mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div className="grid grid-rows-1 grid-flow-col place-items-center justify-center">
        <div className="col-span-1 row-span-1">
          <img
            src={require("./Images/myImage.jpg")}
            alt="A picture of me"
            className="object-fill h-72 min-h-72 rounded-full"
          />
        </div>
        <div className="col-span-2 row-span-1 pl-14 max-w-lg text-lg">
          <p className="pb-4">
            I am a student attending the{" "}
            <span className="text-cyan-300 dark:text-cyan-500">
              University of Arizona
            </span>
            , pursuing a degree in{" "}
            <span className="text-cyan-300 dark:text-cyan-500">
              Computer Science
            </span>{" "}
            and a minor in Buisness Administration.
          </p>
          <p className="pb-4">
            My main interests are in{" "}
            <span className="text-cyan-300 dark:text-cyan-500">
              cloud computing
            </span>
            ,{" "}
            <span className="text-cyan-300 dark:text-cyan-500">
              database design
            </span>
            , and{" "}
            <span className="text-cyan-300 dark:text-cyan-500">
              computer security
            </span>
            . I also enjoy working on projects that involve blockchain
            technology.
          </p>
          <p>I also love to hike, read sci-fi novels, and test new recipes.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundSection() {
  return (
    <div className="mt-72">
      <h4 className="text-center mx-auto text-5xl pb-4">Background</h4>
      <hr className="my-4 w-1/2 mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div className="grid grid-cols-2">
        <div className="text-center">
          <h5 className="mx-auto text-2xl">Programming Proficiency</h5>
          <p className="px-10 my-4 text-md">
            I have worked with the following languages and frameworks to create
            a variety of projects.
          </p>
        </div>
        <div className="text-center">
          <h6 className="mx-auto text-2xl">Frameworks and Concepts</h6>
          <p className="px-10 my-4 text-md">
            Below are some programming concepts and frameworks that I've gained
            experience with both in and out of the classroom.
          </p>
        </div>
        <div className="ml-[5%]">
          <ProficiencyGraph />
        </div>
        <div className="mr-[5%]">
          <LanguageGraph />
        </div>
      </div>
    </div>
  );
}

function ProjectImage(imageName) {
  imageName = imageName.imageName;
  let path = "./Images/" + imageName + ".png";
  let darkPath = "./Images/" + imageName + "dark.png";
  return (
    <div>
      <div className="hidden dark:block">
        <img
          src={require("" + path)}
          alt="Picture representing an airport"
          className="h-32 max-h-32 border-2 border-gray-500 rounded-lg"
        ></img>
      </div>
      <div className="block dark:hidden">
        <img
          src={require("" + darkPath)}
          alt="Picture representing an airport"
          className="h-32 max-h-32 border-2 border-gray-500 rounded-lg"
        ></img>
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div className="justify-center mt-72">
      <h2 className="flex text-5xl justify-center">My Projects</h2>
      <hr className="my-4 w-1/2 mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div className="grid mt-10 place-items-center text-md" id="projects">
        <a
          className=" height-50  hover:opacity-50"
          href="https://github.com/anthonybisgood/Airport-DBMS"
          target="_blank"
        >
          <div className="grid grid-cols-2 place-items-center justify-center max-w-xlg">
            <ProjectImage imageName="airport" />
            <div>
              <ul className="list-disc max-w-md">
                <li className="pb-2">
                  Created a 2 Tier DBMS using Oracle's DBMS that mimicked Tucson
                  International Airport's database.
                </li>
                <li className="pb-2">
                  Allows the user to make changes and query the database with a
                  Java interface using JDBC
                </li>
                <li className="pb-2" id="project_skills">
                  Skills: Java, Oracle DBMS, JDBC, SQL, Database Design
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          className=" height-50  hover:opacity-50 mt-10"
          href="https://github.com/anthonybisgood/Quantifying-the-Emergence-of-Deepfakes"
          target="_blank"
        >
          <div className="grid grid-cols-2 place-items-center justify-center max-w-xlg">
            <ProjectImage imageName="lock" />
            <div className="">
              <ul className="list-disc max-w-md">
                <li className="pb-2">
                  Research paper on how to best quantify the emergence of
                  deepfakes on social media.
                </li>
                <li className="pb-2">
                  Used a variety of methods including network density, user
                  engagement, and region to determine the best way measure how
                  deepfakes spread.
                </li>
                <li className="pb-2" id="project_skills">
                  Skills: Python, Data Analysis, Research, Computer security
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          className=" height-50  hover:opacity-50 mt-10"
          href="https://github.com/CSC335-Fall2021/csc-335-autobattler-autobattler-adjz"
          target="_blank"
        >
          <div className="grid grid-cols-2 place-items-center justify-center max-w-xlg">
            <ProjectImage imageName="controller" />
            <div className="">
              <ul className="list-disc max-w-md">
                <li className="pb-2">
                  Created a turn based strategy game mimiking an autobattler
                  using Genshin Impact characters with complex in-game
                  strategies.
                </li>
                <li className="pb-2">
                  Implemented a variety of design patterns including the MVC and
                  Observer patterns.
                </li>
                <li className="pb-2" id="project_skills">
                  Skills: Java, Design Patterns, Object Oriented Programming
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          className=" height-50  hover:opacity-50 mt-10"
          href="https://github.com/anthonybisgood/Game-of-Life"
          target="_blank"
        >
          <div className="grid grid-cols-2 place-items-center justify-center max-w-xlg">
            <ProjectImage imageName="leaf" />
            <div className="">
              <ul className="list-disc max-w-md">
                <li className="pb-2">
                  Implemented Conways game of life in C++ using data structures
                  and C++ code conventions.
                </li>
                <li className="pb-2" id="project_skills">
                  Skills: C++, Data Structures
                </li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
function ContactSection() {
  return (
    <div className="justify-center pb-32 mt-64">
      <h1 className="flex text-5xl justify-center pb-4">Contact</h1>
      <hr className="my-4 w-1/2 mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div>
        <p className="flex justify-center">
          Feel free to contact me at:
          <a
            href="mailto:abisgood30@gmail.com"
            className="pl-1 hover:underline text-cyan-300 dark:text-cyan-500"
            target="_blank"
          >
            abisgood30@gmail.com
          </a>
        </p>
      </div>
      <div className="flex text-3xl justify-center mt-4 ">
        <MediaIcons />
      </div>
    </div>
  );
}

function App() {
  const aboutButton = useRef(null);
  const projectsButton = useRef(null);
  const ContactButton = useRef(null);
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-white dark:text-slate-900 text-white">
      <head>
        <title>Anthony Bisgood</title>
      </head>
      <header className="pt-3 mx-4 font-century_gothic">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <nav>
          <button
            className="header-container-item"
            id="landing"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Home
          </button>
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
          <div className="pt-2.5">
            <Switcher />
          </div>
        </nav>
      </header>

      <div className="flex h-screen pb-48 items-center justify-center text-3xl">
        <div>
          <RotatingText />
          <h2 className="mt-16 max-w-xl">
            I'm <span className="font-bold">Anthony Bisgood</span>, a full-stack
            developer and data scientist focused on data-driven solutions.
          </h2>
        </div>
        <div className="absolute bottom-10 left-10">
          <MediaIcons />
        </div>
      </div>

      <div ref={aboutButton} id="About Section">
        <AboutSection />
      </div>
      <div>
        <BackgroundSection />
      </div>
      <div ref={projectsButton} id="Projects Section">
        <ProjectSection />
      </div>
      <div ref={ContactButton} id="Contact Section">
        <ContactSection />
      </div>
      <footer>
        <div className="flex justify-center">
          Made with ❤️ by Anthony Bisgood ©2023
        </div>
      </footer>
    </div>
  );
}

export default App;
