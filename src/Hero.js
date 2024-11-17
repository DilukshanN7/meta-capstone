import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="pfirst">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations" className="reservebutton">
            <button>Reserve a Table</button>
          </Link>
        </div>
        <div className="rights">
          <img src="Image.png" className='right' alt="Little Lemon Dish" />
        </div>
      </div>

      <div className="second">
        <div className="top">
          <h1 className="h12">This week's specials!</h1>
          <Link to="/reservations" className="orderbutton">
            <button>Reserve a Table</button>
          </Link>
        </div>
        <div className="third">
          <div className="card">
            <img src="1st.png" alt="Greek Salad" height={180} width={300} />
            <p className="title">Greek Salad</p>
            <p className="sub">
              The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with
              crunchy garlic and rosemary croutons.
            </p>
            <p className="footer">Order Delivery</p>
          </div>
          <div className="card">
            <img src="2nd.png" alt="Lemon Dessert" height={180} width={300} />
            <p className="title">Lemon Dessert</p>
            <p className="sub">
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic
              as can be imagined.
            </p>
            <p className="footer">Order Delivery</p>
          </div>
          <div className="card">
            <img src="3rd.png" alt="Bruschetta" height={180} width={300} />
            <p className="title">Bruschetta</p>
            <p className="sub">
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive
              oil.
            </p>
            <p className="footer">Order Delivery</p>
          </div>
        </div>
      </div>

      <div className="fourth">
        <h1 className="fourthh1">Our Customers Love Us!</h1>
        <div className="cards">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      <div className="fifth">
        <div className="fifthinside">
          <div className="leftext">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="pfirst">
              Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but
              casual environment. The restaurant features a locally sourced menu with daily specials.
            </p>
          </div>
        </div>
        <div className="fifthinside">
          <div className="rightpics">
            <img src="guy1.png" alt="Chef" width={200} height={200} />
            <img src="guy2.png" alt="Team Member" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReviewCard = () => {
  return (
    <div className="reviewcard">
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        ))}
      </div>
      <h2>Review Title</h2>
      <h4>Review Body</h4>
      <div className="reviewer">
        <div>
          <img className="iconperson" src="Shape.png" alt="Reviewer" height={50} width={50} />
        </div>
        <div>
          <h5>Reviewer Name</h5>
          <h5>Date</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
