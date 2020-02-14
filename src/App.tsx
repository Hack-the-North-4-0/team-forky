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
import Trend from "./Projection/Trend"
import Result from "./Result/Result"

const App = () => {
    return (
        <div>
            <Header/>
            <div className="App">
                <div className="govuk-width-container">
                    <main className="govuk-main-wrapper " id="main-content" role="main">
                        <div className="govuk-grid-row">
                            <div className="govuk-grid-column-two-thirds">
                                <BrowserRouter>
                                    <Switch>
                                        <Route exact={true} path="/" component={Home}/>
                                        <Route path="/Region" component={Region}/>
                                        <Route path="/EmploymentStatus" component={EmploymentStatus}/>
                                        <Route path="/Household" component={Household}/>
                                        <Route path="/BankDetails" component={BankDetails}/>
                                        <Route path="/Trend" component={Trend}/>
                                        <Route path="/Result" component={Result} />
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
