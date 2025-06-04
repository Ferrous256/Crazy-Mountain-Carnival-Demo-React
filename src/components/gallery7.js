import React from 'react'

import PropTypes from 'prop-types'

import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div className="gallery7-gallery3 thq-section-padding">
      <div className="gallery7-max-width">
        <div className="gallery7-container1">
          <div className="gallery7-content">
            <div className="gallery7-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery7-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery7-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery7-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery7-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery7-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery7-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery7-container4">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery7-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery7-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  image6Src:
    'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDI1M3w&ixlib=rb-4.1.0&q=80&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDI1Mnw&ixlib=rb-4.1.0&q=80&w=1500',
  image1Src:
    'https://images.unsplash.com/photo-1712711647639-70baf4b36e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDI1M3w&ixlib=rb-4.1.0&q=80&w=1500',
  image5Alt: 'Fireworks Display in the Night Sky',
  image4Alt: 'Kids Playing in the Water Fountain',
  image4Src:
    'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDI1Mnw&ixlib=rb-4.1.0&q=80&w=1500',
  image1Alt: 'Ferris Wheel at Sunset',
  image2Src:
    'https://images.unsplash.com/photo-1584088179721-796849a2ae72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDI1M3w&ixlib=rb-4.1.0&q=80&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1470020618177-f49a96241ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDI1Mnw&ixlib=rb-4.1.0&q=80&w=1500',
  image6Alt: 'Local Artisans Showcasing Their Creations',
  image2Alt: 'Live Music Performance',
  image7Alt: 'Dance Performance on the Main Stage',
  image3Alt: 'Food Trucks Offering Delicious Treats',
  image7Src:
    'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA2MDI1Mnw&ixlib=rb-4.1.0&q=80&w=1500',
}

Gallery7.propTypes = {
  image6Src: PropTypes.string,
  image3Src: PropTypes.string,
  image1Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image7Src: PropTypes.string,
}

export default Gallery7
