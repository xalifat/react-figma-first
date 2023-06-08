import React from 'react';
import logo from '../../../assets/Group 1.svg'
import style from '../header.module.css'

const Logo = () => {
	return (
		<div className={style.logo}>
			<img src={logo} alt="" />
		</div>
	);
}

export default Logo;
