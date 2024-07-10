import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/thankyou.css";

export default function ThankYou() {
  const [count, setCount] = useState(5); // Countdown from 5 seconds
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timeoutId);
          navigate("/"); // Redirect to home page
        }
        return prevCount - 1;
      });
    }, 1000); // Countdown every 1 second

    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <div className="thank">
      <h1>Thank you for your response. We will reachout to you soon!!</h1>
      <h2>Redirecting to Home Page in {count} seconds...</h2>
    </div>
  );
}
