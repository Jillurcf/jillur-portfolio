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
        <div className="md:flex gap-8 bg-gray-500 px-12">
          <div className="pt-12">
            <h2 className="font-bold text-xl mt-2">Professional Course: </h2>
            <ol>
              <li>
                a. “Complete web development course” at programming hero in 2023
              </li>
              <li>
                b. Diploma course in computer science and engineering at NYDASA
                in 2000-2003.
              </li>
            </ol>
            <h2 className="font-bold text-xl mt-2">Education: </h2>
            <ol>
              <li>
                MBA- Major Marketing at Bangladesh Open University, 4th level.
              </li>
            </ol>
            <h2 className="font-bold text-xl mt-2">
              Interest, Hobbies and Activities:{" "}
            </h2>
            <ol>
              <li>1. Content Writing</li>
              <li>
                2. Soccer play since Junior High School and won countless
                championships and awards.
              </li>
              <li>3. Poem Reciting.</li>
            </ol>
          </div>
          <div className="w-1/2">
            <img src={eduImg} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
