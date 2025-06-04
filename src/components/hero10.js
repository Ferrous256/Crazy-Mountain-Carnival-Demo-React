import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero10.css'

const Hero10 = (props) => {
  return (
    <div className="hero10-container">
      <div className="hero10-column thq-section-padding">
        <div className="hero10-content">
          <h1 className="thq-heading-1 hero10-heading1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero10-text3">
                  Welcome to the Montana Summer Festival!
                </span>
              </Fragment>
            )}
          </h1>
          <p className="thq-body-large hero10-content1">
            {props.content1 ?? (
              <Fragment>
                <span className="hero10-text1">
                  Join us for a summer celebration filled with music, food, and
                  fun in the heart of Montana. Get ready for an unforgettable
                  experience!
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero10-actions">
            <button className="hero10-button thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero10-text2">Buy Tickets</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero10-image1"
      />
    </div>
  )
}

Hero10.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1529928226551-5a35bfca43ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NjQ3MHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  action2: undefined,
  image1Alt: 'Montana Summer Festival Image',
  heading1: undefined,
}

Hero10.propTypes = {
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero10
