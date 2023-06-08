import React from 'react';
import Buttons from './Buttons/Buttons';
import Numbers from './Numbers/Numbers';
import style from '../../components/MainContent/mainContent.module.css'
const MainContent = () => {
	return (
		<main className={style.menu}>
			<Numbers />
			<Buttons />
		</main>
	);
}

export default MainContent;
