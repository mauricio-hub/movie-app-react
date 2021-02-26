const initialState = {
	popular : [],
	top : [],
	upcoming : [],
	searched:[],
}

const moviesReducer = (state = initialState,action)=>{
	switch (action.type) {
		case "FETCH_MOVIES":
			return{...state,
				popular:action.payload.popular,
				top:action.payload.top,	
				upcoming:action.payload.upcoming,
			}
		case "FETCH_SEARCHED":
			return{
				...state,
				searched:action.payload.searched,
			}
		case "CLEAR_SEARCHED":
			return{
				...state,
				searched:[],
			}		
		default:
			return{...state}
	}
}

export default moviesReducer;