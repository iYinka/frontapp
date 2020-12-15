import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Invite from "./Components/Invite";
import Contact from "./Components/Contact";

import "./Components/Layouts/styles.css";


function App() {
  return (
      <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
        <Invite />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        <Contact />
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;
