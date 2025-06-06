import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import Gallery7 from '../components/gallery7'
import './home.css'

const Home = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="home-container10">
      <Helmet>
        <title>Crazy Mountain Carnival Demo</title>
        <meta property="og:title" content="Crazy Mountain Carnival Demo" />
      </Helmet>
      <div className="home-header">
        <div className="home-column1 thq-section-max-width thq-section-padding">
          <div className="home-content10">
            <img
              src="/website%20home%20image-700h.jpg"
              alt="image"
              className="home-image9"
            />
            <p className="home-text10 thq-body-large">
              {' '}
              Two stages, 25+ Artists, Aug. 1st-3rd on the Yellowstone River at
              the Thompson Ranch in Big Timber, MT.
            </p>
            <a
              href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
              target="_blank"
              rel="noreferrer noopener"
              className="home-button1 thq-button-filled"
            >
              <span className="home-text11 thq-body-small">Get Tickets</span>
            </a>
          </div>
        </div>
      </div>
      <div className="home-gallery3 thq-section-padding">
        <h1 className="home-text12">What to Expect</h1>
        <div className="home-max-width1 thq-section-max-width">
          <span className="home-text13">
            <span>
              This is a 2 night / 3 day event. Expect to hear lots of house,
              techno, drum and bass, and other genres of EDM. Bring your weird
              self!
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Have fun playing carnival games</span>
            <br></br>
            <span>Enjoy hot food and cold drinks</span>
            <br></br>
            <span>Camp out under the Crazy Mountains</span>
            <br></br>
            <br></br>
            <span> Gates open at 1 PM Friday and close at 1 PM Sunday</span>
          </span>
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
                className="home-image21 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container14">
              <img
                alt="Beautiful landscape of the Crazy Mountains during the festival"
                src="/crazy-mountain-carnival-2024-028-600w.jpg"
                className="home-image31 thq-img-ratio-16-9"
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
      <div className="home-food-and-drink thq-section-padding">
        <h1 className="home-text26">Food &amp; Drink</h1>
        <div className="home-container20 thq-section-max-width">
          <div className="home-image-container1">
            {activeTab === 0 && (
              <img
                alt="feature 1"
                src="/crazy-mountain-carnival-2024-038-1400w.jpg"
                className="home-image10 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="home-tabs-menu1">
            <div
              onClick={() => setActiveTab(0)}
              className="home-tab-horizontal1"
            >
              <div className="home-divider-container1">
                {activeTab === 0 && <div className="home-container21"></div>}
              </div>
              <div className="home-content11">
                <h2 className="home-feature1-title1 thq-heading-2">
                  Timber Bar
                </h2>
                <span className="home-feature1-description1 thq-body-small">
                  Grab a drink at the Timber Bar! Open all weekend and ready to
                  serve you a stiff drink. 
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="home-tab-horizontal2"
            >
              <div className="home-divider-container2">
                {activeTab === 1 && <div className="home-container22"></div>}
              </div>
              <div className="home-content12">
                <h2 className="home-feature2-title1 thq-heading-2">
                  Food Trucks
                </h2>
                <span className="home-feature2-description1 thq-body-small">
                  Don&apos;t forget your swimsuit! The river runs right through
                  the venue so you can beat the heat on the beach
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="home-tab-horizontal3"
            >
              <div className="home-divider-container3">
                {activeTab === 2 && <div className="home-container23"></div>}
              </div>
              <div className="home-content13">
                <h2 className="home-feature3-title1 thq-heading-2">
                  Seating Area
                </h2>
                <span className="home-feature3-description1 thq-body-small">
                  We have picnic tables and a seating area, and even some nice
                  fire pits to keep you warm at night. 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-bar-gallery thq-section-padding">
        <div className="home-max-width2 thq-section-max-width">
          <div className="home-container24">
            <div className="home-content14">
              <div className="home-container25">
                <img
                  alt="Outdoor Concert at Sunset"
                  src="/crazy-mountain-carnival-2024-021-1000h.jpg"
                  className="home-image12 thq-img-ratio-16-9"
                />
              </div>
              <div className="home-container26">
                <img
                  alt="Local Artisans Showcase"
                  src="/crazy-mountain-carnival-2024-004-1400w.jpg"
                  className="home-image22 thq-img-ratio-1-1"
                />
                <img
                  alt="Food Vendors Area"
                  src="/crazy-mountain-carnival-2024-016-1400w.jpg"
                  className="home-image32 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-meet-your-hosts">
        <div className="home-column2 thq-section-padding">
          <div className="home-content15">
            <h1 className="home-heading11 thq-heading-1">Your Hosts</h1>
            <p className="home-content16 thq-body-large">
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
          className="home-image13"
        />
        <p className="home-content17 thq-body-large">
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
      <div className="home-container27 thq-section-padding">
        <h1 className="home-text27">Music Stages</h1>
        <div className="home-container28 thq-section-max-width">
          <div className="home-image-container2">
            {activeTab === 0 && (
              <img
                alt="feature 1"
                src="/crazy-mountain-carnival-2024-024-1400w.jpg"
                className="home-image14 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="home-tabs-menu2">
            <div
              onClick={() => setActiveTab(0)}
              className="home-tab-horizontal4"
            >
              <div className="home-divider-container4">
                {activeTab === 0 && <div className="home-container29"></div>}
              </div>
              <div className="home-content18">
                <h2 className="home-feature1-title2 thq-heading-2">
                  Pavilion Stage
                </h2>
                <span className="home-feature1-description2 thq-body-small">
                  Large dance area where you can bust a move and grab a drink.
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="home-tab-horizontal5"
            >
              <div className="home-divider-container5">
                {activeTab === 1 && <div className="home-container30"></div>}
              </div>
              <div className="home-content19">
                <h2 className="home-feature2-title2 thq-heading-2">
                  3D Projection Dome
                </h2>
                <span className="home-feature2-description2 thq-body-small">
                   Immersive 3D projection mapped dome with a dance party
                  inside. What more could you ask for? 
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="home-tab-horizontal6"
            >
              <div className="home-divider-container6">
                {activeTab === 2 && <div className="home-container31"></div>}
              </div>
              <div className="home-content20">
                <h2 className="home-feature3-title2 thq-heading-2">
                  Beach Area
                </h2>
                <span className="home-feature3-description2 thq-body-small">
                  We&apos;ll have music playing during the day around the water.
                  Let&apos;s face it that&apos;s where we will all be hanging
                  out anyway, right?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery7
        image1Src="/sr-photos-005-1500w.jpg"
        image2Src="/sr-photos-002-1500w.jpg"
        image3Src="/sr-fc-photos-002-1500w.jpg"
        image4Src="/sr-photos-004-1500w.jpg"
        image5Src="/sr-photos-001-rotated-1500w.jpg"
        image6Src="/sr-photos-003-1500w.jpg"
        image7Src="/crazy-mountain-carnival-2024-023-1500w.jpg"
        rootClassName="gallery7root-class-name"
      ></Gallery7>
      <div className="home-music">
        <div className="home-column3 thq-section-padding">
          <div className="home-content21">
            <h1 className="home-heading12 thq-heading-1">MUSIC</h1>
            <p className="home-content110 thq-body-large">
              40+ DJs across 3 different stages
            </p>
            <p className="home-content111 thq-body-large">
              Curating DJs from the Montana rave scene for over 10 years 
            </p>
            <p className="home-content112 thq-body-large">
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
          className="home-image15"
        />
      </div>
      <div className="home-the-venue thq-section-padding">
        <h1 className="home-text28">The Venue</h1>
        <div className="home-container32 thq-section-max-width">
          <div className="home-tabs-menu3">
            <div
              onClick={() => setActiveTab(0)}
              className="home-tab-horizontal7"
            >
              <div className="home-divider-container7">
                {activeTab === 0 && <div className="home-container33"></div>}
              </div>
              <div className="home-content22">
                <h2 className="home-feature1-title3 thq-heading-2">
                  Yellowstone River
                </h2>
                <span className="home-feature1-description3 thq-body-small">
                  Don&apos;t forget your bathing suit!  The river runs right
                  along the entire venue so you can cool off during the hottest
                  parts of the day.
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="home-tab-horizontal8"
            >
              <div className="home-divider-container8">
                {activeTab === 1 && <div className="home-container34"></div>}
              </div>
              <div className="home-content23">
                <h2 className="home-feature2-title3 thq-heading-2">
                  Cottonwood Trees
                </h2>
                <span className="home-feature2-description3 thq-body-small">
                  This place is home to some of the largest cotton wood trees in
                  the state! Nature is lit
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="home-tab-horizontal9"
            >
              <div className="home-divider-container9">
                {activeTab === 2 && <div className="home-container35"></div>}
              </div>
              <div className="home-content24">
                <h2 className="home-feature3-title3 thq-heading-2">
                  Crazy Mountain Range
                </h2>
                <span className="home-feature3-description3 thq-body-small">
                  This area is a wedding venue for a reason. You&apos;ll be
                  partying right next to the crazy mountain range all weekend.
                  Summer in Montana is beautiful, isn&apos;t it?
                </span>
              </div>
            </div>
          </div>
          <div className="home-image-container3">
            {activeTab === 0 && (
              <img
                alt="feature 1"
                src="/crazy-mountain-carnival-2024-017-1400w.jpg"
                className="home-image16 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1473382778285-d06fba31f996?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NDE5MHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                className="home-image17 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1584664862155-6f754011bb1b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0OTA1NDE5MHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                className="home-image18 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
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
        <div className="home-max-width3 thq-section-max-width">
          <div className="home-section-title thq-flex-column">
            <h2 className="home-text29 thq-heading-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="thq-flex-column home-content25">
            <div className="home-row1">
              <div className="home-container36">
                <p className="home-faq3-question1 thq-body-large">
                  Are dogs allowed?
                </p>
              </div>
              <div className="home-container37">
                <p className="home-faq3-answer1 thq-body-small">
                  No. Sorry- we don&apos;t want your fur babies to get lost or
                  hurt. Thank you for understanding.
                </p>
              </div>
            </div>
            <div className="home-divider1 thq-divider-horizontal"></div>
            <div className="home-row2">
              <div className="home-container38">
                <p className="home-faq3-question2 thq-body-large">
                  Will there be bathrooms?
                </p>
              </div>
              <div className="home-container39">
                <p className="home-faq3-answer2 thq-body-small">
                  Yes! There will be fully stocked porta potties available in
                  convenient locations.
                </p>
              </div>
            </div>
            <div className="home-divider2 thq-divider-horizontal"></div>
            <div className="home-row3">
              <div className="home-container40">
                <p className="home-faq3-question3 thq-body-large">
                  Does it get cold at night?
                </p>
              </div>
              <div className="home-container41">
                <p className="home-faq3-answer3 thq-body-small">
                  Yes! Bring warm clothes for night time. It gets chilly!
                </p>
              </div>
            </div>
            <div className="home-divider3 thq-divider-horizontal"></div>
            <div className="home-row4">
              <div className="home-container42">
                <p className="home-faq3-question4 thq-body-large">
                  Are kids allowed?
                </p>
              </div>
              <div className="home-container43">
                <p className="home-faq3-answer4 thq-body-small">
                  No. This is a +18 event.
                </p>
              </div>
            </div>
            <div className="home-divider4 thq-divider-horizontal"></div>
          </div>
          <div className="thq-flex-column">
            <div className="home-content27">
              <h2 className="home-text30 thq-heading-2">
                Still have a question?
              </h2>
              <p className="home-text31 thq-body-large">
                {' '}
                info@crazymoutaincarnival.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-dont-wait thq-section-padding">
        <div className="thq-section-max-width">
          <div className="home-accent2-bg">
            <div className="home-accent1-bg">
              <div className="home-container44">
                <div className="home-content28">
                  <span className="home-text32 thq-heading-2">
                    Don&apos;t Wait!
                  </span>
                  <p className="home-text33 thq-body-large">
                    Fun starts Aug. 1st. Get your tickets now and don&apos;t
                    miss out!
                  </p>
                </div>
                <div className="home-actions4">
                  <a
                    href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link thq-button-filled"
                  >
                    <span className="home-text34">Get Tickets NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer thq-section-padding">
        <div className="home-max-width5 thq-section-max-width">
          <div className="home-content29">
            <div className="home-logo">
              <div className="home-container45">
                <img
                  alt="image"
                  src="/sr%20white%20transparent-400h.png"
                  className="home-image19"
                />
                <img
                  alt="image"
                  src="/barflys%20logo-transparent-cropped-300h.png"
                  className="home-image20"
                />
              </div>
            </div>
            <span className="home-text35">
              <span>An event made possible by</span>
              <br></br>
              <span>Barflys and Starlight Reunion</span>
              <br></br>
            </span>
          </div>
          <div className="home-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="home-row5">
              <div className="home-container46">
                <span className="thq-body-small">
                  © 2025 Crazy Mountain Carnival
                </span>
              </div>
              <div className="home-footer-links"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
