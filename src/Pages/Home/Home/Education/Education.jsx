import { motion, useAnimation, useScroll } from "framer-motion";
import eduImg from "../../../../assets/Education.jpg";
import { useEffect } from "react";

const Education = () => {
  // Get scroll information using useScroll
  const { scrollYProgress } = useScroll();

  // Create animation controls using useAnimation
  const controls = useAnimation();

  // Update the animation based on the scroll position
  useEffect(() => {
    controls.start({ opacity: 1 - scrollYProgress });
  }, [scrollYProgress, controls]);

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 10 }}
        whileInView={{ opacity: 1 }}
      >
        <div className=" grid md:grid-cols-2 lg:gap-8 bg-gray-500 lg:px-12">
          <div className="pt-12">
            <h2 className="font-bold text-xl mt-2 px-8">Professional Course: </h2>
            <ol className="px-8">
              <li>
                a. “Complete web development course” at programming hero in 2023
              </li>
              <li>
                b. Diploma course in computer science and engineering at NYDASA
                in 2000-2003.
              </li>
            </ol>
            <h2 className="font-bold text-xl mt-2 px-8">Education: </h2>
            <ol className="px-8">
              <li>
                MBA- Major Marketing at Bangladesh Open University, 4th level.
              </li>
            </ol>
            <h2 className="font-bold text-xl mt-2 px-8">
              Interest, Hobbies and Activities:
            </h2>
            <ol className="px-8 pb-4">
              <li>1. Content Writing</li>
              <li>
                2. Soccer play since Junior High School and won countless
                championships and awards.
              </li>
              <li>3. Poem Reciting.</li>
            </ol>
          </div>
          <div className=" lg:order-last order-first">
            <img className="" src={eduImg} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
