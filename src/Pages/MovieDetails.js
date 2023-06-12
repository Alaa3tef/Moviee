import { useEffect , useState} from "react";
import axios from "axios"
import { useParams } from 'react-router-dom'

function MovieDetails(){
    const MovieId = useParams()

    const [movie, setMovie] = useState({})


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${MovieId.id}?api_key=1215fe9cab37ad33be4cfdfe3d049422`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err))
    },[MovieId.id])
    


    return(
        <div className="container mt-5">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-5">
                    <img style={{height:"500px"}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                </div>
                <div className="col-6 text-start">
                    <p className="display-6">{movie.title}</p>
                    <p className="fst-italic text-muted">{movie.tagline} {movie.status && <i class=" text-success fa-solid fa-circle-check"></i>}</p>
                    <p>{movie.overview}</p>
                    <p className="text-muted">{movie.release_date}</p>
                    <a className="btn btn-outline-primary" href={movie.homepage} target="_blank" rel="noreferrer">See More</a>
                </div>

            </div>
        </div>
    )

}
export default MovieDetails;