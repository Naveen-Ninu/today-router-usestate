import React from "react";

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Slider from "./components/Slider";
import Faq from "./components/Faq";
import { Route, Switch } from "react-router-dom";
import Dynamicpage from "./views/Dynamicpage";
import Header from "./components/Header";

function Routing() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/hero" component={Hero} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/slider" component={Slider} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/tab" component={Dynamicpage} />
      </Switch>
    </div>
  );
}

export default Routing;
