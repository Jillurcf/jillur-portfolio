import { motion, useScroll } from "framer-motion";
import aboutimg from "../../../../assets/aboutimg.jpg";
import aboutmeEnd from "../../../../assets/aboutmeEnd.png";
import development from "../../../../assets/development.png";

const About = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-gray-300 py-24 px-8">
      <div className="border border-x-8 border-y-8 border-black lg:w-3/12 mx-auto">
        <h1 className=" text-center p-6 text-xl text-black font-bold">
          ABOUT ME
        </h1>
      </div>
      <div className="md:w-3/5 mx-auto py-8">
        <p>
          I have a solid 2+ years of web development Background. Strong
          knowledge of developing frontend base and full stack or CMS, CRM and
          Procurement project such as Tourism Management Project, Restaurant
          Management Project, Tech Shop Management Project, Contest Management
          Project and as well as Hotel Management Project. I am experienced in
          performing as a team player and experienced in closely work with
          design team. Seeking a challenging role where I can continually grow
          as a web developer and contribute to the projects in a competitive and
          collaborative environment.
        </p>
        <img className="mx-auto py-12" src={aboutmeEnd} alt="" />
      </div>

      <div className="lg:flex md:w-3/5 mx-auto justify-between">
        <div>
          <div className="flex">
            <img src={development} alt="" />
            <div>
              <p className="text-xl font-bold">DEVELOPMENT</p>
            </div>
          </div>
          <p className="pl-12 -mt-8">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div>
          <div className="flex">
            <img src={development} alt="" />
            <p className="text-xl font-bold">MAINTANANCE</p>
          </div>
          <p className="pl-12 -mt-8">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
      </div>
      <img className="mx-auto py-12" src={aboutmeEnd} alt="" />
      {/* <div className="h-[200px]"></div>
      <h1 className="text-5xl font-semibold">
        Hi! I am Jillur, a web developer
      </h1>
      <motion.div style={{ scaleX: scrollYProgress }}>
        <div className="md:flex gap-8">
          <div className="">
            <img src={aboutimg} alt="" />
          </div>
          <div>
            <h1 className="text-start"></h1>

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
      </motion.div> */}
    </div>
  );
};

export default About;
