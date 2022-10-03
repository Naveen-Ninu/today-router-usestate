import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Routing from "./Routing";

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
