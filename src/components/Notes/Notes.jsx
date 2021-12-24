import React, {useState} from 'react';

import './style.scss'

const Notes = () => {

	const [value, setValue] = useState('')
	const [error, setError] = useState(false)
	const [btnList, setBtnList] = useState(false)
	const [btnReminder, setBtnReminder] = useState(true)
	const [btnImportant, setBtnImportant] = useState(false)
	const [list, setList] = useState([
		{
			text: 'Выбрать хостинг для сайта',
			list: true,
			reminder: false,
			important: false,
			id: Math.random().toString(36).substr(2, 9)
		},
		{
			text: 'Записаться к стоматологу',
			list: false,
			reminder: true,
			important: false,
			id: Math.random().toString(36).substr(2, 9)
		},
		{
			text: 'Записаться на курсы по Английскому',
			list: false,
			reminder: false,
			important: true,
			id: Math.random().toString(36).substr(2, 9)
		},
	])

	function addItem(){
		if(value.length > 0 ){
			setList([...list, {
				text: value,
				id: Math.random().toString(36).substr(2, 9)
			}])
			setValue('')
		} else{
			setError(true)
		}
		if(btnList){
			//const result = list.filter(item => item.list);
			setList([...list, {
				text: value,
				setList: true,
				setReminder: false,
				setImportant: false,
				id: Math.random().toString(36).substr(2, 9)
			}])
			console.log('===>list', list);
		}
		if(btnReminder){
			//const result = list.filter(item => item.list);
			setList([...list, {
				text: value,
				setList: false,
				setReminder: true,
				setImportant: false,
				id: Math.random().toString(36).substr(2, 9)
			}])
			console.log('===>list', list);
		}
		if(btnImportant){
			//const result = list.filter(item => item.list);
			setList([...list, {
				text: value,
				setList: false,
				setReminder: true,
				setImportant: false,
				id: Math.random().toString(36).substr(2, 9)
			}])
			console.log('===>list', list);
		}
	}

	function activeList(){
		setBtnList(true)
		setBtnReminder(false)
		setBtnImportant(false)
	}
	function activeReminder(){
		setBtnList(false)
		setBtnReminder(true)
		setBtnImportant(false)
	}
	function activeImportant(){
		setBtnList(false)
		setBtnReminder(false)
		setBtnImportant(true)
	}

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
					</div>
				</div>
				<div className="list">
					{list.map((item) => {
						return <div className="item" id={item.id} key={item.id}>{item.text}</div>
					})}
				</div>
			</div>
		</div>
	);
};

export default Notes;