const defaultState = [
		{
			text: 'Выбрать хостинг для сайта',
			listItem: true,
			reminder: false,
			important: false,
			id: Math.random().toString(36).substr(2, 9)
		},
		{
			text: 'Записаться к стоматологу',
			listItem: false,
			reminder: true,
			important: false,
			id: Math.random().toString(36).substr(2, 9)
		},
		{
			text: 'Записаться на курсы по Английскому',
			listItem: false,
			reminder: false,
			important: true,
			id: Math.random().toString(36).substr(2, 9)
		},
		{
			text: 'Записаться на курсы по Китайскому',
			listItem: false,
			reminder: false,
			important: true,
			id: Math.random().toString(36).substr(2, 9)
		},
		{
			text: 'Выучить редакс',
			listItem: true,
			reminder: false,
			important: false,
			id: Math.random().toString(36).substr(2, 9)
		},
	]


export const listReducer = (state = defaultState, action) => {
	// console.log('===>action', action);
	switch (action.type) {
		case "ADD_LIST":
			return [...state, action.payload] // [state.filter(el => el.id !== action.payload.id]
		case "REMOVE_LIST":
			//console.log('===>action', action);
			return state.filter(el => el.id !== action.payload)
		case "FILTERED_LIST":
			// console.log('===>action', action);
			// return state.filter(val => {return val.text.toLowerCase().includes(value.toLowerCase())})
		default:
			return state
	}
}