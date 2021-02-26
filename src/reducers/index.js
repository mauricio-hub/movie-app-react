import {combineReducers} from 'redux';
import moviesReducer from './moviesReducer';
import detailReducer from './detailReducer'

const rootReducer = combineReducers ({
	movies:moviesReducer,
	detail:detailReducer,
})

export default rootReducer;