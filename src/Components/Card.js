import { Link } from 'react-router-dom';
import './Card.css';

function Card(props) {


    return (
        <div className="card mb-3" style={{width: "16rem"}}>
            <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{props.name}</h6>
                 <p className="card-text">
                    <small className="text-muted me-5">{props.date}</small>
                    {/* <button className='btn btn-outline-warning'><i class="fa-solid fa-star"></i></button> */}
                </p>
                <Link to={`/movies/${props.id}`} className="btn btn-primary"> More Details </Link>
            </div>
        </div>
    )
}

export default Card;