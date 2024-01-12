import { motion, useAnimation, useScroll  } from "framer-motion";
import eduImg from "../../../../assets/Education.jpg";
import  { useEffect } from 'react';

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
    <div className="mt-12">
      <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 10 }}
          whileInView={{opacity: 1}}
      >
        <div className="md:flex gap-8">
          <div>
            

            <h2 className="font-bold text-xl mt-2">Education: </h2>
            <ol>
              <li>
              a.	Completed a six month long “Complete web development course” at programming hero in 2023
              </li>
              <li>
              b.	Completed two years long Diploma course in computer science and engineering at NYDASA in 2000-2003.
              </li>
              <li>
              c.	MBA- Major Marketing at Bangladesh Open University, 4th level.
              </li>
              
            </ol>
            <h2 className="font-bold text-xl mt-2">Special Skills: </h2>
            <ol>
              <li>
              1. Good Communication skill in both English and Bengali
              </li>
              <li>
              2. Content Writing
              </li>
              <li>
              3. Completed Masters Course on meditation from Quantum Foundation, in the year 2015. 
              </li>
              <li>
              4. Others software: adobe photoshop, adobe illustrator, adobe premiere-pro. 
              </li>
              
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
