import React from "react";
import {History} from "history"
import Button from "../Common/Button"
import {useHistory} from "react-router-dom"

function BankDetails() {
    const history: History = useHistory();
    const start = (): void => history.push('Household');
    return (
        <div>
            <h1 className="govuk-heading-xl">Bank or building society account details</h1>
            <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="name-on-the-account">
                    Name on the account
                </label>
                <input className="govuk-input" id="name-on-the-account" name="name-on-the-account" type="text" spellCheck="false"/>
            </div>
            <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="sort-code">
                    Sort code
                </label>
                <span id="sort-code-hint" className="govuk-hint">
                    Must be 6 digits long
                </span>
                <input className="govuk-input govuk-input--width-5" id="sort-code" name="sort-code" type="text"
                       aria-describedby="sort-code-hint" pattern="[0-9]*" inputMode="numeric" spellCheck="false"/>
            </div>
            <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="account-number">
                    Account number
                </label>
                <span id="account-number-hint" className="govuk-hint">
                    Must be between 6 and 8 digits long
                  </span>
                <input className="govuk-input govuk-input--width-10" id="account-number" name="account-number" type="text"
                       aria-describedby="account-number-hint" pattern="[0-9]*" inputMode="numeric" spellCheck="false"/>
            </div>
            <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="roll-number">
                    Building society roll number (if you have one)
                </label>
                <span id="roll-number-hint" className="govuk-hint">
                    You can find it on your card, statement or passbook
                </span>
                <input className="govuk-input govuk-input--width-10" id="roll-number" name="roll-number" type="text"
                       aria-describedby="roll-number-hint" spellCheck="false"/>
            </div>
            <div>
                <Button text="Continue" onClick={start} arrow={false}/>
            </div>
        </div>
    );
}

export default BankDetails;
