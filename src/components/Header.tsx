import React from "react"
import Logo from "govuk-frontend/govuk/assets/images/govuk-logotype-crown.png"

const Header = () => {
    return (
        <header className="govuk-header " role="banner" data-module="govuk-header">
            <div className="govuk-header__container govuk-width-container">
                <div className="govuk-header__logo">
                    <a href="#" className="govuk-header__link govuk-header__link--homepage">
                        <span className="govuk-header__logotype">
                            <img alt="logo" src={Logo} className="govuk-header__logotype-crown-fallback-image"
                                 width="36"
                                 height="32"></img>
                            <span className="govuk-header__logotype-text">
                                GOV.UK
                            </span>
            </span>
                    </a>
                </div>
                <div className="govuk-header__content">
                    <a href="#" className="govuk-header__link govuk-header__link--service-name">
                        Financial Wellbeing Community
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
