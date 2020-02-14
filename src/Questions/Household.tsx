import React from "react"
import { History } from "history"
import Button from "../Common/Button"
import { useHistory } from "react-router-dom"

const Household = () => {
  const history: History = useHistory()
  const bankDetails = (): void => history.push("BankDetails")
  return (
    <>
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset govuk-!-margin-bottom-4">
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
            <h1 className="govuk-fieldset__heading">Where do you live?</h1>
          </legend>
          <div className="govuk-radios">
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="household"
                name="household"
                type="radio"
                defaultValue="I own my own home"
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor="household"
              >
                I own my own home
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="household-2"
                name="household"
                type="radio"
                defaultValue="I have a mortgage"
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor="household-2"
              >
                I have a mortgage
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="household-3"
                name="household"
                type="radio"
                defaultValue="I rent"
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor="household-3"
              >
                I rent
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="household-4"
                name="household"
                type="radio"
                defaultValue="northern-ireland"
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor="household-4"
              >
                I live in social housing
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id="household-4"
                name="household"
                type="radio"
                defaultValue="northern-ireland"
              />
              <label
                className="govuk-label govuk-radios__label"
                htmlFor="household-4"
              >
                I don't have a fixed address
              </label>
            </div>
          </div>
        </fieldset>
        <Button text="Next" onClick={bankDetails} arrow={false} />
      </div>
    </>
  )
}

export default Household
