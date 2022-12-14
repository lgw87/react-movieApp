import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [loading , setLoading] = useState(true);
    const [movies , setMovies] = useState([]);   
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json(); 
        setMovies(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line 
    } , [movies]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : ( 
                <div>
                    <img src={movies.large_cover_image} alt={movies.title}/>
                    <h1>{movies.title}</h1>
                </div>
            ) 

            }
        </div>
    )
}

export default Detail;