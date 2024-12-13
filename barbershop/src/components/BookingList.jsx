import React from "react";

function BookingList({bookings}) {
    return(
        <div>
            <h2>Booked Appointments</h2>
            {bookings.length > 0 ? (
                <ul>
                    {bookings.map((booking, index) => (
                        <li key={index}>
                            {booking.name} - {booking.date} at {booking.time}
                        </li>
                    ))}
                </ul>
                ) : ( <p>No Bookings yet</p> )
            }
        </div>
    );
}

export default BookingList;