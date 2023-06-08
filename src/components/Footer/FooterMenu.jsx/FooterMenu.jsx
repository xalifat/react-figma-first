import React from 'react';
import style from '../Footer.module.css'


const FooterMenu = () => {
	return (
		<div>
			 <ul className={style.footermenu}>
        <li className>Партнерам</li>
        <li className>Разработчикам</li>
        <li className>Вакансии</li>
      </ul>
		</div>
	);
}

export default FooterMenu;
