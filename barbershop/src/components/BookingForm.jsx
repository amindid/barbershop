import React, {useState} from "react";

function BookingForm({addBooking}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && date && time && phone) {
            const booking = { 
                name,
                phone,
                time,
                date
            };
            addBooking(booking);
            setName('');
            setPhone('');
            setTime('');
            setDate('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Book an Appointment</h2>
            <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="tel" placeholder="Your Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            <input type="date"  value={date} onChange={(e) => setDate(e.target.value)} required/>
            <input type="time"  value={time} onChange={(e) => setTime(e.target.value)} required/>
            <button type="submit">Book Now</button>
        </form>
    );
}

export default BookingForm;