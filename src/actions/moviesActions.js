import axios from 'axios';
import {upcomingMoviesUrl,popularMovieUrl,topMovieUrl,searchMovieUrl} from '../api';


export const loadMovies = () => async(dispatch) =>{
	const upcomingMoviesData = await axios.get(upcomingMoviesUrl()); 
	const popularMovieData = await axios.get(popularMovieUrl());
	const topMovieData = await axios.get(topMovieUrl());
	dispatch({
		type:"FETCH_MOVIES",
		payload:{
			upcoming: upcomingMoviesData.data.results,
			popular:popularMovieData.data.results,
			top:topMovieData.data.results,
		},
	});
};



export const searchMovie =(game_name)=>async(dispatch)=>{
	const searchMovieData = await axios.get(searchMovieUrl(game_name));

	dispatch({
		type:"FETCH_SEARCHED",
		payload:{
			searched:searchMovieData.data.results,
		}
	})
}

