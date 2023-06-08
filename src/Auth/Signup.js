import React, { useState } from 'react';

function Signup() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // stocke les données de l'utilisateur dans le localStorage
        localStorage.setItem('user', JSON.stringify(user));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" onChange={handleChange} placeholder="Prénom" required />
            <input type="text" name="lastName" onChange={handleChange} placeholder="Nom" required />
            <input type="text" name="username" onChange={handleChange} placeholder="Nom d'utilisateur" required />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Mot de passe" required />
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default Signup;
