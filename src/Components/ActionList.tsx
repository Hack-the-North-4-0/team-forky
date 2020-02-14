import React, { FC } from "react"

export interface ActionList {
  isTodoComplete: Boolean
  toggleTodo: () => void
}

const ActionList: FC<ActionList> = (props: ActionList) => {
  return (
    <div className="govuk-form-group">
      <fieldset className="govuk-fieldset" aria-describedby="nationality-hint">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 className="govuk-fieldset__heading">What is your nationality?</h1>
        </legend>
        <span id="nationality-hint" className="govuk-hint">
          If you have dual nationality, select all options that are relevant to
          you.
        </span>
        <div className="govuk-checkboxes">
          <div className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id="nationality"
              name="nationality"
              type="checkbox"
              value="british"
              aria-describedby="nationality-item-hint"
            />
            <label
              className="govuk-label govuk-checkboxes__label"
              htmlFor="nationality"
            >
              British
            </label>
            <span
              id="nationality-item-hint"
              className="govuk-hint govuk-checkboxes__hint"
            >
              including English, Scottish, Welsh and Northern Irish
            </span>
          </div>
          <div className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id="nationality-2"
              name="nationality"
              type="checkbox"
              value="irish"
            />
            <label
              className="govuk-label govuk-checkboxes__label"
              htmlFor="nationality-2"
            >
              Irish
            </label>
          </div>
          <div className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id="nationality-3"
              name="nationality"
              type="checkbox"
              value="other"
            />
            <label
              className="govuk-label govuk-checkboxes__label"
              htmlFor="nationality-3"
            >
              Citizen of another country
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default ActionList
