import html from "../../../../assets/skills/html.svg";
import css from "../../../../assets/skills/css.svg";
import js from "../../../../assets/skills/javaScript.svg";
import react from "../../../../assets/skills/react.svg";
import bootstrap from "../../../../assets/skills/bootstrap-solid.png";
import git from "../../../../assets/skills/Git-Icon-1788C.png";
import figma from "../../../../assets/skills/figma-1.png";
import node from "../../../../assets/skills/nodejs.png";
import mongo from "../../../../assets/skills/Vector.png";
const Skills = () => {
  return (
    <div className="bg-gray-300">
      <div className="border border-x-8 border-y-8 border-black w-3/12 mx-auto">
        <h1 className=" text-center p-6 text-xl text-black font-bold">
          SKILLS
        </h1>
      </div>
      <div className="mx-auto w-1/2 py-12">
        <div>
          <h1 className="font-bold text-xl py-4">Using Now</h1>
          <div className="grid grid-cols-4 gap-12">
            <div>
              <img src={html} alt="" />
              <p>HTML</p>
            </div>
            <div>
              <img src={css} alt="" />
              <p>CSS</p>
            </div>
            <div>
              <img src={js} alt="" />
              <p>JAVASCRIPT</p>
            </div>
            <div>
              <img src={react} alt="" />
              <p>REACT</p>
            </div>
            <div>
              <img src={bootstrap} alt="" />
              <p>BOOTSTRAP</p>
            </div>
            <div>
              <img src={git} alt="" />
              <p>GIT</p>
            </div>
            <div>
              <img src={figma} alt="" />
              <p>FIGMA</p>
            </div>
            <div>
              <img src={node} alt="" />
              <p>NODE.JS</p>
            </div>
            <div>
              <img src={mongo} alt="" />
              <p>MONGODB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
