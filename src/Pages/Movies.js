import { useEffect, useState } from "react";
import axios from 'axios';
import Card from '../Components/Card';
import { useSelector, useDispatch } from "react-redux";
import { addMovieToFavorites } from "../Store/Actions/addMovieToFavorites";
import { incrementCounter } from "../Store/Actions/addMovieToFavorites";

function Movies() {
    const [movies, setMovies] = useState([]);

    const [pageNumber, setPageNumber] = useState(1);
    const [queryName, setQueryName] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "queryName") {
            console.log(e.target.value)
            setQueryName(e.target.value)
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1215fe9cab37ad33be4cfdfe3d049422&query=${queryName}`)
                .then((res) => setMovies(res.data.results))
                .catch((err) => console.log(err))
        }
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1215fe9cab37ad33be4cfdfe3d049422&page=${pageNumber}`)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    }, [pageNumber])

    const favList = useSelector((state) => state.favorites)
    // const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch() // to call the action

    const HandleAdd = (e, movie, movieId) => {
        if (!favList.some(movie => movie.id === movieId)) {
            dispatch(addMovieToFavorites(movie));
            dispatch(incrementCounter());
        }
    }


    return (
        <div className="container mt-5 d-flex flex-wrap justify-content-between">
            <form className="d-flex col-12 mb-3">
                <input onChange={(e) => handleChange(e)} className="form-control me-2" type="text" placeholder="Search" name="queryName" value={queryName} />
            </form>

            {movies.map((movie, index) => {
                return (
                    <div key={index}>
                        <Card name={movie.title} image={movie.poster_path} id={movie.id} date={movie.release_date} />
                        <button onClick={(e) => HandleAdd(e, movie, movie.id)} style={{ position: "relative", bottom: "116px", left: "60px" }} className={(!favList.some(movieObj => movieObj.id === movie.id)) ? "btn btn-outline-warning" : "btn btn-warning text-light"}><i class="fa-solid fa-star"></i></button>
                    </div>
                )
            })}
            <div className="d-flex justify-content-between mt-4 mb-5 w-50 mx-auto">
                <button className="btn btn-primary" onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}><i class="fa-solid fa-angles-left fa-2xl"></i></button>
                <button className="btn btn-primary" onClick={() => setPageNumber(page => 1)} disabled={pageNumber === 1}><i class="fa-solid fa-1"></i></button>
                <button className="btn btn-primary" onClick={() => setPageNumber(page => 2)} disabled={pageNumber === 2}><i class="fa-solid fa-2"></i></button>
                <button className="btn btn-primary" onClick={() => setPageNumber(page => 3)} disabled={pageNumber === 3}><i class="fa-solid fa-3"></i></button>
                <button className="btn btn-primary" onClick={() => setPageNumber(page => 4)} disabled={pageNumber === 4}><i class="fa-solid fa-4"></i></button>
                <button className="btn btn-primary" onClick={() => setPageNumber(page => 5)} disabled={pageNumber === 5}><i class="fa-solid fa-5"></i></button>
                <button className="btn btn-primary" onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 5}><i class="fa-solid fa-angles-right fa-2xl"></i></button>
            </div>
        </div>
    )
}

export default Movies;