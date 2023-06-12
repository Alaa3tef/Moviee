// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppComponent from './Pages/AppComponent';
// import AppFunctionComponent from './Pages/AppFunctionComponent';
import ToDoForm from './Pages/ToDoForm';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoginForm from './Pages/LoginForm';
import RegisterForm from './Pages/RegisterForm';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Components/Navbar.js';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import Favourite from './Pages/Favourite';


function App() {
  return (
    // <>
    //   {/* <AppComponent></AppComponent> */}
    //   {/* ***Login And Register*** */}
    //   {/* <AppFunctionComponent></AppFunctionComponent> */}

    //   {/* <ToDoForm></ToDoForm> */}
    // </>

    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Switch> 
              <Route   path={"/"} exact component={AppComponent} />
              <Route   path={"/signin"} exact component={LoginForm}   /> 
              <Route   path={"/signup"} exact component={RegisterForm}   /> 
              <Route   path={"/todolist"} exact component={ToDoForm}   /> 
              <Route   path={"/movies"} exact component={Movies}   /> 
              <Route   path={"/movies/:id"} exact component={MovieDetails}   /> 
              <Route   path={"/favorites"} exact component={Favourite}   /> 
              <Route   path={"*"} exact component={PageNotFound}   /> 
            </Switch>
        </BrowserRouter>
    </div>

  );
}

export default App;
