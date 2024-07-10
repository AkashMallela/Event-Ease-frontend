import React from 'react';
import '../css/About.css';
import NavBar from '../components/Navbar';

const AboutPage = () => {

  const events = [
    {
      imgSrc: "acm.png",
      alt: "Comic Con India",
      title: "Comic Con India in Mumbai",
      description: "Comic Con India in Mumbai gathers fans for celebrity meetups, panels, cosplay, and exclusive previews, celebrating pop culture in a vibrant, immersive environment."
    },
    {
      imgSrc: "ag1.png",
      alt: "Indian Gaming Show",
      title: "Indian Gaming Show in New Delhi",
      description: "The 'Indian Gaming Show' in New Delhi showcases cutting-edge games, esports tournaments, industry panels, and interactive experiences, attracting gamers and enthusiasts nationwide."
    },
    {
      imgSrc: "af.png",
      alt: "Great Indian Food Festival",
      title: "Great Indian Food Festival in Mumbai",
      description: "The 'Great Indian Food Festival' in Mumbai features diverse cuisines, culinary workshops, chef demonstrations, and food tastings, celebrating India's rich gastronomic heritage."
    }
  ];
  
  return (
    <div>
    <NavBar />
    <div className='about'>
        <div className='about-infor'>
          <h1 className='infor-h1'>Why EventEase</h1>
          <p className='infor-p'>
          Our professional event planners and strategists are focused on your goals and your people.
          </p>
          <p className='infor-p'>
            We're here to make exceptional experiences for everyone involved.
          </p>
          {/* <button className='infor-button'>
          <a href="/reservation">Let's plan your event</a>
          </button> */}
        </div>
        </div>
      <div className="about-body">
        <div className="row">
          <div className="about-col">
              
              <div className='who-we-are'>
                <div>
                <center><h2 className="about-h2">Who we are</h2></center>
                <p className='about-p'>At EventEase, we are a passionate team of professionals with a deep understanding of the complexities involved in organizing successful events. Our team consists of experienced event planners, software developers, and customer service experts, all dedicated to making event management easier, more efficient, and more enjoyable.</p>
                </div>
                <div>
              <center><h2 className="about-h2">Our Vision</h2></center>
              <p className='about-p'>Our vision is to revolutionize the event management industry by leveraging technology to simplify the planning process, enhance attendee experience, and ensure flawless event execution. We aim to be the go-to platform for all event-related needs, whether you're organizing a small gathering, a large conference, or anything in between.</p>
                </div>
              </div>
                {/* <div className='our-mission'>
              <center><h2 className="about-h2">Our Mission</h2></center>
              <p className='about-p'>Our mission is to empower event organizers with the tools they need to create memorable and successful events. We strive to deliver: <br/>
              
               An intuitive and easy-to-navigate platform that allows users to manage events with minimal effort.<br />
               A wide range of features including event scheduling, ticketing, attendee management, vendor coordination, and real-time analytics.<br />
               Flexible options to tailor the platform to meet the unique requirements of different types of events.<br/>
               Dedicated customer support to assist users at every step of their event planning journey. </p>

                </div> */}
             
              
          </div>
          {/* <div className="col col-md-3 sidebar">
            <center><h1><i>Top Events</i></h1></center>
            <hr />
            <center><img className="top" src="acm.png" alt="Comic Con India" /></center>
            <h5 className="event-title"><u>Comic Con India in Mumbai</u></h5>
            <p className="event-description">Comic Con India in Mumbai gathers fans for celebrity meetups, panels, cosplay, and exclusive previews, celebrating pop culture in a vibrant, immersive environment.</p>
            <hr />
            <center><img className="top" src="ag1.png" alt="Indian Gaming Show" /></center>
            <h5 className="event-title"><u>Indian Gaming Show in New Delhi</u></h5>
            <p className="event-description">The "Indian Gaming Show" in New Delhi showcases cutting-edge games, esports tournaments, industry panels, and interactive experiences, attracting gamers and enthusiasts nationwide.</p>
            <hr />
            <center><img className="top" src="af.png" alt="Great Indian Food Festival" /></center>
            <h5 className="event-title"><u>Great Indian Food Festival in Mumbai</u></h5>
            <p className="event-description">The "Great Indian Food Festival" in Mumbai features diverse cuisines, culinary workshops, chef demonstrations, and food tastings, celebrating India's rich gastronomic heritage.</p>
            <hr />
          </div> */}
            <div className='card-div'>
            
          <div className="card3">
            <div className='card-info'>
            <h5 className="event-title">Great Indian Food Festival in Mumbai</h5>
            <p className="event-description">The 'Great Indian Food Festival' in Mumbai features diverse cuisines, culinary workshops, chef demonstrations, and food tastings, celebrating India's rich gastronomic heritage.</p>
            </div>
          </div>
          <div className="card2">
            <div className='card-info'>
            <h5 className="event-title">Indian Gaming Show in New Delhi</h5>
            <p className="event-description">The 'Indian Gaming Show' in New Delhi showcases cutting-edge games, esports tournaments, industry panels, and interactive experiences, attracting gamers and enthusiasts nationwide.</p>
            </div>
          </div>
          <div className="card1">
            <div className='card-info'>
            <h5 className="event-title">Comic Con India in Mumbai</h5>
            <p className="event-description">Comic Con India in Mumbai gathers fans for celebrity meetups, panels, cosplay, and exclusive previews, celebrating pop culture in a vibrant, immersive environment.</p>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
