import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { XSquare, List } from "@phosphor-icons/react";
import ButtonLang from "../ButtonLang/ButtonLang";
import Sidebar from "./Sidebar";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="header">
        <div className="header__links">
          <Sidebar open={open} toggleMenu={toggleMenu} />
          <button onClick={toggleMenu} className="menu-btn">
            {open ? <XSquare size={28} /> : <List size={28} />}
          </button>
          <div>
            <Link className="header__logo">IT</Link>
          </div>

          <div className="navbar__btn">
            <ButtonLang />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
