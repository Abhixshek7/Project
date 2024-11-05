import React, { useState } from 'react';
// import google from "../../assets/google.png";
import logo from "../../assets/logo.jpeg";
import './signup.css'; // Import CSS here for component styling

function LoginForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { file });
  };

  return (
    <div className="container">
      <div className="left-panel">
        <img src={logo} alt="Cloud Accounting Logo" className="logo" />
        <h2>Finance and Ease</h2>
        <p>Simplify your finances, focus on what matters.<br />FinEase - where accounting meets ease.</p>
      </div>

      <div className="right-panel">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter the username" required />
          </div>

          <div className="input-group">
            <label>Company name</label>
            <input type="text" placeholder="Enter the company name" required />
          </div>

          <div className="input-group">
            <label>Email address</label>
            <input type="email" placeholder="Enter the email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter the password" required />
          </div>

          <div className="input-group">
            <label>Attach File (Optional)</label>
            <input type="file" onChange={handleFileChange} />
          </div>

          <button type="submit" className="submit-btn">Sign up</button>

          <div className="or-container">
            <hr /> <span>or</span> <hr />
          </div>

          <button type="button" className="google-btn">
            {/* <img src={google} alt="Google Logo" /> */}
            Sign in with Google
          </button>

          <p className="signin-text">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
