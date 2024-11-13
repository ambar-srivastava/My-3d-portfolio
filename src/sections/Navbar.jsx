import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onClick = () => {} }) => (
  <ul className=" nav-ul">
    {navLinks.map(({ id, href, name }) => (
      <li key={id} className="nav-li">
        <a href={href} className="nav-li_a" onClick={onClick}>
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#home"
          >
            <img src="/assets/ambar.svg" alt="logo" className=" w-40 md:w-52 lg:w-56" />
          </a>

          <button
            onClick={toggleMenu}
            className="sm:hidden text-neutral-400 hover:text-white focus:outline-none flex"
            aria-label="Menu button toggle"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5 ">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
