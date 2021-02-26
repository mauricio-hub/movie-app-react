import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux';
import {loadMovies} from '../actions/moviesActions';
//components
import Movies from '../components/Movies'

const Home = () => {
	 const dispatch = useDispatch();

	  useEffect(() => {
	   dispatch(loadMovies())
	  }, [dispatch])
	  //extraemos el estado de la aplicacion
	
	  //extraemos el estado de la aplicacion
	  const {popular,top,upcoming,searched} = useSelector(state=>state.movies)
	 

const clearSearched=()=>{
dispatch({type:"CLEAR_SEARCHED"})	
}

	 

	return (



		<div>
		

		  {searched.length? (
                  <div >
                        <h2>found movies</h2>
						 <button class="btn btn-outline-danger my-2 my-sm-0 ml-4" onClick={clearSearched} type="submit">
remove found movies</button>                        	
                        <div className="movie-container" >
				{searched.map((movie) =>(
					<Movies   
					id={movie.id} 
					title={movie.title}
					release={movie.release_date}
					overview={movie.overview}
					image={movie.poster_path}

					key= {movie.id}
					 />
					
				))}
			</div>
           
                  </div>
                  ): (
                  ""
                  )}

			
			<h2>Pooular Movies</h2>
			<div className="movie-container">
				
				{popular.map((movie) =>(
					<Movies
					id={movie.id} 
					title={movie.title}
					release={movie.release_date}
					overview={movie.overview}
					image={movie.poster_path}
					key= {movie.id}
					 />
					
				))}
			</div>
			
		</div>
	)
}


export default Home

