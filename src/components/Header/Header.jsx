import React from 'react';
import bell from '../../assets/images/icons/Bell.svg'
import user from '../../assets/images/icons/user.svg'
import './style.scss'

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="logo">
					Justice
				</div>
				<div className="navigation">
					<div className="menu">
						<span href="/">Главная</span>
						<span href="/" className="active">Список</span>
						<span href="/">Друзья</span>
						<span href="/">Контакты</span>
					</div>
					<div className="info">
						<div className="btn">Выйти</div>
						<div className="notice">
							<img src={bell} alt="Уведомления"/>
						</div>
						<div className="user">
							<img src={user} alt="Профиль"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;