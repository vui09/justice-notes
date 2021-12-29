import React, {useEffect, useState} from 'react';

import searchIcon from '../../assets/images/icons/search.png'

import './style.scss'
import Modal from "../Modal/Modal";
import {useDispatch, useSelector} from "react-redux";

const Notes = () => {

	const list = useSelector(store => store?.list)
	console.log('===>list', list);

	const [value, setValue] = useState('')
	const [error, setError] = useState(false)
	const [btnList, setBtnList] = useState(true)
	const [btnReminder, setBtnReminder] = useState(false)
	const [btnImportant, setBtnImportant] = useState(false)
	const [modal, setModal] = useState(false)
	// const [list, setList] = useState([
	// 	{
	// 		text: 'Выбрать хостинг для сайта',
	// 		listItem: true,
	// 		reminder: false,
	// 		important: false,
	// 		id: Math.random().toString(36).substr(2, 9)
	// 	},
	// 	{
	// 		text: 'Записаться к стоматологу',
	// 		listItem: false,
	// 		reminder: true,
	// 		important: false,
	// 		id: Math.random().toString(36).substr(2, 9)
	// 	},
	// 	{
	// 		text: 'Записаться на курсы по Английскому',
	// 		listItem: false,
	// 		reminder: false,
	// 		important: true,
	// 		id: Math.random().toString(36).substr(2, 9)
	// 	},
	// 	{
	// 		text: 'Записаться на курсы по Китайскому',
	// 		listItem: false,
	// 		reminder: false,
	// 		important: true,
	// 		id: Math.random().toString(36).substr(2, 9)
	// 	},
	// ])

	const [listFiltered, setListFiltered] = useState([])

	const dispatch = useDispatch()

	const addItem = async() =>{
		if(value.length > 0 ){
			if(btnList){

				dispatch({type:"ADD_LIST", payload: {
						text: value,
						listItem: true,
						reminder: false,
						important: false,
						id: Math.random().toString(36).substr(2, 9)
					}})

				setValue('')
				setListFiltered(list.filter(item => item.listItem))
				console.log('===>list', list);
			}
			if(btnReminder) {
				// await setList([...list, {
				// 	text: value,
				// 	listItem: false,
				// 	reminder: true,
				// 	important: false,
				// 	id: Math.random().toString(36).substr(2, 9)
				// }])

				dispatch({type:"ADD_LIST", payload: {
						text: value,
						listItem: false,
						reminder: true,
						important: false,
						id: Math.random().toString(36).substr(2, 9)
					}})
				setValue('')
				setListFiltered(list.filter(item => item.reminder))
			}
			if(btnImportant){
				// await setList([...list, {
				// 	text: value,
				// 	listItem: false,
				// 	reminder: false,
				// 	important: true,
				// 	id: Math.random().toString(36).substr(2, 9)
				// }])
				dispatch({type:"ADD_LIST", payload: {
						text: value,
						listItem: false,
						reminder: false,
						important: true,
						id: Math.random().toString(36).substr(2, 9)
					}})
				setValue('')
				setListFiltered(list.filter(item => item.important))
			}
		} else{
			setError(true)
		}
	}

	const removeItem = () => {
		dispatch({type:"REMOVE_LIST", payload: item.id})
	}

	const activeList = () => {
		setBtnList(true)
		setBtnReminder(false)
		setBtnImportant(false)
		setListFiltered(list.filter(item => item.listItem))
		console.log('===>listFiltered', listFiltered);
	}
	const activeReminder = () => {
		setBtnList(false)
		setBtnReminder(true)
		setBtnImportant(false)
		setListFiltered(list.filter(item => item.reminder))
		console.log('===>listFiltered', listFiltered);
	}
	const activeImportant = () => {
		setBtnList(false)
		setBtnReminder(false)
		setBtnImportant(true)
		setListFiltered(list.filter(item => item.important))
		console.log('===>listFiltered', listFiltered);
	}

	const showModal = () => {
		setModal(true)
	}

	useEffect(() => {
		setListFiltered(list)
	}, [list])

	return (
		<div className="notes">
			<div className="container">
				<div className="top">
					<div className="left">
						<div className={ btnList ? 'btn active' : 'btn' } onClick={activeList}>
							Список
						</div>
						<div className={ btnReminder ? 'btn active' : 'btn' } onClick={activeReminder}>
							Напоминания
						</div>
						<div className={ btnImportant ? 'btn active' : 'btn' } onClick={activeImportant}>
							Важно
						</div>
					</div>
					<div className="right">
						<input type="text"
						       className={ error ? 'borderRed' : '' }
						       placeholder="Введите текст"
						       value={value}
						       onChange={(e)=> {
							       setValue(e.target.value)
							       setError(false)
						       }
						       }
						/>
						<div className="btn" onClick={addItem}>
							Добавить
							<span className="plus">+</span>
						</div>
						<div className="search" onClick={showModal}>
							<img src={searchIcon} alt=""/>
						</div>
					</div>
				</div>
				<div className="list">
					{listFiltered.map((item) => {
						return <div onClick={removeItem} className="item" id={item.id} key={item.id}>{item.text}</div>
					})}
				</div>
			</div>
			{
				modal
				? <Modal
						list={list}
						setModal={setModal}/>
				: null
			}

		</div>
	);
};

export default Notes;