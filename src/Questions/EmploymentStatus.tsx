import React from "react";
import { History } from "history"
import Button from "../Common/Button"
import { useHistory } from "react-router-dom"

function EmploymentStatus() {
    const history: History = useHistory();
    const start = (): void => history.push('Household');
    return (

        <div className="govuk-form-group">
            <fieldset className="govuk-fieldset" aria-describedby="employment-hint">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
                    <h1 className="govuk-fieldset__heading">
                        What is your employment status?
              </h1>
                </legend>
                <span id="employment-hint" className="govuk-hint">
                    Select all that apply.
            </span>
                <div className="govuk-checkboxes">
                    <div className="govuk-checkboxes__item">
                        <input className="govuk-checkboxes__input" id="employment" name="employment" type="checkbox" defaultValue="employed" />
                        <label className="govuk-label govuk-checkboxes__label" htmlFor="employment">
                            Employed
                </label>
                    </div>
                    <div className="govuk-checkboxes__item">
                        <input className="govuk-checkboxes__input" id="employment-2" name="employment" type="checkbox" defaultValue="self-employed" />
                        <label className="govuk-label govuk-checkboxes__label" htmlFor="employment-2">
                            Self-employed
                </label>
                    </div>
                    <div className="govuk-checkboxes__item">
                        <input className="govuk-checkboxes__input" id="employment-3" name="employment" type="checkbox" defaultValue="unemployed" />
                        <label className="govuk-label govuk-checkboxes__label" htmlFor="employment-3">
                            Not currently working
                </label>
                    </div>
                </div>
            </fieldset>
            <hr />
            <div>
                <Button text="Next" onClick={start} arrow={false} />
            </div>
        </div>
    );
}

export default EmploymentStatus;
