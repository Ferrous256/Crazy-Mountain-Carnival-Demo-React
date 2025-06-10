import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
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
              alt="image"
              src="/website%20home%20image-900h.jpg"
              className="home-image10"
            />
            <a
              href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
              target="_blank"
              rel="noreferrer noopener"
              className="home-button1 thq-button-filled"
            >
              <span className="home-text10 thq-body-small">Get Tickets</span>
            </a>
          </div>
        </div>
      </div>
      <div className="home-what-to-expect thq-section-padding">
        <h1 className="home-text11">EDM Carnival</h1>
        <p className="home-text12 thq-body-large">
          {' '}
          A Rave Centric Music Festival, featuring a unique blend of EDM and
          other guest artists. Right on the Yellowstone River with Views of the
          Crazy Mtns. Camping, Food, and Bar Onsite. Located at the Thompson
          Ranch in Big Timber, MT Starts 1pm- Aug 1-3 2025
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </p>
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
                className="home-image41 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container16">
              <img
                alt="Food vendors at Crazy Mountain Carnival"
                src="/crazy-mountain-carnival-2024-001-600w.jpg"
                className="home-image51 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container17">
              <img
                alt="Attendees dancing at one of the stages"
                src="/crazy-mountain-carnival-2024-035-600w.jpg"
                className="home-image61 thq-img-ratio-16-9"
              />
            </div>
            <div className="home-container18">
              <img
                alt="Fireworks lighting up the night sky"
                src="/crazy-mountain-carnival-2024-025-600w.jpg"
                className="home-image71 thq-img-ratio-16-9"
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
      <div className="home-music-stages thq-section-padding">
        <h1 className="home-text13">Music Stages</h1>
        <div className="home-container20 thq-section-max-width">
          <div className="home-image-container1">
            <img
              alt="feature 1"
              src="/crazy-mountain-carnival-2024-024-1400w.jpg"
              className="home-image12 thq-img-ratio-16-9"
            />
          </div>
          <div className="home-tabs-menu1">
            <div className="home-tab-horizontal1">
              <div className="home-divider-container10">
                <div className="home-container21"></div>
              </div>
              <div className="home-content11">
                <h2 className="home-feature1-title1 thq-heading-2">
                  Pavilion Stage
                </h2>
                <span className="home-feature1-description1 thq-body-small">
                  Large dance area where you can bust a move and grab a drink.
                </span>
              </div>
            </div>
            <div className="home-tab-horizontal2">
              <div className="home-divider-container11"></div>
              <div className="home-content12">
                <h2 className="home-feature2-title1 thq-heading-2">
                  3D Projection Dome
                </h2>
                <span className="home-feature2-description1 thq-body-small">
                   Immersive 3D projection mapped dome with a dance party
                  inside. What more could you ask for? 
                </span>
              </div>
            </div>
            <div className="home-tab-horizontal3">
              <div className="home-divider-container12"></div>
              <div className="home-content13">
                <h2 className="home-feature3-title1 thq-heading-2">
                  Beach Area
                </h2>
                <span className="home-feature3-description1 thq-body-small">
                  We&apos;ll have music playing during the day around the water.
                  Let&apos;s face it that&apos;s where we will all be hanging
                  out anyway, right?
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-gallery3 thq-section-padding">
          <div className="home-max-width2">
            <div className="home-container22">
              <div className="home-content14">
                <div className="home-container23">
                  <img
                    alt="Ferris Wheel at Sunset"
                    src="/sr-photos-005-1500w.jpg"
                    className="home-image13 thq-img-ratio-1-1"
                  />
                  <img
                    alt="Live Music Performance"
                    src="/sr-photos-002-1500w.jpg"
                    className="home-image22 thq-img-ratio-1-1"
                  />
                </div>
                <div className="home-container24">
                  <img
                    alt="Food Trucks Offering Delicious Treats"
                    src="/sr-fc-photos-002-1500w.jpg"
                    className="home-image32 thq-img-ratio-4-3"
                  />
                  <img
                    alt="Kids Playing in the Water Fountain"
                    src="/sr-photos-004-1500w.jpg"
                    className="home-image42 thq-img-ratio-1-1"
                  />
                  <img
                    alt="Fireworks Display in the Night Sky"
                    src="/sr-photos-001-rotated-1500w.jpg"
                    className="home-image52 thq-img-ratio-4-3"
                  />
                </div>
                <div className="home-container25">
                  <img
                    alt="Local Artisans Showcasing Their Creations"
                    src="/sr-photos-003-1500w.jpg"
                    className="home-image62 thq-img-ratio-1-1"
                  />
                  <img
                    alt="Dance Performance on the Main Stage"
                    src="/crazy-mountain-carnival-2024-023-1500w.jpg"
                    className="home-image72 thq-img-ratio-1-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-food-and-drink thq-section-padding">
        <h1 className="home-text14">Food &amp; Drink</h1>
        <div className="home-container26 thq-section-max-width">
          <div className="home-image-container2">
            <img
              alt="feature 1"
              src="/crazy-mountain-carnival-2024-038-1400w.jpg"
              className="home-image14 thq-img-ratio-16-9"
            />
          </div>
          <div className="home-tabs-menu2">
            <div className="home-tab-horizontal4">
              <div className="home-divider-container13">
                <div className="home-container27"></div>
              </div>
              <div className="home-content15">
                <h2 className="home-feature1-title2 thq-heading-2">
                  Timber Bar
                </h2>
                <span className="home-feature1-description2 thq-body-small">
                  Grab a drink at the Timber Bar! Open all weekend and ready to
                  serve you a stiff drink. 
                </span>
              </div>
            </div>
            <div className="home-tab-horizontal5">
              <div className="home-divider-container14">
                <div className="home-divider-container15"></div>
              </div>
              <div className="home-content16">
                <h2 className="home-feature2-title2 thq-heading-2">
                  Food Trucks
                </h2>
                <span className="home-feature2-description2 thq-body-small">
                  Two delicious food trucks: Blissful Bowlz and Love Shack.
                  Blissful Bowlz serves up cold healthy Acai bowls and the Love
                  Shack will have some hot hearty meals to keep you fed all
                  weekend. 
                </span>
              </div>
            </div>
            <div className="home-tab-horizontal6">
              <div className="home-divider-container16"></div>
              <div className="home-content17">
                <h2 className="home-feature3-title2 thq-heading-2">
                  Seating Area
                </h2>
                <span className="home-feature3-description2 thq-body-small">
                  We have picnic tables and a seating area, and even some nice
                  fire pits to keep you warm at night. 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-bar-gallery thq-section-padding">
        <div className="home-max-width3 thq-section-max-width">
          <div className="home-container28">
            <div className="home-content18">
              <div className="home-container29">
                <img
                  alt="Outdoor Concert at Sunset"
                  src="/crazy-mountain-carnival-2024-021-1000h.jpg"
                  className="home-image15 thq-img-ratio-16-9"
                />
              </div>
              <div className="home-container30">
                <img
                  alt="Local Artisans Showcase"
                  src="/food%20truck%20vendor%20collage%20(2)-1400w.jpg"
                  className="home-image23 thq-img-ratio-1-1"
                />
                <img
                  alt="Food Vendors Area"
                  src="/food%20truck%20vendor%20collage%20(3)-1400w.jpg"
                  className="home-image33 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-meet-your-hosts">
        <div className="home-column2 thq-section-padding">
          <h1 className="home-heading11 thq-heading-1">Your Hosts</h1>
          <div className="home-container31">
            <div className="home-content19">
              <span className="home-text15">
                The heart of the Crazy Mountain Carnival lies in a love story
                that began on the banks of the Yellowstone River over a decade
                ago. Eleven years ago, two Montana locals, Jessica and Willie,
                met right where the water runs undammed, and untamed - a fitting
                place for a pair whose lives would come to be defined by
                adventure, creativity, and connection.
              </span>
              <span className="home-text16">
                Five years ago, that same couple threw a party at the historic
                Thompson Ranch to celebrate their engagement. What started as a
                personal celebration quickly took on a life of its own. Friends
                danced, music echoed into the foothills, and guests left asking
                one thing: “When’s the next one?”
              </span>
              <span className="home-text17">
                That unforgettable night became the blueprint for something
                more.
              </span>
              <span className="home-text18">
                From that initial spark, the Crazy Mountain Carnival was born.
                An independently run festival that now draws people from all
                over to gather beneath Montana’s big sky in the plains beneath
                the Crazy Mountains. Built on the foundation of entertainment,
                self-expression, community, and a mad love for music, this event
                is still hosted by Willie &amp; Jessica, pouring that same level
                of love and care into every detail, every year.
              </span>
              <span className="home-text19">
                With a deep passion for music, art, and throwing a damn good
                party, this duo isn’t slowing down anytime soon. You can expect
                to see more one-of-a-kind events, intimate shows, and offbeat
                festivals on the horizon.Keep an eye on @BarflysInc for
                everything that comes next.Welcome to the Carnival. Your hosts
                are already dancing - come join them.
              </span>
              <span className="home-text20">
                Keep an eye on @BarflysInc for everything that comes next.
              </span>
              <span className="home-text21">
                Welcome to the Carnival. Your hosts are already dancing - come
                join them.
              </span>
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
            <img
              alt="Montana Summer Festival Image"
              src="/willie%20and%20jess-big-800w.jpg"
              className="home-image16"
            />
          </div>
        </div>
      </div>
      <div className="home-music">
        <div className="home-column3 thq-section-padding">
          <h1 className="home-heading12 thq-heading-1">MUSIC</h1>
          <div className="home-container32">
            <img
              alt="Montana Summer Festival Image"
              src="/flyer%206-4-25%20smaller-800w.jpg"
              className="home-image17"
            />
            <div className="home-content20">
              <p className="home-content110 thq-body-large">
                25+ DJs across 3 different stages and guest artist Babes in
                Canyon
              </p>
              <p className="home-content111 thq-body-large">
                Curating DJs from the Montana rave scene for over 10 years 
              </p>
              <p className="home-content112 thq-body-large">
                House, Techno, Drum and Bass, Funk, Indie and more. Grab your
                dancin&apos; shoes and come dance with us! 
              </p>
              <div className="home-actions2">
                <button className="home-button3 thq-button-outline">
                  <a
                    href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-action22"
                  >
                    Get Tickets
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sr-radio">
        <div className="home-container33">
          <div className="home-container34">
            <Script
              html={`<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1141044046&color=%23070707&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-115438481" title="Starlight Reunion" target="_blank" style="color: #cccccc; text-decoration: none;">Starlight Reunion</a> · <a href="https://soundcloud.com/user-115438481/sets/starlight-tursdays" title="Starlight Thursdays" target="_blank" style="color: #cccccc; text-decoration: none;">Starlight Thursdays</a></div>`}
            ></Script>
          </div>
        </div>
      </div>
      <div className="home-the-venue thq-section-padding">
        <h1 className="home-text22">The Venue</h1>
        <div className="home-container35 thq-section-max-width">
          <div className="home-tabs-menu3">
            <div className="home-tab-horizontal7">
              <div className="home-divider-container17">
                <div className="home-container36"></div>
              </div>
              <div className="home-content21">
                <h2 className="home-feature1-title3 thq-heading-2">
                  Yellowstone and Boulder River
                </h2>
                <span className="home-feature1-description3 thq-body-small">
                  Historically known as the Rivers across, noted by Lewis &amp;
                  Clark in their passing. Cool off in the waters of both rivers
                  as they join in this amazing location!
                </span>
              </div>
            </div>
            <div className="home-tab-horizontal8">
              <div className="home-divider-container18"></div>
              <div className="home-content22">
                <h2 className="home-feature2-title3 thq-heading-2">
                  <span>Cottonwood Trees</span>
                  <br className="home-text24"></br>
                </h2>
                <span className="home-feature2-description3 thq-body-small">
                  This place is home to some of the largest cotton wood trees in
                  the state! Nature is lit
                </span>
              </div>
            </div>
            <div className="home-tab-horizontal9">
              <div className="home-divider-container19"></div>
              <div className="home-content23">
                <h2 className="home-feature3-title3 thq-heading-2">
                  Crazy Mountain Range
                </h2>
                <span className="home-feature3-description3 thq-body-small">
                  One of the most iconic mountain ranges in the state. Known as
                  highly spiritual mountains used for vision quests for
                  centuries, probably much longer than that.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="home-image-container3">
            <img
              alt="feature 1"
              src="/site%20photo%201-900h.jpg"
              className="home-image18 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <div className="home-map1">
        <img alt="image" src="/approved-map-1500w.jpg" className="home-map2" />
      </div>
      <div className="home-directions1">
        <h1 className="home-directions2">Directions</h1>
        <span className="home-text-directiosn1">
          Caution of the Railroad crossing without lights
        </span>
        <span className="home-text-directiosn2">
          Drive Slow for Livestock and Children
        </span>
        <span className="home-text-directiosn3">Follow the arrows</span>
      </div>
      <div className="home-google-map">
        <iframe
          src="https://www.google.com/maps?q=103 thompson ln, big timber mt&amp;output=embed"
          address="103 thompson ln, big timber mt"
          className="home-google-maps"
        ></iframe>
      </div>
      <div className="home-faq9 thq-section-padding">
        <div className="home-max-width4 thq-section-max-width">
          <div className="home-section-title thq-flex-column">
            <h2 className="home-text25 thq-heading-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="home-content24 thq-flex-column">
            <div className="home-row1">
              <div className="home-container37">
                <p className="home-faq3-question1 thq-body-large">
                  Are dogs allowed?
                </p>
              </div>
              <div className="home-container38">
                <p className="home-faq3-answer1 thq-body-small">
                  No. Sorry- we don&apos;t want your fur babies to get lost or
                  hurt. Thank you for understanding.
                </p>
              </div>
            </div>
            <div className="home-divider1 thq-divider-horizontal"></div>
            <div className="home-row2">
              <div className="home-container39">
                <p className="home-faq3-question2 thq-body-large">
                  Will there be bathrooms?
                </p>
              </div>
              <div className="home-container40">
                <p className="home-faq3-answer2 thq-body-small">
                  Yes! There will be fully stocked porta potties available in
                  convenient locations.
                </p>
              </div>
            </div>
            <div className="home-divider2 thq-divider-horizontal"></div>
            <div className="home-row3">
              <div className="home-container41">
                <p className="home-faq3-question3 thq-body-large">
                  Does it get cold at night?
                </p>
              </div>
              <div className="home-container42">
                <p className="home-faq3-answer3 thq-body-small">
                  Yes! Bring warm clothes for night time. It gets chilly!
                </p>
              </div>
            </div>
            <div className="home-divider3 thq-divider-horizontal"></div>
            <div className="home-row4">
              <div className="home-container43">
                <p className="home-faq3-question4 thq-body-large">
                  What about Campfires?
                </p>
              </div>
              <div className="home-container44">
                <p className="home-faq3-answer4 thq-body-small">
                  We have designated areas for campfires. Please no personal
                  fires!
                </p>
              </div>
            </div>
            <div className="home-divider4 thq-divider-horizontal"></div>
            <div className="home-row5">
              <div className="home-container45">
                <p className="home-faq3-question5 thq-body-large">
                  Are kids allowed?
                </p>
              </div>
              <div className="home-container46">
                <p className="home-faq3-answer5 thq-body-small">
                  No. This is a +18 event.
                </p>
              </div>
            </div>
            <div className="home-divider5 thq-divider-horizontal"></div>
          </div>
          <div className="home-content25 thq-flex-column">
            <div className="home-content26">
              <h2 className="home-text26 thq-heading-2">
                Still have a question?
              </h2>
              <p className="home-text27 thq-body-large">
                {' '}
                jessica@barflysinc.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-giving-back thq-section-padding">
        <h2 className="home-text28 thq-heading-2">GIVING BACK</h2>
        <div className="home-max-width5 thq-section-max-width">
          <h2 className="home-text29 thq-heading-2">
            C.O.R.A.- Giving 3% back to expanding trail systems in Sweet Grass
            County
          </h2>
        </div>
      </div>
      <div className="home-partnerships1 thq-section-padding">
        <h2 className="home-text30 thq-heading-2">2025 PARTNERSHIPS</h2>
        <div className="home-max-width6 thq-section-max-width">
          <div className="home-logo1">
            <div className="home-container47">
              <div className="home-container48">
                <img
                  alt="image"
                  src="/barflys%20logo-transparent-cropped-200h.png"
                  className="home-image19"
                />
                <span className="home-text31">Barflys</span>
              </div>
              <div className="home-container49">
                <img
                  alt="image"
                  src="/cora%20logo%20with%20words_2-200h.png"
                  className="home-image20"
                />
                <span className="home-text32">C.O.R.A.</span>
              </div>
              <div className="home-container50">
                <img
                  alt="image"
                  src="/elevation-200h.jpg"
                  className="home-image24"
                />
                <span className="home-text33">Elevation Productions</span>
              </div>
              <div className="home-container51">
                <img
                  alt="image"
                  src="/sr%20white%20transparent-200h.png"
                  className="home-image25"
                />
                <span className="home-text34">Starlight Reunion</span>
              </div>
            </div>
            <div className="home-container52">
              <div className="home-container53">
                <span className="home-thompson-ranch-events">
                  Thompson Ranch Events
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-partnerships2 thq-section-padding">
        <h2 className="home-text35 thq-heading-2">2025 SPONSORS</h2>
        <div className="home-max-width7 thq-section-max-width">
          <div className="home-logo2">
            <div className="home-container54">
              <div className="home-container55">
                <img
                  alt="image"
                  src="/dream%20creations%20construction%20inc-400w.png"
                  className="home-image26"
                />
                <span className="home-text36">
                  Dream Creations Construction
                </span>
              </div>
              <div className="home-container56">
                <img
                  alt="image"
                  src="/msc_logo_2-400w.png"
                  className="home-image27"
                />
                <span className="home-text37">Montana Shipping Co.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-dont-wait thq-section-padding">
        <div className="thq-section-max-width">
          <div className="home-accent2-bg">
            <div className="home-accent1-bg">
              <div className="home-container57">
                <div className="home-content27">
                  <span className="home-text38 thq-heading-2">
                    Don&apos;t Wait!
                  </span>
                  <p className="home-text39 thq-body-large">
                    Fun starts Aug. 1st. Get your tickets now and don&apos;t
                    miss out!
                  </p>
                </div>
                <div className="home-actions3">
                  <a
                    href="https://www.zeffy.com/en-US/ticketing/crazy-mountain-carnival"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1 thq-button-filled"
                  >
                    <span className="home-text40">Get Tickets NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer4 thq-section-padding">
        <div className="home-max-width9 thq-section-max-width">
          <div className="home-content28">
            <div className="home-logo3">
              <img
                alt="Crazy Mountain Carnival Logo"
                src="/cmc-logo-transparent-200w.png"
                className="home-image110"
              />
            </div>
            <div className="home-social-links">
              <a
                href="https://www.instagram.com/crazymountaincarnival/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon10 thq-icon-small"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/crazymountaincarnival/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094904967406"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon12"
                >
                  <g fill="none">
                    <g clip-path="url(#akarIconsFacebookFill0)">
                      <path
                        d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067"
                        fill="currentColor"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clippath id="akarIconsFacebookFill0">
                        <path d="M0 0h24v24H0z" fill="#fff"></path>
                      </clippath>
                    </defs>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094904967406"
                target="_blank"
                rel="noreferrer noopener"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@dreamxcrlw8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon19"
                >
                  <path
                    d="M19.321 5.562a5 5 0 0 1-.443-.258a6.2 6.2 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943q.002.3-.008.595l-.004.073q0 .016-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604a3.2 3.2 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.18 7.18 0 0 0-5.532 1.62a7.6 7.6 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246c-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.9 7.9 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187c.359-.015 1.562 0 2.928-.647c1.515-.718 2.377-1.787 2.377-1.787a7.4 7.4 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@dreamxcrlw8"
                target="_blank"
                rel="noreferrer noopener"
              >
                TikTok
              </a>
            </div>
            <div className="home-links"></div>
          </div>
          <div className="home-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="home-row6">
              <div className="home-footer-links">
                <span className="thq-body-small">
                  © 2025 Crazy Mountain Carnival
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
