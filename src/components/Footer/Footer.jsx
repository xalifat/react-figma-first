import React from "react";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterMenu from "./FooterMenu.jsx/FooterMenu";
import Copyright from "./Copyright/Copyright";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <FooterLogo />
      <FooterMenu />
      <Copyright />
    </div>
  );
};

export default Footer;
