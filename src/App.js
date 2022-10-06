import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/hero" component={Hero} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/slider" component={Slider} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </>
  );
}
export default App;
