import "./App.scss";
import Home from "./Components/Home/Home.jsx";
import Details from "./Components/Card/Details";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Switch>
     
      <Route exact path="/characters/:id" component={Details} />
      <Route exact path="/" component={Home} />
    </Switch>
    <div className="App"></div>
  </BrowserRouter>
  );
}

export default App;
