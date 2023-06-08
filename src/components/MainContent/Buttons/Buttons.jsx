import React from 'react';
import style from '../mainContent.module.css'
const Buttons = () => {
	return (
		<div className={style.button}>
			<button className={style.blue}>Увеличить</button>
			<button className={style.orange}>Уменьшить</button>
			<button className={style.gray}>Сбросить</button>

		</div>
	);
}

export default Buttons;
