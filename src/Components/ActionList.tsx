import React, { FC } from "react"
import ActionItem from "./ActionItem"

export interface ActionList {
  isTodoComplete: Boolean
  toggleTodo: () => void
}

const ActionList: FC<ActionList> = (props: ActionList) => {
  return (
    <div className="govuk-form-group">
      <fieldset className="govuk-fieldset" aria-describedby="nationality-hint">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 className="govuk-fieldset__heading">Action lists</h1>
        </legend>
        <span id="nationality-hint" className="govuk-hint">
          <>
            Below are some actionable steps you can take right now that could
            positively impact your financial situation.
          </>
        </span>
        <div className="govuk-checkboxes">
          <ActionItem label="Claim benefits" onClick={props.toggleTodo}>
            <>
            You may be eligible for certain income benefits. There is now just
            one application to claim{" "}
            <a href="https://www.gov.uk/browse/benefits/" target="_BLANK">
              benefits
            </a> for housing benefit, job seekers
              allowance, child tax credits and employment support allowance.
            </>
          </ActionItem>
          <ActionItem
            label="Contact your local authority"
            onClick={props.toggleTodo}
          >
            You may be eligible for certain income benefits. There is now just
            one application to claim benifits for housing benefit, job seekers
            allowance, child tax credits and employment support allowance.
          </ActionItem>
          <ActionItem
            label="Contact your energy supplier"
            onClick={props.toggleTodo}
          >
            You may be able to get extra support with your bills
          </ActionItem>
          <ActionItem
            label="Contact your local authority"
            onClick={props.toggleTodo}
          >
            You may be eligible for council tax reduction. You may also be
            eligble for additional payments to help with rent and other things.
          </ActionItem>
          <ActionItem
            label="Contact United Utilities"
            onClick={props.toggleTodo}
          >
            Reductions may be available on your water bill
          </ActionItem>
          <ActionItem label="Speak to someone" onClick={props.toggleTodo}>
            <>
              Your not alone, there are multiple organizations who can help -{" "}
              <a href="https://www.samaritans.org/" target="_BLANK">
                Samaritans
              </a>{" "}
              whatever your going through a samaritan will be available to help
            </>
          </ActionItem>
        </div>
      </fieldset>
    </div>
  )
}

export default ActionList
