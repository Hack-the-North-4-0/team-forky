import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./Home/Home";
import "./App.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"
import {Region} from "./Questions/Region"
import {EmploymentStatus} from "./Questions/EmploymentStatus"
import {Household} from "./Questions/Household"
import {Incoming} from "./Questions/Incoming"
import {Outgoing} from "./Questions/Outgoing"

const App = () => {
  return (
    <div>
      <Header/>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home}/>
              <Route path="/Region" component={Region}/>
              <Route path="/EmploymentStatus" component={EmploymentStatus}/>
              <Route path="/Household" component={Household}/>
              <Route path="/Incoming" component={Incoming}/>
              <Route path="/Outgoing" component={Outgoing}/>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
};

export default App
