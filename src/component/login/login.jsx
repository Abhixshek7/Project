import React,{useState} from 'react';
// import google from "../../assets/google.png";
import logo from "../../assets/logo.jpeg";

import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', username, password);
    };

    const navigate = useNavigate();
    
    return (
        <div className="login-container">
            
            <div className="left-section">
                <img src={logo} alt="Company Logo" className="logo" /> {/* Logo above title */}
                <h2>Finance and Ease</h2>
                <p>Simplify your finances, focus on what matters.<br /> FinEase - where accounting meets ease.</p>
            </div>

            <div className="right-section">
                <form onSubmit={handleSubmit}>
                    <h3>Username or email</h3>
                    <input 
                        type="text" 
                        placeholder="Enter the username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <h3>Password</h3>
                    <input 
                        type="password" 
                        placeholder="Enter the password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Password"
                        required
                    />

                    {/* Using button with navigate onClick */}
                    <div
                        type="button" 
                        className="forgot-password" 
                        onClick={() => navigate("/forget")}
                    >
                        Forget password?
                    </div>

                    <button type="submit" className="sign-in-btn">Sign in</button>

                    <button type="button" className="google-signin">
                        {/* <img 
                            src={google} 
                            alt="Google Logo" 
                            className="google-logo"
                        /> */}
                        Sign in with Google
                    </button>

                    <div className="create-account">
                        <span>Don't have an account? </span>
                        <div 
                            type="button" 
                            className="create-account-btn">
                            Create New Account
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
