
import Projects from "../../Projects/Projects";
import About from "./About/About";
import { App } from "./About/TsParticle";
import Banner from "./Banner/Banner";
import BannerEx from "./Banner/BannerEx";
import Education from "./Education/Education";



export default function Home() {
 
  

  return (
    <>
   
      <Banner></Banner>
      <BannerEx></BannerEx>
     <About></About>
     <Education></Education>
    {/* <Projects></Projects> */}
    </>
  );
}
