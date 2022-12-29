import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehau7gw', 'template_gpvazpd', form.current, 'uwKpNV6vT8t2NUEwK').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="Join" id="Join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text">With us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your email address" />
          <button className="btn btn-j" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
