import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home/Home"
import "./App.scss"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Region from "./Questions/Region"
import EmploymentStatus from "./Questions/EmploymentStatus"
import Household from "./Questions/Household"
import BankDetails from "./Questions/BankDetails"
import Result from "./Result/Result"
import Trend from "./Projection/Trend"
import Expenses from "./Projection/Expenses"
import Analysis from "./Analysis/Analysis"

const App = () => {
  return (
    <div>
      <Header />
      <div className="App js-enabled">
        <div className="govuk-width-container">
          <main className="govuk-main-wrapper " id="main-content" role="main">
            <div className="govuk-grid-row">
              <div>
                <BrowserRouter>
                  <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/Region" component={Region} />
                    <Route
                      path="/EmploymentStatus"
                      component={EmploymentStatus}
                    />
                    <Route path="/Household" component={Household} />
                    <Route path="/BankDetails" component={BankDetails} />
                    <Route path="/Result" component={Result} />
                    <Route path="/Trend" component={Trend} />
                    <Route path="/Expenses" component={Expenses} />
                    <Route path="/Analysis" component={Analysis} />
                  </Switch>
                </BrowserRouter>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
