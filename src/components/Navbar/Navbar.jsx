import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ButtonLang from "../ButtonLang/ButtonLang";
import Sidebar from "./Sidebar";
import { AnimatedHamburgerButton } from "./AnimatedHamburgerButton";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="header__links">
        <Sidebar open={open} toggleMenu={toggleMenu} />
        <div onClick={toggleMenu} className="menu-btn">
          <AnimatedHamburgerButton />
        </div>
        <div>
          <Link className="header__logo">
            <img src="/logo.svg" alt="logo" width={50} height={50} />
          </Link>
        </div>

        <div className="navbar__btn">
          <ButtonLang />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
