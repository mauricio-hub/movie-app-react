import React from 'react';
import {useDispatch} from 'react-redux';
import { loadDetail } from '../actions/detailsAction.js';
const Movies = ({title,release,overview,image,id,vote_average}) => {

	const dispatch = useDispatch();
	const IMG_API = "https://image.tmdb.org/t/p/w1280";

	

	return (
		<div className="movie" >

				<img src={IMG_API+image} alt={title}/>

			<div className="movie-info">
				
				<h3>{title}</h3>
				
				<span>vote:{vote_average}</span>
				
			</div>
			
			<div className="movie-overview">
				<h3>Overview</h3>
				<p>{overview}</p>
			</div>

		</div>

		
		
	)
}




export default Movies

