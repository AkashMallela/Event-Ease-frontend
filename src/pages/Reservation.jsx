import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import '../css/Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    businessType: '',
    eventDetails: '',
    businessCategory: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reservations', formData);
      console.log(response.data);
      navigate('/thank-you'); // Redirect to a thank you page
    } catch (error) {
      console.error('There was an error submitting the form!', error.response?.data || error.message);
      alert('please Use Another Email'); // Display alert to the user
    }
  };
  
  return (
    <div className="event-reservation">
      <NavBar />
      <div>
        <h1 className='reservation-heading'>READY TO PLAN YOUR NEXT EVENT?</h1>
        <p className='reservation-p'>Let's make it a great one. Fill out the form to request time with the EventEase team to talk through your event objectives and how we can make the event a success.</p>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='form-label'>First Name*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className='form-label'>Last Name*</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className='form-label'>Business Email*</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className='form-label'>Company Name*</label>
            <input
              type="text"
              name="companyName"
              className="form-control"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className='form-label'>Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>What type of business do you represent?*</label>
            <div className="form-check">
              <input
                type="radio"
                name="businessType"
                value="Client"
                className="form-check-input"
                checked={formData.businessType === 'Client'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Client (corporation, association, startup, other)</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessType"
                value="Partner"
                className="form-check-input"
                checked={formData.businessType === 'Partner'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Partner (production, photography, entertainment, other)</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessType"
                value="Venue"
                className="form-check-input"
                checked={formData.businessType === 'Venue'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Venue (hotel, convention & other venue)</label>
            </div>
          </div>
          <div className="form-group">
            <label>Tell us more about your event or business</label>
            <textarea
              name="eventDetails"
              className="form-control"
              value={formData.eventDetails}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <div className="form-group">
            <label>What type of business are you?*</label>
            <div className="form-check">
              <input
                type="radio"
                name="businessCategory"
                value="Production Agency"
                className="form-check-input"
                checked={formData.businessCategory === 'Production Agency'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Production Agency</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessCategory"
                value="Marketing Agency"
                className="form-check-input"
                checked={formData.businessCategory === 'Marketing Agency'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Marketing Agency</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessCategory"
                value="Photography / Videography"
                className="form-check-input"
                checked={formData.businessCategory === 'Photography / Videography'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Photography / Videography</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessCategory"
                value="Entertainment"
                className="form-check-input"
                checked={formData.businessCategory === 'Entertainment'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Entertainment</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessCategory"
                value="Specialty Supplier"
                className="form-check-input"
                checked={formData.businessCategory === 'Specialty Supplier'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Specialty Supplier</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessCategory"
                value="Decor"
                className="form-check-input"
                checked={formData.businessCategory === 'Decor'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Decor</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="businessCategory"
                value="Other"
                className="form-check-input"
                checked={formData.businessCategory === 'Other'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>
          <button type="submit" className="reservation-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
