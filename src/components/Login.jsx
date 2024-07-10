


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import "../css/Login.css"
// import NavBar from './Navbar';
// import "../css/Login.css"
// import loginImg from '../images/Conference.webp';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const { email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/login', formData);
//       console.log(res.data); // Log response for testing
//       // Redirect to homepage if login successful
//       navigate('/');
//     } catch (err) {
//       if (err.response && err.response.status === 400) {
//         alert(err.response.data.msg);
//       } else {
//         alert('Login failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className='login'>
//     <div>
//       <NavBar />
//     </div>
//       <div className='login-main'>
//       <div className='login-img-div'>
//         <img className='login-img' src={loginImg} alt='image' />
//       </div>
//       <div className='login-form-div'>
//       <div>
//         <center><h2 className='login-heading'>Login</h2></center>
//       </div>
//       <form className='login-form' onSubmit={onSubmit}>
//         <label className='form-label'>Email:</label>
//         <input className='form-control' type="email" placeholder="Enter your email" name="email" value={email} onChange={onChange} required />
        
//         <label className='form-label'>Password:</label>
//         <input className='form-control' type="password" placeholder="Enter your password" name="password" value={password} onChange={onChange} required />
        
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <Link to='/signup'>Signup</Link></p>

//       </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import  AuthContext  from "../components/AuthContext"; // Adjust the path as needed
import '../css/Login.css';
import NavBar from './Navbar';
import loginImg from '../images/Conference.webp';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use AuthContext

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);
      console.log(res.data); // Log response for testing
      login(res.data.token); // Update the login method with the token
      navigate('/');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.msg);
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className='login'>
      <NavBar />
      <div className='login-main'>
        <div className='login-img-div'>
          <img className='login-img' src={loginImg} alt='login' />
        </div>
        <div className='login-form-div'>
          <center><h2 className='login-heading'>Login</h2></center>
          <form className='login-form' onSubmit={onSubmit}>
            <label className='form-label'>Email:</label>
            <input className='login-form-control' type="email" placeholder="Enter your email" name="email" value={email} onChange={onChange} required />
            <label className='form-label'>Password:</label>
            <input className='login-form-control' type="password" placeholder="Enter your password" name="password" value={password} onChange={onChange} required />
            <button type="submit">Login</button>
          <p>Don't have an account? <Link className='signup-link' to='/signup'>Signup</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
