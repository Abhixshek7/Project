import React, { useState } from 'react';
import './forget.css'

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you would typically send a request to your server
        // to handle the password reset process.
        setMessage(`Password reset instructions sent to ${email}`);
        setEmail(''); // Clear the input field
    };

    return (
        <div className="forget-password-container">
            <h2>Reset Your Password</h2>
            <p>Please enter your email address. We will send you instructions to reset your password.</p>
            <form onSubmit={handleSubmit}>
                <h3>Email Address</h3>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="submit-btn">Send Reset Instructions</button>
            </form>
            {message && <p className="success-message">{message}</p>}
        </div>
    );
}
export default ForgetPassword;
