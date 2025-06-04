import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text27">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text36">
                  I had an amazing time at the Montana Festival! The atmosphere
                  was lively, the performances were fantastic, and the food was
                  delicious. Can&apos;t wait to attend again next year!
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Event Attendee
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text32">5 stars</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Michael Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Local Vendor
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        The festival provided a great platform for local vendors
                        like myself to showcase our products. The organizers
                        were very supportive and the crowd was enthusiastic. It
                        was a successful event for my business.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Emily Davis
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Volunteer Coordinator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        Volunteering at the festival was a rewarding experience.
                        The team was well-organized, and I felt appreciated for
                        my contributions. It was heartwarming to see everyone
                        come together to make the event a success.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            John Roberts
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">Musician</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        Performing at the Montana Festival was a highlight of my
                        summer. The audience was energetic, and the sound setup
                        was top-notch. I enjoyed every moment on stage and hope
                        to be back next year.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author1Alt: 'Image of Sarah Johnson',
  author3Name: undefined,
  author4Alt: 'Image of John Roberts',
  review3: undefined,
  author2Name: undefined,
  heading1: undefined,
  author3Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1621225756767-a1f724bada28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NDE5MHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1636041241164-3d20e98d43a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NDE5MHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: undefined,
  author1Name: undefined,
  review1: undefined,
  review2: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NDE5MHw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'Image of Michael Smith',
  review4: undefined,
  author2Position: undefined,
  content1: undefined,
  author1Position: undefined,
  author3Alt: 'Image of Emily Davis',
  author2Src:
    'https://images.unsplash.com/photo-1512646605205-78422b7c7896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NDE5MHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Testimonial17.propTypes = {
  author1Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author4Alt: PropTypes.string,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  heading1: PropTypes.element,
  author3Position: PropTypes.element,
  author4Src: PropTypes.string,
  author4Name: PropTypes.element,
  author1Src: PropTypes.string,
  author4Position: PropTypes.element,
  author1Name: PropTypes.element,
  review1: PropTypes.element,
  review2: PropTypes.element,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  review4: PropTypes.element,
  author2Position: PropTypes.element,
  content1: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial17
