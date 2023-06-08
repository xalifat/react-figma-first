import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import style from '../../components/Header/header.module.css'
import '../../components/App.css'

const Header = () => {
	return (
		<>
		<div className={style.header}>
			<Logo />
			<Menu />
		</div>
		</>
	);
}

export default Header;
