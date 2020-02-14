import { useHistory } from "react-router-dom"
import { History } from "history"
import React, { FC } from "react"
import Button from "../Common/Button"

const Home: FC = () => {
  const history: History = useHistory()
  const start = (): void => history.push("Region")
  return (
    <div>
      <h1 className="govuk-heading-xl">Financial Wellbeing</h1>
      <p className="govuk-body">Use this service to:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>Determine your financial wellbeing</li>
        <li>Calculate the impact of a life event</li>
      </ul>
      <p className="govuk-body">Takes less than three minutes.</p>
      <Button text="Start now" onClick={start} arrow={true} allowSkip={false} />
    </div>
  )
}

export default Home
