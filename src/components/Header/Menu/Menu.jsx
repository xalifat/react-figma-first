import React from "react";
import style from "../header.module.css";

const Menu = () => {
  return (
    <div className={style.menu}>
      <ul className="menu-list">
        <li className="menu-item">Главная</li>
        <li className="menu-item">О нас</li>
        <li className="menu-item">Контакты</li>
      </ul>
    </div>
  );
};

export default Menu;
