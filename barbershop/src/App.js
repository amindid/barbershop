import React, {useState} from 'react';
import BookingForm from './components/BookingForm'
import BookingList from './components/BookingList'
import './App.css';

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };
  return (
    <div className="App">
      <h1>Barber Shop Booking System</h1>
      <BookingForm addBooking={addBooking}/>
      <BookingList bookings={bookings}/>
    </div>
  );
}

export default App;
