import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq2.css'

const FAQ2 = (props) => {
  return (
    <div className="faq2faq8 thq-section-padding">
      <div className="faq2-max-width thq-section-max-width">
        <div className="thq-flex-row faq2-container">
          <div className="thq-flex-column">
            <div className="faq2-content">
              <h2 className="faq2-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="faq2-text24">FAQs</span>
                  </Fragment>
                )}
              </h2>
              <p className="faq2-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="faq2-text19">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <button className="faq2-button thq-button-outline">
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="faq2-text15">Contact</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="thq-flex-column">
            <div className="faq2-list-item1">
              <p className="faq2-faq1-question thq-body-large">
                {props.faq1Question ?? (
                  <Fragment>
                    <span className="faq2-text13">
                      How can I purchase tickets for the Montana Summer
                      Festival?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq1Answer ?? (
                  <Fragment>
                    <span className="faq2-text12">
                      Tickets can be purchased online through our website or at
                      the entrance of the festival.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item2">
              <p className="faq2-faq2-question thq-body-large">
                {props.faq2Question ?? (
                  <Fragment>
                    <span className="faq2-text17">
                      Are there volunteering opportunities available at the
                      festival?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq2Answer ?? (
                  <Fragment>
                    <span className="faq2-text20">
                      Yes, we offer volunteering opportunities for those who are
                      interested. You can sign up to volunteer through our
                      website.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item3">
              <p className="faq2-faq3-question thq-body-large">
                {props.faq3Question ?? (
                  <Fragment>
                    <span className="faq2-text22">
                      What kind of performances can I expect at the Montana
                      Summer Festival?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq3Answer ?? (
                  <Fragment>
                    <span className="faq2-text23">
                      The festival features a variety of musical performances,
                      including local bands and artists.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item4">
              <p className="faq2-faq4-question thq-body-large">
                {props.faq4Question ?? (
                  <Fragment>
                    <span className="faq2-text21">
                      Will there be food vendors at the festival?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq4Answer ?? (
                  <Fragment>
                    <span className="faq2-text14">
                      Yes, there will be a selection of local food vendors
                      offering delicious options for attendees.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq2-list-item5">
              <p className="faq2-faq5-question thq-body-large">
                {props.faq5Question ?? (
                  <Fragment>
                    <span className="faq2-text18">
                      Is the Montana Summer Festival family-friendly?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq5Answer ?? (
                  <Fragment>
                    <span className="faq2-text16">
                      Absolutely! The festival is designed to be enjoyed by
                      attendees of all ages.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ2.defaultProps = {
  faq1Answer: undefined,
  faq1Question: undefined,
  faq4Answer: undefined,
  action: undefined,
  faq5Answer: undefined,
  faq2Question: undefined,
  faq5Question: undefined,
  content1: undefined,
  faq2Answer: undefined,
  faq4Question: undefined,
  faq3Question: undefined,
  faq3Answer: undefined,
  heading1: undefined,
}

FAQ2.propTypes = {
  faq1Answer: PropTypes.element,
  faq1Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  action: PropTypes.element,
  faq5Answer: PropTypes.element,
  faq2Question: PropTypes.element,
  faq5Question: PropTypes.element,
  content1: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq4Question: PropTypes.element,
  faq3Question: PropTypes.element,
  faq3Answer: PropTypes.element,
  heading1: PropTypes.element,
}

export default FAQ2
