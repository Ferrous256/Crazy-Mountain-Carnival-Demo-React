import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq3.css'

const FAQ3 = (props) => {
  return (
    <div className="faq3faq9 thq-section-padding">
      <div className="faq3-max-width thq-section-max-width">
        <div className="faq3-section-title thq-flex-column">
          <h2 className="faq3-text10 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="faq3-text13">Frequently Asked Questions</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-flex-column">
          <div className="faq3-row1">
            <div className="faq3-container1">
              <p className="faq3-faq3-question1 thq-body-large">
                {props.faq3Question ?? (
                  <Fragment>
                    <span className="faq3-text18">Are dogs allowed?</span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="faq3-container2">
              <span className="faq3-faq3-answer1 thq-body-small">
                {props.faq3Answer1 ?? (
                  <Fragment>
                    <span className="faq3-text15">No. Sorry!</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-divider-horizontal"></div>
          <div className="faq3-row2">
            <div className="faq3-container3">
              <p className="faq3-faq3-question2 thq-body-large">
                {props.faq3Question6 ?? (
                  <Fragment>
                    <span className="faq3-text19">
                      Will there be bathrooms?
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="faq3-container4">
              <span className="faq3-faq3-answer2 thq-body-small">
                {props.faq3Answer15 ?? (
                  <Fragment>
                    <span className="faq3-text17">
                      Yes! There will be fully stocked porta potties available
                      in convenient locations.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-divider-horizontal"></div>
          <div className="faq3-row3">
            <div className="faq3-container5">
              <p className="faq3-faq3-question3 thq-body-large">
                {props.faq3Question5 ?? (
                  <Fragment>
                    <span className="faq3-text22">
                      Does it get cold at night?
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="faq3-container6">
              <span className="faq3-faq3-answer3 thq-body-small">
                {props.faq3Answer14 ?? (
                  <Fragment>
                    <span className="faq3-text20">
                      Yes! Bring warm clothes for night time. It gets chilly!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-divider-horizontal"></div>
          <div className="faq3-row4">
            <div className="faq3-container7">
              <p className="faq3-faq3-question4 thq-body-large">
                {props.faq3Question51 ?? (
                  <Fragment>
                    <span className="faq3-text23">Are kids allowed?</span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="faq3-container8">
              <span className="faq3-faq3-answer4 thq-body-small">
                {props.faq3Answer141 ?? (
                  <Fragment>
                    <span className="faq3-text14">
                      No. This is a +21 event.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-divider-horizontal"></div>
        </div>
        <div className="thq-flex-column">
          <div className="faq3-content3">
            <h2 className="thq-heading-2 faq3-text11">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq3-text16">Still have a question?</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large faq3-text12">
              {props.content2 ?? (
                <Fragment>
                  <span className="faq3-text21">
                    {' '}
                    info@crazymoutaincarnival.com
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ3.defaultProps = {
  heading1: undefined,
  faq3Answer141: undefined,
  faq3Answer1: undefined,
  heading2: undefined,
  faq3Answer15: undefined,
  faq3Question: undefined,
  faq3Question6: undefined,
  faq3Answer14: undefined,
  content2: undefined,
  faq3Question5: undefined,
  faq3Question51: undefined,
}

FAQ3.propTypes = {
  heading1: PropTypes.element,
  faq3Answer141: PropTypes.element,
  faq3Answer1: PropTypes.element,
  heading2: PropTypes.element,
  faq3Answer15: PropTypes.element,
  faq3Question: PropTypes.element,
  faq3Question6: PropTypes.element,
  faq3Answer14: PropTypes.element,
  content2: PropTypes.element,
  faq3Question5: PropTypes.element,
  faq3Question51: PropTypes.element,
}

export default FAQ3
