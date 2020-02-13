import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from "./Home/Home";

const App = () => {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/Questionnaire/:questionId" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
