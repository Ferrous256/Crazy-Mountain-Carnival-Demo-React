import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery41.css'

const Gallery41 = (props) => {
  return (
    <div className="gallery41-gallery3 thq-section-padding">
      <div className="gallery41-max-width thq-section-max-width">
        <div className="gallery41-section-title">
          <h2 className="gallery41-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery41-text4">Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery41-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery41-text3">
                  Experience the vibrant atmosphere of the Montana Summer
                  Festival through our gallery showcasing music performances,
                  delicious food stalls, and exciting games and rides.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery41-container1">
          <div className="gallery41-content">
            <div className="gallery41-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery41-image1 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery41-container3">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery41-image2 thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery41-image3 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery41.defaultProps = {
  content1: undefined,
  image2Alt: 'Delicious Food Stalls',
  image1Src:
    'https://images.unsplash.com/photo-1531686071181-3fa95c9950a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDIyMXw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  image3Alt: 'Fun Games and Rides',
  image2Src:
    'https://images.unsplash.com/photo-1522022037-b57fa3d6bb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDIyMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1432251407527-504a6b4174a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDIyMXw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Music Performance at Sunset',
}

Gallery41.propTypes = {
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Gallery41
