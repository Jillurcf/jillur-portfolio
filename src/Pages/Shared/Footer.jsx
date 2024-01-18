import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/profile.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center max-h-48 bg-gray-600">
        <div>
          <img className="w-[100px] py-4 hidden md:block" src={img} alt="" />
        </div>
        <div>
          <footer className="footer p-10  text-gray-300 rounded">
            <nav className="grid grid-flow-col gap-4">
              <Link to="/" className="link link-hover">Home</Link>
              <Link to="/about" className="link link-hover">About</Link>
              <Link to="/projects" className="link link-hover">Projects</Link>
              <Link className="link link-hover">Contact</Link>
            </nav>
            <nav>
              <div className="grid grid-flow-col gap-4">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/jillur-rahman-tushar"
                  className="text-xl text-gray-400"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/Jillurcf"
                  className="text-xl text-gray-400"
                >
                  <FaGithub></FaGithub>
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </div>
      <aside className="text-center bg-gray-500 py-1">
        <p className="text-gray-300">Copyright © 2023 - All right reserved by Jillur Rahman</p>
      </aside>
    </div>
  );
};

export default Footer;
