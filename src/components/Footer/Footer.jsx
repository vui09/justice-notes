import React from 'react';

import './style.scss'

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="top">
					<div className="logo">
						Justice
					</div>
					<div className="menu">
						<span href="/">Главная</span>
						<span href="/">Список</span>
						<span href="/">Друзья</span>
						<span href="/">Контакты</span>
					</div>
				</div>
				<div className="bottom">
					<div className="copyright">
						Terms & conditions
					</div>
					<div className="link">
						<span>Terms & conditions</span>
						<span>Privacy Policy</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;