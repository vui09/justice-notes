import React, {useState} from 'react';

import searchIcon from '../../assets/images/icons/close.png'

import './style.scss'

const Modal = ({list, setModal}) => {

	const [value, setValue] = useState('');

	const filteredValue = list.filter(val => {
		return val.text.toLowerCase().includes(value.toLowerCase())
	})

	const closeModal = () => {
		setModal(false)
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="close" onClick={closeModal}>
					<img src={searchIcon} alt=""/>
				</div>
				<input type="text" onChange={(event) => setValue(event.target.value)}/>
				<div className="list">
					{filteredValue.map((item) => {
						return <div className="item" id={item.id} key={item.id}>{item.text}</div>
					})}
				</div>
			</div>
		</div>
	);
};

export default Modal;