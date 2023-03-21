import { useState,useEffect } from "react";
import './App.css';
import search from './search.svg'
import MovieCard from "./MovieCard";

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
// shows popular movies 
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

//for searching
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

function App() {
const [movies,setMovies] = useState([])
const [searchTerm,setSearchTerm] =useState('')

  const searchMovies = async(title) =>{
    const res = await fetch(`${searchURL}&query=${title}`);
    const data = await res.json();
    setMovies(data.results)
  }

useEffect(()=>{
  searchMovies('Avengers')
},[])

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input 
        placeholder="Search for movies" value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <img src={search} alt="search"
        onClick={()=>{searchMovies(searchTerm)}}/>
      </div>
      {
        movies?.length>0 ? ( 
        <div className="container">
          {
            movies.map((movie)=>(<MovieCard movie={movie}/>))
          }
          
        </div>
        ):(
          <div className="empty">
            <h2>No movies Found!</h2>
          </div>
        )
      }
     
    </div>
  );
}

export default App;
