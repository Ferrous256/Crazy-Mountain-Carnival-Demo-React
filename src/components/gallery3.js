import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery3.css'

const Gallery3 = (props) => {
  return (
    <div className="gallery3-gallery3 thq-section-padding">
      <div className="gallery3-max-width thq-section-max-width">
        <div className="gallery3-section-title">
          <h2 className="gallery3-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery3-text4">
                  Experience the Magic of Crazy Mountain Carnival
                </span>
              </Fragment>
            )}
          </h2>
          <span className="gallery3-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery3-text3">
                  Browse through some snapshots capturing the essence of our
                  music festival held amidst the stunning backdrop of the Crazy
                  Mountains. From electrifying performances to vibrant
                  decorations, immerse yourself in the carnival spirit through
                  these images.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery3-container1 thq-grid-4">
          <div className="gallery3-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery3-image1 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container3">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery3-image2 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container4">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery3-image3 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container5">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery3-image4 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container6">
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="gallery3-image5 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container7">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="gallery3-image6 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container8">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="gallery3-image7 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container9">
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="gallery3-image8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery3.defaultProps = {
  image5Alt: 'Food vendors at Crazy Mountain Carnival',
  image6Src:
    'https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNnw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Beautiful landscape of the Crazy Mountains during the festival',
  image4Alt: 'Colorful decorations at the carnival',
  image1Src:
    'https://images.unsplash.com/photo-1535726963350-db49f8b2f54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1500627297039-f3495734b202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'DJ performing at Crazy Mountain Carnival',
  image7Alt: 'Fireworks lighting up the night sky',
  image2Alt: 'Crowd enjoying the music at Crazy Mountain Carnival',
  image8Alt: 'Hosts Willie and Jess welcoming attendees to the festival',
  image6Alt: 'Attendees dancing at one of the stages',
  image3Src:
    'https://images.unsplash.com/photo-1536329774963-96c7733fae20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1560490358-670d15c1c62d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNnw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
  image7Src:
    'https://images.unsplash.com/flagged/photo-1569521739482-5443615d3725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1495386217358-4ffdde036fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNXw&ixlib=rb-4.1.0&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1600057753176-f89e3c48e7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2NzcyNXw&ixlib=rb-4.1.0&q=80&w=1080',
}

Gallery3.propTypes = {
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image5Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image7Src: PropTypes.string,
  image2Src: PropTypes.string,
  image8Src: PropTypes.string,
}

export default Gallery3
