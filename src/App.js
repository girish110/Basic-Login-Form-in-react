import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage';

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    navigate('/welcome', { state: formData });
  };

  return (
    
    <div className="login">
      <h1>LOGIN</h1>
      <form className="loginform">
        <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" placeholder="enter name" onChange={handleChange} /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" placeholder="enter password" onChange={handleChange} /><br />
        <input class="button" type="button" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}


function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default Main;
