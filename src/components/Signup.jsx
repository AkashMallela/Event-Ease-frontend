import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import "../css/Signup.css"
import img from "../images/Conference.webp"
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { firstName, lastName, email, phone, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/signup', {
        firstName,
        lastName,
        email,
        phone,
        password
      });
      alert(res.data.msg); // Display response message from backend
      // Redirect logic here if needed
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError('Failed to signup'); // Display generic error if signup fails
      }
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='signup-main'>
        <div className='signup-img-div'>
          <img className='signup-img' src={img} alt="Signup" />
        </div>
        <div className='signup-form-div'>
          <center><h2 className='login-heading'>Signup</h2></center>
          <form className='signup-form' onSubmit={onSubmit}>
            <input className='signup-form-control' type="text" name="firstName" value={firstName} onChange={onChange} placeholder="First Name" required />
            <input className='signup-form-control' type="text" name="lastName" value={lastName} onChange={onChange} placeholder="Last Name" required />
            <input className='signup-form-control' type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
            <input className='signup-form-control' type="tel" name="phone" value={phone} onChange={onChange} placeholder="Phone Number" required />
            <input className='signup-form-control' type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
            <input
              className='signup-form-control'
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Confirm Password"
              required
            />
            {error && <p className='error'>{error}</p>}
            <button type="submit">Sign Up</button>
            <p>Already have an account? <Link className='login-link' to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

