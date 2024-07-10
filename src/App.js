

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './components/Signup';
import Login from './components/Login';
import Checkout from './pages/Checkout';
// import Payment from './components/Payment';
import AboutPage from './pages/About';
// import Reservation from './pages/Reservation';
// import CreateEvent from './components/CreateEvent';
// import ProtectedRoute from './components/ProtectedRoute';
import EventPage from './pages/Event';
import ContactUs from './pages/Contact';
import Thankyou from './pages/Thankyou';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element= {<Login/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/thank-you" element={<Thankyou />}/>

      </Routes>
    </Router>
  );
};

export default App;

