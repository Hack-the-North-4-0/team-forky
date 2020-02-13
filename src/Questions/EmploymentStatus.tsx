import React from "react";

function EmploymentStatus() {
    return (

        <div className="govuk-form-group">
            <fieldset className="govuk-fieldset" aria-describedby="waste-hint">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
                    <h1 className="govuk-fieldset__heading">
                        What is your employment status?
              </h1>
                </legend>
                <span id="waste-hint" className="govuk-hint">
                    Select all that apply.
            </span>
                <div className="govuk-checkboxes">
                    <div className="govuk-checkboxes__item">
                        <input className="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" defaultValue="carcasses" />
                        <label className="govuk-label govuk-checkboxes__label" htmlFor="waste">
                            Employed
                </label>
                    </div>
                    <div className="govuk-checkboxes__item">
                        <input className="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" defaultValue="mines" />
                        <label className="govuk-label govuk-checkboxes__label" htmlFor="waste-2">
                            Self-employed
                </label>
                    </div>
                    <div className="govuk-checkboxes__item">
                        <input className="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" defaultValue="farm" />
                        <label className="govuk-label govuk-checkboxes__label" htmlFor="waste-3">
                            Not working
                </label>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default EmploymentStatus;
