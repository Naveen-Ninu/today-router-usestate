import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Team from "./components/Team";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Navigation} />
        <Route exact path="/hero" component={Hero} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </div>
  );
}

export default App;
