import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Contact.css'
import NavBar from '../components/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    contactNumber: '',
    enquiry: ''
  });

  const navigate = useNavigate();

  const { email, contactNumber, enquiry } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(res.data); // Log response for testing
      // Redirect to thank you page for 5 seconds
      navigate('/thank-you');
      setTimeout(() => {
        navigate('/contact-us');
      }, 5000);
    } catch (err) {
      if (err.response) {
        alert('Failed to submit enquiry. Please try again.');
      }
    }
  };

  return (
    <div>
    <div>
      <NavBar />
    </div>
    <div className='contact-main'>
    <div className='contact'>
      <h2 className='contact-heading'>
        Contact Us
      </h2>
      <form className='contact-form'  onSubmit={onSubmit}>
        <div className='input-fields'>
        <label className='input-label'>Email:</label>
        <input className='contact-input'name='email' type="email" value={email} onChange={onChange} required />
        </div>
       
        <div className='input-fields'>
        <label className='input-label'>Contact Number:</label>
        <input className={`contact-input ${formData.lastName && 'filled'}`} type="tel"  name="contactNumber" value={contactNumber} onChange={onChange} required />
        </div>
       
        <div className='input-fields'>
        <label className='input-label'>Enquiry:</label>
        <textarea  name="enquiry" value={enquiry} onChange={onChange} required></textarea>
        </div>
        <button className='contact-btn' type="submit">Submit</button>
      </form>
      </div>
    </div>
      
    </div>
  );
};

export default ContactUs;
