import React, { FC } from "react"
import Trend from "../Projection/Trend"
import ActionList from "../Components/ActionList"
import Expenses from "../Projection/Expenses"

const Analysis: FC = () => {
  return (
    <div className="govuk-tabs" data-module="govuk-tabs">
      <h2 className="govuk-tabs__title">Contents</h2>
      <ul className="govuk-tabs__list">
        <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
          <a className="govuk-tabs__tab" href="#expenses">
            Expenses
          </a>
        </li>
        <li className="govuk-tabs__list-item govuk-tabs__list-item">
          <a className="govuk-tabs__tab" href="#projection">
            Projection
          </a>
        </li>
        <li className="govuk-tabs__list-item">
          <a className="govuk-tabs__tab" href="#actionList">
            Action List
          </a>
        </li>
      </ul>
      <section className="govuk-tabs__panel" id="expenses">
        <h2 className="govuk-heading-l">Expenses</h2>
        <Expenses />
      </section>
      <section
        className="govuk-tabs__panel govuk-tabs__panel--hidden"
        id="projection"
      >
        <h2 className="govuk-heading-l">Projection</h2>
        <Trend />
      </section>
      <section
        className="govuk-tabs__panel govuk-tabs__panel--hidden"
        id="actionList"
      >
        <h2 className="govuk-heading-l">Action List</h2>
        <ActionList isTodoComplete={false} toggleTodo={() => {}} />
      </section>
    </div>
  )
}

export default Analysis
