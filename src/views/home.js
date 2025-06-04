import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Features24 from '../components/features24'
import Gallery4 from '../components/gallery4'
import Gallery7 from '../components/gallery7'
import Features25 from '../components/features25'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Crazy Mountain Carnival Demo</title>
        <meta property="og:title" content="Crazy Mountain Carnival Demo" />
      </Helmet>
      <div className="home-header-and-gallery">
        <div className="home-column1 thq-section-max-width thq-section-padding">
          <div className="home-content2">
            <h1 className="home-text10 thq-heading-1">
              Crazy Mountain Carnival
            </h1>
            <img
              alt="image"
              src="/crazy%20mountain-transparent-300w.png"
              className="home-image"
            />
            <p className="home-text11 thq-body-large">
              {' '}
              Two stages, 50+ Artists, Aug. 1st-3rd on the Yellowstone River at
              the Thompson Ranch wedding venue Big Timber, MT.
            </p>
          </div>
          <a
            href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
            target="_blank"
            rel="noreferrer noopener"
            className="home-button1 thq-button-filled"
          >
            <span className="thq-body-small">Get Tickets</span>
          </a>
        </div>
      </div>
      <div className="home-gallery3 thq-section-padding">
        <div className="home-max-width1 thq-section-max-width">
          <div className="home-container11 thq-grid-4">
            <div className="home-container12">
              <img
                alt="DJ performing at Crazy Mountain Carnival"
                src="/crazy-mountain-carnival-2024-034-600w.jpg"
                className="home-image11 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container13">
              <img
                alt="Crowd enjoying the music at Crazy Mountain Carnival"
                src="/crazy-mountain-carnival-2024-022-600w.jpg"
                className="home-image2 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container14">
              <img
                alt="Beautiful landscape of the Crazy Mountains during the festival"
                src="/crazy-mountain-carnival-2024-028-600w.jpg"
                className="home-image3 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container15">
              <img
                alt="Colorful decorations at the carnival"
                src="/crazy-mountain-carnival-2024-032-600w.jpg"
                className="home-image4 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container16">
              <img
                alt="Food vendors at Crazy Mountain Carnival"
                src="/crazy-mountain-carnival-2024-001-600w.jpg"
                className="home-image5 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container17">
              <img
                alt="Attendees dancing at one of the stages"
                src="/crazy-mountain-carnival-2024-035-600w.jpg"
                className="home-image6 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container18">
              <img
                alt="Fireworks lighting up the night sky"
                src="/crazy-mountain-carnival-2024-006-600w.jpg"
                className="home-image7 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container19">
              <img
                alt="Hosts Willie and Jess welcoming attendees to the festival"
                src="/crazy-mountain-carnival-2024-007-600w.jpg"
                className="home-image8 thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
      </div>
      <Features24
        heading={
          <Fragment>
            <span className="home-text13">Food &amp; Drink</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text14">Timber Bar</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text15">Food Trucks</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text16">Seating Area</span>
          </Fragment>
        }
        feature1ImgSrc="/crazy-mountain-carnival-2024-038-1400w.jpg"
        feature1Description={
          <Fragment>
            <span className="home-text17">
              Grab a drink at the Timber Bar! Open all weekend and ready to
              serve you a stiff drink. 
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text18">
              Don&apos;t forget your swimsuit! The river runs right through the
              venue so you can beat the heat on the beach
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text19">
              We have picnic tables and a seating area, and even some nice fire
              pits to keep you warm at night. 
            </span>
          </Fragment>
        }
      ></Features24>
      <Gallery4
        image1Src="/crazy-mountain-carnival-2024-021-1000h.jpg"
        image2Src="/crazy-mountain-carnival-2024-004-1400w.jpg"
        image3Src="/crazy-mountain-carnival-2024-016-1400w.jpg"
      ></Gallery4>
      <div className="home-meet-your-hosts">
        <div className="home-column2 thq-section-padding">
          <div className="home-content3">
            <h1 className="home-heading11 thq-heading-1">Meet Your Hosts</h1>
            <p className="thq-body-large home-content11">
              Willie and Jess welcome you to join Crazy Mountain Carnival where
              we celebrate love, dance, and electric music festival in a
              carnival under the crazy mountains.
            </p>
            <div className="home-actions1">
              <button className="home-button2 thq-button-outline">
                <a
                  href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-action21"
                >
                  Buy Tickets
                </a>
              </button>
            </div>
          </div>
        </div>
        <img
          alt="Montana Summer Festival Image"
          src="/willie%20and%20jess-big-1500w.jpg"
          className="home-image12"
        />
        <p className="home-content12 thq-body-large">
          Willie and Jess welcome you to join Crazy Mountain Carnival where we
          celebrate love, dance, and electric music festival in a carnival under
          the crazy mountains.
        </p>
        <div className="home-actions2">
          <button className="home-button3 thq-button-outline">
            <a
              href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
              target="_blank"
              rel="noreferrer noopener"
              className="home-action22"
            >
              Buy Tickets
            </a>
          </button>
        </div>
      </div>
      <Features24
        heading={
          <Fragment>
            <span className="home-text20">Music Stages</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text21">3D Projection Dome</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text22">Pavilion Stage</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text23">Beach Area</span>
          </Fragment>
        }
        feature1ImgSrc="/sr-photos-001-rotated-1400w.jpg"
        feature1Description={
          <Fragment>
            <span className="home-text24">
              Immersive 3D projection mapped dome with a dance party inside.
              What more could you ask for? 
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text25">
              Large dance area where you can bust a move and grab a drink. 
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text26">
              We&apos;ll have music playing during the day around the water.
              Let&apos;s face it that&apos;s where we will all be hanging out
              anyway, right?
            </span>
          </Fragment>
        }
      ></Features24>
      <Gallery7
        image1Src="/sr-photos-005-1500w.jpg"
        image2Src="/sr-photos-002-1500w.jpg"
        image3Src="/sr-fc-photos-002-1500w.jpg"
        image4Src="/sr-photos-004-1500w.jpg"
        image5Src="/sr-fc-photos-004-1500w.jpg"
        image6Src="/sr-photos-003-1500w.jpg"
        image7Src="/crazy-mountain-carnival-2024-023-1500w.jpg"
      ></Gallery7>
      <div className="home-music">
        <div className="home-column3 thq-section-padding">
          <div className="home-content4">
            <h1 className="home-heading12 thq-heading-1">MUSIC</h1>
            <p className="home-content13 thq-body-large">
              40+ DJs across 3 different stages
            </p>
            <p className="home-content14 thq-body-large">
              Curating DJs from the Montana rave scene for over 10 years 
            </p>
            <p className="home-content15 thq-body-large">
              House, Techno, Drum and Bass, Funk, and more. Grab your
              dancin&apos; shoes and come dance with us! 
            </p>
            <div className="home-actions3">
              <button className="home-button4 thq-button-outline">
                <a
                  href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-action23"
                >
                  Get Tickets
                </a>
              </button>
            </div>
          </div>
        </div>
        <img
          alt="Montana Summer Festival Image"
          src="/flyer%206-4-25%20smaller-800w.jpg"
          className="home-image13"
        />
      </div>
      <Features25
        heading={
          <Fragment>
            <span className="home-text27">The Venue</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text28">Yellowstone River</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">Cottonwood Trees</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30">Crazy Mountain Range</span>
          </Fragment>
        }
        feature1ImgSrc="/crazy-mountain-carnival-2024-017-1400w.jpg"
        feature1Description={
          <Fragment>
            <span className="home-text31">
              Don&apos;t forget your bathing suit!  The river runs right along
              the entire venue so you can cool off during the hottest parts of
              the day.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32">
              This place is home to some of the largest cotton wood trees in the
              state! Nature is lit
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33">
              This area is a wedding venue for a reason. You&apos;ll be partying
              right next to the crazy mountain range all weekend. Summer in
              Montana is beautiful, isn&apos;t it?
            </span>
          </Fragment>
        }
      ></Features25>
      <img
        alt="image"
        src="/unapproved%20map%20-%20small-1500w.jpg"
        className="home-map"
      />
      <h1 className="home-directions">Directions</h1>
      <div className="home-google-map">
        <iframe
          src="https://www.google.com/maps?q=103 thompson ln, big timber mt&amp;output=embed"
          address="103 thompson ln, big timber mt"
          className="home-google-maps"
        ></iframe>
      </div>
      <div className="home-faq9 thq-section-padding">
        <div className="home-max-width2 thq-section-max-width">
          <div className="home-section-title thq-flex-column">
            <h2 className="home-text34 thq-heading-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="thq-flex-column home-content5">
            <div className="home-row1">
              <div className="home-container20">
                <p className="home-faq3-question1 thq-body-large">
                  Are dogs allowed?
                </p>
              </div>
              <div className="home-container21">
                <p className="home-faq3-answer1 thq-body-small">
                  No. Sorry- we don&apos;t want your fur babies to get lost or
                  hurt. Thank you for understanding.
                </p>
              </div>
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="home-row2">
              <div className="home-container22">
                <p className="home-faq3-question2 thq-body-large">
                  Will there be bathrooms?
                </p>
              </div>
              <div className="home-container23">
                <p className="home-faq3-answer2 thq-body-small">
                  Yes! There will be fully stocked porta potties available in
                  convenient locations.
                </p>
              </div>
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="home-row3">
              <div className="home-container24">
                <p className="home-faq3-question3 thq-body-large">
                  Does it get cold at night?
                </p>
              </div>
              <div className="home-container25">
                <p className="home-faq3-answer3 thq-body-small">
                  Yes! Bring warm clothes for night time. It gets chilly!
                </p>
              </div>
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="home-row4">
              <div className="home-container26">
                <p className="home-faq3-question4 thq-body-large">
                  Are kids allowed?
                </p>
              </div>
              <div className="home-container27">
                <p className="home-faq3-answer4 thq-body-small">
                  No. This is a +21 event.
                </p>
              </div>
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
          <div className="thq-flex-column">
            <div className="home-content7">
              <h2 className="thq-heading-2 home-text35">
                Still have a question?
              </h2>
              <p className="thq-body-large home-text36">
                {' '}
                info@crazymoutaincarnival.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="home-accent2-bg">
            <div className="home-accent1-bg">
              <div className="home-container29">
                <div className="home-content8">
                  <span className="thq-heading-2">Don&apos;t Wait!</span>
                  <p className="thq-body-large">
                    Experience Monta&apos;s most exciting summer carnival in the
                    heart of Montana. Get your tickets now and don&apos;t miss
                    out on the fun!
                  </p>
                </div>
                <div className="home-actions4">
                  <a
                    href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link thq-button-filled"
                  >
                    <span>Get Tickets NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer4
        text={
          <Fragment>
            <span className="home-text40">
              <span>An event made possible by</span>
              <br></br>
              <span>Barflys and Starlight Reunion</span>
              <br></br>
            </span>
          </Fragment>
        }
        logoSrc="/crazy-mountain-carnival-2024-039-200h.jpg"
        imageSrc="/clean%20sr%20logoholllow-200w.png"
        imageSrc1="/crazy-mountain-carnival-2024-039-200h.jpg"
        rootClassName="footer4root-class-name"
      ></Footer4>
    </div>
  )
}

export default Home
