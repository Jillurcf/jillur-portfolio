import html from "../../../../assets/skills/html.svg";
import css from "../../../../assets/skills/css.svg";
import js from "../../../../assets/skills/javaScript.svg";
import ts from "../../../../assets/skills/TypeScript.png";
import react from "../../../../assets/skills/react.svg";
import reactNative from "../../../../assets/skills/ReactNative.png";
import tailwind from "../../../../assets/skills/tailwind.png";
import bootstrap from "../../../../assets/skills/bootstrap-solid.png";
import git from "../../../../assets/skills/Git-Icon-1788C.png";
import figma from "../../../../assets/skills/figma-1.png";
import node from "../../../../assets/skills/nodejs.png";
import mongo from "../../../../assets/skills/Vector.png";
import next from "../../../../assets/skills/next.jpg";
import web3 from "../../../../assets/skills/web3.png";
import photoshop from "../../../../assets/skills/photoshop.png";
import illustrator from "../../../../assets/skills/illustrator.png";
const Skills = () => {
  return (
    <div className="bg-gray-300 px-8">
      <div className="border border-x-8 border-y-8 border-black lg:w-3/12 mx-auto">
        <h1 className=" text-center p-6 text-xl text-black font-bold">
          SKILLS
        </h1>
      </div>
      <div className="mx-auto w-1/2 py-12">
        <div className="lg:text-start text-center">
          <h1 className="font-bold text-2xl py-4">USING NOW</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-12 text-center">
            <div className="">
              <img className="mx-auto py-2" src={html} alt="" />
              <p className="">HTML</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={css} alt="" />
              <p>CSS</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={js} alt="" />
              <p>JAVASCRIPT</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={ts} alt="" />
              <p>TYPESCRIPT</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={react} alt="" />
              <p>REACT</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={reactNative} alt="" />
              <p>REACT NATIVE</p>
            </div>
            <div className="">
              <img className="mx-auto py-2" src={next} alt="" />
              <p className="">Next Js</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={tailwind} alt="" />
              <p>TAILWIND</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={bootstrap} alt="" />
              <p>BOOTSTRAP</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={git} alt="" />
              <p>GIT</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={figma} alt="" />
              <p>FIGMA</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={node} alt="" />
              <p>NODE.JS</p>
            </div>
            <div>
              <img className="mx-auto py-2" src={mongo} alt="" />
              <p>MONGODB</p>
            </div>
          </div>
        </div>
        <div className="py-12">
          <h1 className="font-bold text-2xl">LEARNING:</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-12 text-center">
            <div className="relative">
              <img className="mx-auto py-2" src={web3} alt="" />
              <p >WEB</p>
              <p className="absolute xl:lg:top-[82%] xl:left-[63%]  lg:top-[76%] lg:left-[66%] top-[82%] left-[62%]">3</p>
            </div>
          </div>
        </div>
        <div className="py-4 lg:text-start text-center">
          <h1 className="font-bold text-2xl">OTHER SKILLS:</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-12 text-center">
            <div className="">
              <img className="mx-auto py-2" src={photoshop} alt="" />
              <p className="">Photoshop</p>
            </div>
            <div className="">
              <img className="mx-auto py-2" src={illustrator} alt="" />
              <p className="">Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
