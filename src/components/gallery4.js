import React from 'react'

import PropTypes from 'prop-types'

import './gallery4.css'

const Gallery4 = (props) => {
  return (
    <div className="gallery4-gallery3 thq-section-padding">
      <div className="gallery4-max-width thq-section-max-width">
        <div className="gallery4-container1">
          <div className="gallery4-content">
            <div className="gallery4-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery4-image1 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery4-container3">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery4-image2 thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery4-image3 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery4.defaultProps = {
  image1Alt: 'Outdoor Concert at Sunset',
  image3Alt: 'Food Vendors Area',
  image1Src:
    'https://images.unsplash.com/photo-1515900243-5a857d4f3219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NjA2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1746311421259-97faba8c0bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NjA2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Local Artisans Showcase',
  image2Src:
    'https://images.unsplash.com/photo-1542029123374-26f7a8e05fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NjA2N3w&ixlib=rb-4.1.0&q=80&w=1080',
}

Gallery4.propTypes = {
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
}

export default Gallery4
