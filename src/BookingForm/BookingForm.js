import React, { useState } from 'react';

function BookingForm() {
    const [booking, setBooking] = useState({
        name: '',
        email: '',
        date: ''
    });

    const handleChange = e => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // stocke les données de réservation dans le localStorage
        localStorage.setItem('booking', JSON.stringify(booking));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} placeholder="Nom" required />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
            <input type="date" name="date" onChange={handleChange} required />
            <button type="submit">Réserver</button>
        </form>
    );
}

export default BookingForm;
