import Movie from "../components/movie";
import { useEffect, useState } from "react";
import React from "react";
import styles from "./Home.module.css";

function Home(){
    const [loading , setLoading] = useState(true);
    const [movies , setMovies] = useState([]);
    const getMoveis = async () => {
      const json = await (
        await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMoveis();
    } , []);
    return (
      <div className={styles.container}>
        {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
        ) : (
          <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  coverImg={movie.medium_cover_image} 
                  title={movie.title_long}
                  summary={movie.summary}
                  genres ={movie.genres}
            />
          ))}
          </div>
        )}  
      </div>
    )
}

export default Home;