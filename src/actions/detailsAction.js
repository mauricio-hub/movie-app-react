import React from 'react';
import axios from 'axios';
import {getDetailsUrl,getMovieImagesUrl} from '../api';

export const loadDetail = (id) => async (dispatch)=> {
	//cargando los datos de una pelicula especifica
	const detailData = await axios.get(getDetailsUrl(id));	
	const getImagesData = await axios.get(getMovieImagesUrl(id));
	dispatch({
		type:"GET_DETAIL",
		payload:{
			movies:detailData.data,
			screen: getImagesData.data,
		}
	})
}

