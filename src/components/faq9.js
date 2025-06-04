import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq9.css'

const FAQ9 = (props) => {
  const [faq1Visibile, setFaq1Visibile] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  return (
    <div className="faq9faq8 thq-section-padding">
      <div className="faq9-max-width thq-section-max-width thq-flex-column">
        <div className="faq9-section-title thq-flex-column">
          <div className="faq9-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="faq9-text17">
                    Frequently Asked Questions
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="faq9-text20">
                    Tickets can be purchased online through our website or at
                    the entrance on the day of the event.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="faq9-list thq-flex-column">
          <div className="faq9-faq1 thq-section-max-width thq-box-shadow">
            <div
              onClick={() => setFaq1Visibile(!faq1Visibile)}
              className="faq9-trigger1"
            >
              <p className="faq9-faq1-question thq-body-large">
                {props.faq1Question ?? (
                  <Fragment>
                    <span className="faq9-text21">
                      How can I purchase tickets for the Montana Summer
                      Festival?
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="faq9-icons-container1">
                {faq1Visibile === false && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon10">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
                {faq1Visibile === true && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon12">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq1Visibile === true && (
              <div className="faq9-container12">
                <span className="thq-body-small">
                  Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis sunt
                  aut deleniti illum non repudiandae voluptatem. Aut praesentium
                  doloribus qui distinctio neque ut unde temporibus. Cum
                  exercitationem eveniet in omnis animi in corporis nulla. Sed
                  tempora excepturi et voluptatem modi et exercitationem
                  voluptate cum illum quisquam 33 quia blanditiis eos minus
                  consequatur.Ut neque quam qui dignissimos voluptates ut
                  voluptate totam aut consequuntur quod. Ut voluptas incidunt ut
                  fuga nostrum ut quaerat enim eum earum tenetur? Est esse harum
                  et Quis officiis et enim amet.Et minima tempore et neque
                  voluptatem eos amet officiis et temporibus Quis. Et suscipit
                  esse id nemo sunt At nihil earum et consequatur fuga aut
                  sapiente voluptate est cupiditate esse non dolor cumque. Ut
                  obcaecati recusandae et beatae quae qui doloremque eligendi
                  sit eaque labore.
                </span>
              </div>
            )}
          </div>
          <div className="faq9-faq2 thq-section-max-width thq-box-shadow">
            <div
              onClick={() => setFaq2Visible(!faq2Visible)}
              className="faq9-trigger2"
            >
              <p className="faq9-faq2-question1 thq-body-large">
                {props.faq2Question ?? (
                  <Fragment>
                    <span className="faq9-text18">
                      Are pets allowed at the festival?
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="faq9-icons-container2">
                {faq2Visible === false && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon14">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
                {faq2Visible === true && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon16">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq2Visible === true && (
              <div className="faq9-container15">
                <span className="thq-body-small">
                  Et minima tempore et neque voluptatem eos amet officiis et
                  temporibus Quis. Et suscipit esse id nemo sunt At nihil earum
                  et consequatur fuga aut sapiente voluptate est cupiditate esse
                  non dolor cumque. Ut obcaecati recusandae et beatae quae qui
                  doloremque eligendi sit eaque labore.
                </span>
              </div>
            )}
          </div>
          <div className="faq9-faq3 thq-section-max-width thq-box-shadow">
            <div
              onClick={() => setFaq3Visible(!faq3Visible)}
              className="faq9-trigger3"
            >
              <p className="faq9-faq2-question2 thq-body-large">
                {props.faq3Question ?? (
                  <Fragment>
                    <span className="faq9-text19">
                      Can I bring my own food and drinks?
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="faq9-icons-container3">
                {faq3Visible === false && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon18">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
                {faq3Visible === true && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon20">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq3Visible === true && (
              <div className="faq9-container18">
                <span className="thq-body-small">
                  A quia temporibus aut ullam assumenda vel eius sapiente ut
                  eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                  nulla quia qui exercitationem alias aut consequuntur nihil et
                  animi voluptas.
                </span>
              </div>
            )}
          </div>
          <div className="faq9-faq4 thq-section-max-width thq-box-shadow">
            <div
              onClick={() => setFaq4Visible(!faq4Visible)}
              className="faq9-trigger4"
            >
              <p className="faq9-faq2-question3 thq-body-large">
                {props.faq4Question ?? (
                  <Fragment>
                    <span className="faq9-text16">
                      Is there parking available at the festival?
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="faq9-icons-container4">
                {faq4Visible === false && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon22">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
                {faq4Visible === true && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq9-icon24">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq4Visible === true && (
              <div className="faq9-container21">
                <span className="thq-body-small">
                  A quia temporibus aut ullam assumenda vel eius sapiente ut
                  eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                  nulla quia qui exercitationem alias aut consequuntur nihil et
                  animi voluptas.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ9.defaultProps = {
  faq4Question: undefined,
  heading1: undefined,
  faq2Question: undefined,
  faq3Question: undefined,
  content1: undefined,
  faq1Question: undefined,
}

FAQ9.propTypes = {
  faq4Question: PropTypes.element,
  heading1: PropTypes.element,
  faq2Question: PropTypes.element,
  faq3Question: PropTypes.element,
  content1: PropTypes.element,
  faq1Question: PropTypes.element,
}

export default FAQ9
