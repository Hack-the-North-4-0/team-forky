import React from "react";
import { History } from "history";
import { useHistory } from "react-router-dom";
import Button from "../Common/Button";

const Region = () => {
    const history: History = useHistory();
    const start = (): void => history.push('EmploymentStatus');
    return (
        <div className="govuk-form-group">
            <fieldset className="govuk-fieldset govuk-!-margin-bottom-4">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
                    <h1 className="govuk-fieldset__heading">
                        Where do you live?
            </h1>
                </legend>
                <div className="govuk-radios">
                    <div className="govuk-radios__item">
                        <input className="govuk-radios__input" id="where-do-you-live" name="where-do-you-live" type="radio" defaultValue="england" />
                        <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live">
                            England
              </label>
                    </div>
                    <div className="govuk-radios__item">
                        <input className="govuk-radios__input" id="where-do-you-live-2" name="where-do-you-live" type="radio" defaultValue="scotland" />
                        <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-2">
                            Scotland
              </label>
                    </div>
                    <div className="govuk-radios__item">
                        <input className="govuk-radios__input" id="where-do-you-live-3" name="where-do-you-live" type="radio" defaultValue="wales" />
                        <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-3">
                            Wales
              </label>
                    </div>
                    <div className="govuk-radios__item">
                        <input className="govuk-radios__input" id="where-do-you-live-4" name="where-do-you-live" type="radio" defaultValue="northern-ireland" />
                        <label className="govuk-label govuk-radios__label" htmlFor="where-do-you-live-4">
                            Northern Ireland
              </label>
                    </div>
                </div>
            </fieldset>
            <Button text="Next" onClick={start} arrow={false} />
        </div>
    )
};

export default Region;
