import React,{useState} from 'react';
import {searchMovie} from '../actions/moviesActions';
import {useDispatch}  from 'react-redux';
const Search = () => {

	const dispatch = useDispatch();
	const [textInput, setTextInput]= useState('');
	
	const inputHandler =(e)=>{
		setTextInput(e.target.value);
	}

	const submitSearch = (e)=>{
		e.preventDefault();
		dispatch(searchMovie(textInput));
		setTextInput("");
	}

	




	return (


		<div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          			 <ul className="navbar-nav ml-auto">

               

                 <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Movie Name" aria-label="movie"  value={textInput} onChange={inputHandler}/>
    <button class="btn btn-outline-dark my-2 my-sm-0"onClick={submitSearch} type="submit">Search</button>
  </form>
                </ul>
            </div>
			     
                </div>
	)
}

export default Search