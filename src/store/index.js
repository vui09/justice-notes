import {combineReducers, createStore} from "redux";
import {listReducer} from "./listReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
	list: listReducer
})


export const store = createStore(rootReducer, composeWithDevTools())