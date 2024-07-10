import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/Checkout.css"; // Add your CSS file here
// import qr from '../images/Qr.png';


const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: 0,
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.amount) {
      setFormData(prevFormData => ({ ...prevFormData, amount: location.state.amount }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/pay', formData);
      alert("Thank you! We received your payment and will contact you very soon.");
      navigate('/');
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div className="checkout">
      <h1>Make a Payment</h1>
      <h2>Amount to be paid: ₹ 0.00</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className='form-control' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input className='form-control' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label  htmlFor="amount">Amount</label>
        <input className='form-control' type="number" id="amount" name="amount" value={formData.amount} readOnly />

        <div className='pay-button'>
          <button className='pay-button' type="submit">Pay Now</button>
        </div>
      </form>

      {/* <div className="qr">
        <h2>Scan to Pay</h2>
        <img className='qr-img' src={qr} alt="QR Code" />
      </div> */}
    </div>
  );
};

export default Checkout;
