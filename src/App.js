import "./App.scss";
import Home from "./Components/Home/Home.jsx";
import Details from "./Components/Card/Details";
import StarshipsHome from "./Components/Starships/StarshipsHome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StarshipDetails from "./Components/Starships/StarshipDetail";
import SpeciesDetails from "./Components/species/SpeciesDetails";
import SpeciesHome from "./Components/species/SpeciesHome";
import FilmDetails from "./Components/films/FilmDetails";
import FilmsHome from "./Components/films/FilmsHome";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/characters/:id" component={Details} />

        <Route exact path="/starships" component={StarshipsHome} />
        <Route exact path="/starships/:id" component={StarshipDetails} />

        <Route exact path="/species" component={SpeciesHome} />
        <Route exact path="/species/:id" component={SpeciesDetails} />
        

        <Route exact path="/films" component={FilmsHome} />
        <Route exact path="/films/:id" component={FilmDetails} />
        
      </Switch>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
