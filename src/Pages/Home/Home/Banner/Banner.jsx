// import { motion } from "framer-motion";
import img from "../../../../assets/profile.png";
// import img1 from "../../../../assets/profile-transparent1.png";
import resume from "../../../../assets/Jillur-resume1.pdf";

import blackBackground from "../../../../assets/Designer/developer/Rectangle 67.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Banner = () => {
  return (
    <div className=" md:flex bg-gray-300 place-items-center mt-6">
      <div className="flex-1">
        <div className="w-1/2 mx-auto">
          <h1 className="align-center text-10 mx-auto text-black text-xl font-bold">
            Hi I am
          </h1>
          <h1 className="pt-6 text-4xl text-black font-bold  text-10 mx-auto">
            Jillur Rahman
          </h1>
          <p>Frontend developer, react.js</p>
          <div className=" flex py-2">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/jillur-rahman-tushar"
              className="md:mr-4 text-xl text-black"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/Jillurcf"
              className="md:mr-12 text-xl text-black"
            >
              <FaGithub></FaGithub>
            </a>
          </div>
          <div className="py-12">
            <a href={resume} download="resume">
              <button className="btn btn-ghost btn-outline">Downlod Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <img className="" src={blackBackground} alt="" />

        <div className="">
          <img
            className="absolute z-40 md:w-[200px] w-[150px] top-[25%] left-[40%]"
            src={img}
            alt=""
          />
          <div className="hidden lg:block absolute rotate-45 rounded-xl top-[32%] left-[25%]  w-[420px] h-[250px] bg-gray-700"></div>
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/F3WmkF1/java-Script.png)",
            }}
            className=" hidden lg:block absolute rotate-45 rounded-xl top-[27%] left-[25%]  w-[420px] h-[250px] bg-gray-600"
          ></div>
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/34Fm6sB/reactphoto.jpg)",
            }}
            className="hidden lg:block absolute rotate-45 rounded-xl top-[22%] left-[25%]  w-[420px] h-[250px] bg-gray-800"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="hero"
style={{
  backgroundImage:

    "url(https://i.ibb.co/D17DNMd/Rectangle-67.png)",
}}
> */
}
{
  /* <img className="" src={blackBackground} alt="" /> */
}
{
  /* <div className="hero-overlay bg-opacity-60">

</div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
    <h1 className="mb-5 text-5xl font-bold">I am Jillur <br></br> a Web developer</h1>
    <div
className="w-[150px] h-[150px] box mx-auto mt-36" */
}
// animate={{
//   scale: [2, 2, 2, 0, 1],

//   borderRadius: ["0%", "0%", "50%", "50%", "0%"],
// }}
// transition={{
//   duration: 2,
//   ease: "easeInOut",
//   times: [0, 0.2, 0.5, 0.8, 1],
//   repeat: 1,
//   repeatDelay: 2,
// }}
// >
// <img src={img} alt="" />
// </div>

//     <p className="mb-5 z-40 mt-24">
//     Expert in React.js | Proficient in MongoDB, Express.js, Node.js | Transforming Ideas into Interactive Web Experiences.
//     </p>

//     <a href={resume} download="resume">
//     <button className="btn btn-primary">Downlod Resume</button>
//     </a>
//   </div>
// </div>
// </div>
