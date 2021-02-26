const key = "32b0779ad5ae97bd830e349200efdffd";
const base_url = "https://api.themoviedb.org/3/";

/*
upcoming
https://api.themoviedb.org/3/movie/upcoming?api_key=32b0779ad5ae97bd830e349200efdffd&language=en-US&page=1
popular 
https://api.themoviedb.org/3/movie/popular?api_key=32b0779ad5ae97bd830e349200efdffd&language=en-US&page=1
top_rated
https://api.themoviedb.org/3/movie/top_rated?api_key=32b0779ad5ae97bd830e349200efdffd&language=en-US&page=1
movie Get Details
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//get images
https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
//search
https://api.themoviedb.org/3/search/movie?&api_key=32b0779ad5ae97bd830e349200efdffd&query=

https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/577922/videos?api_key=32b0779ad5ae97bd830e349200efdffd&language=en-US


*/

const upcoming = "movie/upcoming?api_key=";
const popular = "movie/popular?api_key="
const top = "movie/top_rated?api_key="
//proximos extrenos
export const upcomingMoviesUrl =()=>`${base_url}${upcoming}${key}&language=en-US&page=1`
//pelicaulas populares
export const popularMovieUrl = ()=>`${base_url}${popular}${key}&language=en-US&page=1`
//peliculae top
export const topMovieUrl = ()=>`${base_url}${top}${key}&language=en-US&page=1`
//detalles especificos de peliculas
export const getDetailsUrl = (movie_id) =>`${base_url}movie/${movie_id}?api_key=${key}&language=en-US&page=1`
//obteniendo imagenes de peliculas
export const getMovieImagesUrl =(movie_id)=> `${base_url}movie/${movie_id}/images?api_key=${key}`
//buacar pelicula
//${base_url}search/movie?&api_key=${key}&query=
export const searchMovieUrl = (movie_name)=>`${base_url}search/movie?&api_key=${key}&query=${movie_name}`



