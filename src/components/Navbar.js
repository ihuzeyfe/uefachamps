import React from "react";
import UefaLogo from "../assets/uefalogo.png";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img className="imglogo" src={UefaLogo} alt="" />
      </div>
      <div className="mainlink">
        <Link className="link" to="/">Anasayfa</Link>
        <Link className="link" to="/about">Hakkında</Link>
        <Link className="link" to="/contact">İletişim</Link>
        <Link className="link" to="/clubs">Kulüpler</Link>
      </div>
    </div>
  );
};
