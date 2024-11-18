import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Reservations from './Reservations';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src="Logo.png" alt="Restaurant Logo" width={230} height={67} />
        <nav>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <Link to="/reservations">Reservations</Link>
          <a href="#order-online">Order Online</a>
          <a href="#login">Login</a>
        </nav>
      </div>

      <Routes>
        <Route path='/meta-capstone' element={<Hero />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>

      <div className="realfooter">
        <div className="footerlogo">
          <img src="floho.png" alt="Footer Logo" />
        </div>

        <div className="footernav">
          <nav>
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#order-online">Order Online</a>
            <Link to="/reservations">Reservation</Link>
          </nav>
        </div>
        <div className="footernav">
          <nav>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#online-shopping-policy">Online Shopping Policy</a>
            <a href="#food-policy">Food Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#faqs">FAQs</a>
          </nav>
        </div>
        <div className="footernav">
          <nav>
            <a href="#food-courses">Food Courses</a>
            <a href="#partners">Our Partners</a>
            <a href="#google-maps">Map in Google Maps</a>
            <a href="#food-process">Food Making Process</a>
            <a href="#story">Our Story</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
