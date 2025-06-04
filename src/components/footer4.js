import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <div className="footer4-container1">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="footer4-image1"
              />
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="footer4-image2"
              />
            </div>
          </div>
          <span className="footer4-text1">
            {props.text ?? (
              <Fragment>
                <span className="footer4-text3">
                  <span>An event made possible by</span>
                  <br></br>
                  <span>Barflys and Starlight Reunion</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container2">
              <span className="thq-body-small">
                © 2025 Crazy Mountain Carnival
              </span>
            </div>
            <div className="footer4-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  text: undefined,
  imageAlt1: 'image',
  imageAlt: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Footer4.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Footer4
