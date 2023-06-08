import React, { useState, useEffect } from 'react';

function BookingList() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const bookingData = JSON.parse(localStorage.getItem('bookings')) || [];
        setBookings(bookingData);
    }, []);

    return (
        <div>
            {bookings.map((booking, index) => (
                <div key={index}>
                    <h2>{booking.name}</h2>
                    <p>{booking.email}</p>
                    <p>{booking.date}</p>
                </div>
            ))}
        </div>
    );
}

export default BookingList;
