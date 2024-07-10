
// import "../css/Navbar.css"
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from "../images/ee.jpg"
// const NavBar = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = !!localStorage.getItem('token');


//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   return (
//     <nav className='navbar'>
//     <div className='navbar-logo'><Link  to="/"><img className="logo" src={logo} /></Link></div>
//       <div className="div-1">
//         <div className="links-div">
//           <Link className="links" to="/">Home</Link>
//         </div>
        
//         {isAuthenticated && (
//           <div>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         )}
//         {/* <li>
//           <button onClick={handleCreateEventClick}>Create Event</button>
//         </li> */}
//         <div className="links-div">
//           <Link className="links" to="/event"> Events </Link>
//         </div>
//         <div className="links-div">
//           <Link className="links" to="/about-us"> About Us </Link>
//         </div>
//         <div className="links-div">
//               <Link className="links" to="/contact-us">Contact Us</Link>
//         </div>

//       </div>
//       <div className="div-2">
//       {!isAuthenticated && (
//           <>
//             <div>
//                 <Link className="btn-links" to="/login">
//               <button className="button">Login</button></Link>
//             </div>
//             <div>
//               <Link className="btn-links" to="/signup">
//             <button className="button">
//               Signup
//             </button>
//               </Link>
//             </div>
            
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext'; // Adjust the path as needed
import "../css/Navbar.css";
import logo from "../images/ee.jpg";

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext); // Use AuthContext

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'><Link to="/"><img className="logo" src={logo} alt="logo" /></Link></div>
      <div className="div-1">
        <div className="links-div">
          <Link className="links" to="/">Home</Link>
        </div>
        
        <div className="links-div">
          <Link className="links" to="/event"> Events </Link>
        </div>
        <div className="links-div">
          <Link className="links" to="/about-us"> About Us </Link>
        </div>
        <div className="links-div">
          <Link className="links" to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className="div-2">
        {!isAuthenticated && (
          <>
            <div>
              <Link className="btn-links" to="/login">
                <button className="button">Login</button>
              </Link>
            </div>
            <div>
              <Link className="btn-links" to="/signup">
                <button className="button">Signup</button>
              </Link>
            </div>
          </>
        )}
        {isAuthenticated && (
          <div>
            <button className='infor-button'><a href="/reservation">Let's plan your event</a></button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

