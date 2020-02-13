import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./Home/Home";
import "./App.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
        <Header></Header>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/Questionnaire/:questionId" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
        <Footer/>
    </div>
  )
};

export default App
