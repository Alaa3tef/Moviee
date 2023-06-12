import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Navbar() {
    const counter=useSelector((state) => state.counter)


    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <span className="navbar-brand">Movies</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">SignUp</Link>
                        </li>
                        <li className="nav-item dropdown">
                           <Link to="/todolist" className="nav-link">ToDo App</Link>
                        </li>
                        <li className="nav-item dropdown">
                           <Link to="/movies" className="nav-link">Movies</Link>
                        </li>
                        <li className="nav-item dropdown">
                           <Link to="/favorites" className="nav-link">
                                Favorites 
                                <span style={counter===0?{visibility:"hidden"}:{visibility:"visible"}} className="ms-1 badge rounded-pill text-bg-danger">{counter}</span>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;