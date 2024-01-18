import Foodex from "./Foodex";
import LetsGo from "./LetsGo";
import TechHero from "./TechHero";

const Projects = () => {
  return (
    <div className="bg-gray-400 px-8">
      <div className="h-[100px]"></div>
      <h1 className="text text-4xl font-bold text-center">My projects</h1>
      <LetsGo></LetsGo>
      <Foodex></Foodex>
      <TechHero></TechHero>
    </div>
  );
};

export default Projects;
