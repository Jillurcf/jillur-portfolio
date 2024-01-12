import { motion, useScroll } from "framer-motion";
import aboutimg from "../../../../assets/aboutimg.jpg";

const About = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen">
      <div className="h-[200px]"></div>
      <h1 className="text-5xl font-semibold">Hi! I am Jillur, a web developer</h1>
      <motion.div style={{ scaleX: scrollYProgress }}>
        <div className="md:flex gap-8">
          <div className="">
            <img src={aboutimg} alt="" />
          </div>
          <div>
            <h1 className="text-start">
              A Web developer specializing in React.js, I bring creativity and
              proficiency to crafting seamless and responsive user interfaces.
              With a skill set that includes Mongo DB, Express.js, and Node.js,
              next.js. I thrive on turning innovative ideas into functional,
              user-centric web applications. I am dedicated to delivering
              high-quality, visually appealing solutions that enhance user
              experiences. Also I am team player with good communication skills.
              And ready works under pressures.
            </h1>

            <h2 className="font-bold text-xl mt-2">Experiences: </h2>
            <ol>
              <li>
                1. Completed Full stack project 3oth November, 2023. Where user
                can maintain contest and separately get access as an admin,
                guest and contest creator. And participant can pay through
                stripe payment method.
              </li>
              <li>
                2. Completed a restaurant project namely FoodEX at 07 November,
                2023
              </li>
              <li>
                3. Completed a Tech Shop project namely TecHero at 13 October,
                2023
              </li>
              <li>
                4. Frontend Developer at waymarks from February, 2020 to till
                the data and here completed a website for the company of Hotel
                management services.
              </li>
            </ol>
          </div>
        </div>
      </motion.div>
   
    </div>
  );
};

export default About;
