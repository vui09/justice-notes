import React, {useState} from 'react';

import searchIcon from '../../assets/images/icons/close.png'

import './style.scss'
import {useDispatch, useSelector} from "react-redux";

const Modal = ({setModal}) => {

	const dispatch = useDispatch()

	const [value, setValue] = useState('');

	const list = useSelector(store => store?.list)

	const filteredValue = list.filter(val => {
		return val.text.toLowerCase().includes(value.toLowerCase())
	})

	//const filteredValue = dispatch({type:"FILTERED_LIST", payload: )

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