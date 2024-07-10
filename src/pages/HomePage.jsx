// src/HomePage.js
import React from 'react';
import "../css/Home.css"; // Create a CSS file for styles
import NavBar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className='home'>
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <div>
              <h1 className='title'>Event Ease</h1>
              <p className='p'>
Event Ease offers premiere corporate event planning services for companies looking to engage and delight their attendees.
              </p>
            </div>
            <div>
            <button className="explore-button"><a href="/event">Explore Events</a></button>
            </div>
          </div>
          {/* <div className="col col-md-6">
            <div className="images">
              <img src="https://media.licdn.com/dms/image/C4E12AQE8VlZt4I9NWA/article-cover_image-shrink_600_2000/0/1633541755284?e=2147483647&v=beta&t=Z1jNNre59eoHglRFJ08J1OA3Gfmww3cmA4bnWgb3rXo" alt="Event Image 1"/>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
