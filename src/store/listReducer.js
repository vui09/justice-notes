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
			console.log('===>111', 111);
			return [...state, action.payload] // [state.filter(el => el.id !== action.payload.id]
		case "REMOVE_LIST":
			return [state.filter(el => el.id !== action.payload.id)]
			// console.log('===>el.id', el.id);
			// console.log('===>action.payload.id', action.payload.id);
		default:
			return state
	}
}