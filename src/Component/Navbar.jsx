import { Download, Github, House, LayoutPanelLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar w-11/12 mx-auto px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0 pr-1 md:pr-4"
          >
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
            className="flex flex-col justify-start gap-4 dropdown-content bg-gray-200 rounded-box z-1 mt-3 w-60 p-3 shadow text-sm"
          >
            <li>
              <NavLink to="/" className="pb-1">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className="pb-1">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className="pb-1">
                Installation
              </NavLink>
            </li>
            <li>
              <Link
                target="blank"
                to="https://github.com/Shaqibul-Neil"
                className="contribute"
              >
                <span>
                  <FaGithub />
                </span>
                <span>Contribute</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold flex gap-1 items-center">
          <span>
            <img
              src={"./logo.png"}
              alt="Appfinity"
              className="lg:w-10 object-cover md:w-8 w-7"
            />
          </span>
          <span className="text-[#9F62F2]">Appfinity</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex space-x-4">
        <ul className="flex items-center gap-4 space-x-4 text-base font-semibold">
          <li>
            <NavLink to="/" className="navlink">
              <span>
                <House size={18} strokeWidth={1.5} />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className="navlink">
              <span>
                <LayoutPanelLeft size={18} strokeWidth={1.5} />
              </span>
              <span> Apps</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className="navlink">
              <span>
                <Download size={18} strokeWidth={1.5} />
              </span>
              <span>Installation</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link
          target="blank"
          to="https://github.com/Shaqibul-Neil"
          className="contribute"
        >
          <span>
            <FaGithub />
          </span>
          <span>Contribute</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
