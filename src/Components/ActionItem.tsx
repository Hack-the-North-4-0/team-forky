import React, { FC } from "react"

export interface ActionItem {
  label: String
  children: String
}

const ActionItem: FC<ActionItem> = (props: ActionItem) => {
  return (
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
        {props.label}
      </label>
      <span
        id="nationality-item-hint"
        className="govuk-hint govuk-checkboxes__hint"
      >
        {props.children}
      </span>
    </div>
  )
}

export default ActionItem
