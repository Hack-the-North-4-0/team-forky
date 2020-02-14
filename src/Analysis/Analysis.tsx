import React, {FC, useState, useEffect} from "react"
import Trend from "../Projection/Trend"
import ActionList from "../Components/ActionList"
import Expenses from "../Projection/Expenses"
// @ts-ignore
import {initAll} from "../../node_modules/govuk-frontend"

const Analysis: FC = () => {
    useEffect(initAll, [])
    const [isComplete, setIsComplete] = useState(0)

    const toggle = () => setIsComplete(isComplete + 1)

    return (
        <div className="govuk-tabs" data-module="govuk-tabs">
            <h2 className="govuk-tabs__title">Contents</h2>
            <ul className="govuk-tabs__list">
                <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
                    <a className="govuk-tabs__tab" href="#expenses">
                        Expenses
                    </a>
                </li>
                <li className="govuk-tabs__list-item">
                    <a className="govuk-tabs__tab" href="#projection">
                        Projection
                    </a>
                </li>
            </ul>
            <section className="govuk-tabs__panel" id="expenses">
                <h2 className="govuk-heading-l">Expenses</h2>
                <Expenses/>
            </section>
            <section
                className="govuk-tabs__panel govuk-tabs__panel--hidden"
                id="projection"
            >
                <h2 className="govuk-heading-l">Projection</h2>
                <Trend count={isComplete}/>
                <ActionList isTodoComplete={false} toggleTodo={toggle}/>
            </section>
        </div>
    )
};

export default Analysis
