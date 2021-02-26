const initalState={movies:{},screen:{}}


const detailReducer = (state=initalState,action)=>{
	switch (action.type) {
		case "GET_DETAIL":
			return{
				...state,
				movies:action.payload.movies,
				screen:action.payload.screen,
			}	
		
		default:
			return{...state}
	}
}

export default detailReducer;