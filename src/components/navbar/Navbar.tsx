import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
function Navbar() {
  return (
    <nav className="bg-black/30 backdrop-blur(20px)">
      <div className="container flex justify-between items-center py-12 text-white">
        <div className="logo flex items-center justify-center gap-4">
          <div className="logoImg w-32">
            <img className="w-full" src="./planpro.png" alt="logo" />
          </div>
        </div>
        <div className=" flex links ">
          <ul className="flex items-center gap-8">
            <li>
              <Link to={"/"}>Main</Link>
            </li>
            <li>
              <Link to={"/"}>Done</Link>
            </li>
            <li>
              <Link to={"/"}>Delete</Link>
            </li>
          </ul>
        </div>

        <div className="navBtns">
          <button className="themeBtn">
            <FaMoon size={24} />
          </button>
          <button className="hamburger">
            <IoIosList size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
