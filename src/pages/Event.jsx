
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Event.css"
import NavBar from '../components/Navbar';
import food from '../images/food.webp'


const events = [
  {
    title: "Food is Life",
    date: "24th August 2024",
    time: "10:00 AM to 8:00 PM",
    venue: "Anna Salai Mount Road, The Island, Park Town, Chennai, Tamil Nadu 600003",
    pprice: "1499/- only",
    description: "Join us for a delightful event featuring diverse food stalls, each offering unique culinary creations.",
    image: food,
  },
  {
    title: "Celebrity Meet Up",
    date: "5th October 2024",
    time: "7:00 PM to 10:00 PM",
    venue: "Elpro City Square Mall, MG Rd, Chinchwad Gaon, Chinchwad, Pimpri-Chinchwad, Maharashtra 411033",
    price: "709/- only",
    description: "Meet and greet your favourite celebrity \"Mr. Saif Ali Khan\" enjoy an unforgettable experience and capture memorable moments.",
    image: "https://www.shutterstock.com/image-photo/crowd-fans-taking-photographs-on-600nw-414112579.jpg",
  },
  {
    title: "Garba Event",
    date: "2nd September 2024",
    time: "7:00 PM to 11:30 PM",
    venue: "Sector 11, Gandhinagar, Gandhinagar-Gujarat - 382016",
    price: "500/- only",
    description: "Join us for a night of vibrant garba dance, music and celebration.",
    image: "https://pbs.twimg.com/media/FdqNplCVQAAdear?format=jpg&name=large",
  },
  {
    title: "Gaming pub",
    date: "20th December 2024",
    time: "4:00 PM to 9:00 PM",
    venue: "243, Tamil Sangam Road, Sion East, Sion, Mumbai, Maharashtra 400022",
    price: "2999/- only",
    description: "Join us for an exciting game night filled with fun, friendly competition, and amazing prizes!",
    image: "https://www.gpj.com/wp-content/uploads/2019/05/Gaming_Industry_Page_body_image.13.png",
  }
];

const EventPage = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate('/checkout', { state: { amount: events.price } });
  };
  

  return (
    <div>
        <NavBar/>
        <div className='event'>
        <div className='event-infor'>
          <h1 className='infor-h1'>Your Events, Our Expertise</h1>
          <p className='infor-p'>
          From incentive trips to your annual strategy meetings, we'll help you plan every detail.
          </p>
          <button className='infor-button'>
          <a href="/reservation">Let's plan your event</a>
          </button>
        </div>
        </div>
      <div className="event-container">
        <div className='heading'>
        <center><h1 >Check Out Our Amazing Events</h1></center>
        </div>
        {/* {events.map((event, index) => (
          <div className="event-info" key={index}>
            <div className='image'>
            <img className='event-img' src={event.image} alt="Event Image" />
            </div>
            <div className='details'>
            <h2><b>{event.title}</b></h2>
            <p><b>Date: </b>{event.date}</p>
            <p><b>Time: </b>{event.time}</p>
            <p><b>Venue: </b>{event.venue}</p>
            <p><b>Rate: </b>{event.rate}</p>
            <p>{event.description}</p>
            <button className="button" onClick={() => navigate('/checkout')}>Book Now !!</button>
            </div>
          </div>
        ))} */}
        <div class="event-info">
        <div className='image'>
        <img className='event-img'  src={food} alt="Event"/>
        </div>
        <div className='details'>
        <h2><b>Food is Life</b></h2>
        <p><b>Date: </b> 24 <sup> th </sup> Auguest 2024 </p>
        <p><b>Time: </b> 10.00 AM To 8.00 PM</p>
        <p><b>Venue: </b> Anna Salai Mount Road, The Island, Park Town, Chennai, Tamil Nadu 600003</p>
        <p><b>price: </b> 1499/- only</p>
        <p>Join us for a delightful event featuring diverse food stalls, each offering unique culinary creations.</p>
        <button className="button" onClick={handleBookNow}>Book Now !!</button>
        </div>
       </div>
       <div class="event-info">
        <div className='details'>
        <h2><b>Celebrity Meet Up</b></h2>
        <p><b>Date: </b> 5 <sup> th </sup> Octobar 2024 </p>
        <p><b>Time: </b> 7.00 PM To 10.00 PM</p>
        <p><b>Venue: </b>  Elpro City Square Mall, MG Rd, Chinchwad Gaon, Chinchwad, Pimpri-Chinchwad, Maharashtra 411033</p>
        <p><b>price: </b> 709/- only</p>
        <p>Meet and greet your favourite celebrity " Mr. Saif Ali Khan " enjoy an unforgottable experience and capture memorable moments</p>
        <button className="button" onClick={handleBookNow}>Book Now !!</button>
        </div>
        <div className='image'>
        <img className='event-img' src="https://www.shutterstock.com/image-photo/crowd-fans-taking-photographs-on-600nw-414112579.jpg" alt="Event"/>
        </div>
    </div>
    <div class="event-info">
        <div className='image'>
        <img className='event-img' src="https://pbs.twimg.com/media/FdqNplCVQAAdear?format=jpg&name=large" alt="Event"/>
        </div>
       <div className='details'>
       <h2><b>Garba Event</b></h2>
        <p><b>Date: </b> 2 <sup> nd </sup> September 2024 </p>
        <p><b>Time: </b> 7.00 PM To 11.30 PM</p>
        <p><b>Venue: </b> Sector 11, Gandhinagar, Gandhinagar-Gujarat - 382016</p>
        <p><b>price: </b> 500/- only</p>
        <p>Join us for a night of vibrant garba dance , music and celebration and lots of fun</p>
        <button className="button" onClick={handleBookNow}>Book Now !!</button>
       </div>
    </div>
    <div class="event-info">
        <div className='details'>
        <h2><b>Gaming pub</b></h2>
        <p><b>Date: </b> 20 <sup> th </sup> December 2024 </p>
        <p><b>Time: </b> 4.00 PM To 9.00 PM</p>
        <p><b>Venue: </b>  243, Tamil Sangam Road, Sion East, Sion, Mumbai, Maharashtra 400022</p>
        <p><b>price: </b> 2999/- only</p>
        <p>join us for an exiting game night filled with fun, friendly compition and amazing prices!</p>
        <button className="button" onClick={handleBookNow}>Book Now !!</button>
        </div>
    <div className='image'>
        <img className='event-img' src="https://www.gpj.com/wp-content/uploads/2019/05/Gaming_Industry_Page_body_image.13.png" alt="Event"/>
    </div>
    </div>
      </div>
    </div>
  );
};

export default EventPage;
