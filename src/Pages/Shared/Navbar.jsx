import { NavLink } from "react-router-dom";
// import roundimg from "../../assets/Rahman.png";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              background: isActive ? "blue" : "",
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "gray",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              background: isActive ? "blue" : "",
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "gray",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              background: isActive ? "blue" : "",
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "gray",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              background: isActive ? "blue" : "",
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "gray",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="z-40">
    
      <div className="navbar  max-w-screen-xl bg-black z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <p className="hidden md:block">jrtushar@gmail.com</p>
            {/* <img className="w-[50px] hidden md:block" src={roundimg} alt="" /> */}
          </a>
          <h1 className="font-bold hidden md:block">+8801643989705</h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {/* <div className="navbar-end">
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/jillur-rahman-tushar" className="md:mr-4 text-xl text-blue-600"><FaLinkedin></FaLinkedin></a>
          <a target="_blank" rel="noopener" href="https://github.com/Jillurcf" className="md:mr-12 text-xl text-blue-600"><FaGithub></FaGithub></a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
