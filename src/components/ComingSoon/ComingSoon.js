import React, { useEffect, useState } from "react";
import "./Index.css";
import logo from "../../assets/Images/Navbar-Logo.png";
import { Helmet } from "react-helmet-async";

const ComingSoon = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
     <Helmet>
        <title>AND SHOP - Coming-Soon</title>
      </Helmet>
      <div className="coming-section">
        <div className="conatiner">
          <div className="row">
            <div className="col-md-10 offset-md-3">
              <div className="coming-content">
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <div className="coming-title">
                  <h2>WE ARE COMING SOON</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </div>
                <div>
                  <div className="timer">
                    <ul id="demo">
                      <li>
                        <span className="timer-num">{timeRemaining.days}</span>Days
                      </li>{" "}
                      <li>
                        <span className="timer-num">{timeRemaining.hours}</span>
                        Hours
                      </li>{" "}
                      <li>
                        <span className="timer-num">{timeRemaining.minutes}</span>
                        Minutes
                      </li>{" "}
                      <li>
                        <span className="timer-num">{timeRemaining.seconds}</span>
                        Seconds
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="coming-subscribe">
                  <h2>SUBSCRIBE FOR OUR NEXT UPDATE</h2>
                  <div className="d-flex email-info">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <button className="sub-btn">subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
