import React, { useState } from 'react'

export default function TableReservation() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [people, setPeople] = useState('')
  const [occasion, setOccasion] = useState('Birthday')
  const [errors, setErrors] = useState({
    date: false,
    people: false
  })
  const [showModal, setShowModal] = useState(false)

  const validateForm = () => {
    const newErrors = {
      date: date.trim() === '',
      people: people.trim() === '' || parseInt(people) < 1 || parseInt(people) > 30
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setShowModal(true)
    }
  }

  return (
    <div className="container">
      <div className="reservation-card">
        <h2>Table reservation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={errors.date ? 'error' : ''}
              required
            />
            {errors.date && <span className="error-message">Please select a date</span>}
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="people">Number of people</label>
            <input
              type="number"
              id="people"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              min="1"
              max="30"
              className={errors.people ? 'error' : ''}
              required
            />
            {errors.people && <span className="error-message">Please enter a number between 1 and 30</span>}
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Date Night">Date Night</option>
              <option value="Business Meal">Business Meal</option>
            </select>
          </div>
          <button type="submit">Book a table</button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Reservation Completed!</h2>
            <p>
              Thank you for choosing Little Lemon! Your reservation has been successfully made. 
              You will receive a confirmation email with the details of your reservation. 
              We are excited to see you soon!
            </p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          position: relative;
          min-height: 100vh;
        }
        .reservation-card {
          background-color: #475569;
          color: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 400px;
          margin: 0 auto;
          margin-top: 150px;
          margin-bottom: 150px
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input, select {
          width: 100%;
          padding: 8px;
          border: 2px solid transparent;
          border-radius: 4px;
          background-color: white;
          color: #333;
        }
        input.error, select.error {
          border-color: #ff4d4d;
        }
        .error-message {
          color: #ff4d4d;
          font-size: 0.8em;
          margin-top: 5px;
          display: block;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #eab308;
          color: #333;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        button:hover {
          background-color: #ca8a04;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          max-width: 500px;
          width: 90%;
          text-align: center;
        }
        .modal h2 {
          color: #333;
          margin-bottom: 16px;
        }
        .modal p {
          color: #666;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .modal button {
          max-width: 200px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}