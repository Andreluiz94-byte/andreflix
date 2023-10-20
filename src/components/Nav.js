import React, { useEffect } from "react";
import "./Nav.css";


function Nav() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="/img/andreflix-removebg-preview.png"
        alt="logo"
      ></img>
        </div>
  );
}

export default Nav;
