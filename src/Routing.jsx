import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Slider from "./components/Slider";
import Faq from "./components/Faq";

import { Route, Switch } from "react-router-dom";
import Dynamicpage from "./views/Dynamicpage";

function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Navigation} />
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
