import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import menu from "../../assets/icon/menu.svg";
import close from "../../assets/icon/close.svg";
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
            {open ? (
              <img
                src={close}
                alt="close icon"
                className="close-icon"
                height={28}
              />
            ) : (
              <img
                src={menu}
                alt="menu icon"
                className="menu-icon"
                height={28}
              />
            )}
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
