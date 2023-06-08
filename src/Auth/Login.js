import React, { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Vérifie les identifiants
        const hardCodedCredentials = { username: 'user1', password: 'password1' };
        if (credentials.username === hardCodedCredentials.username && 
            credentials.password === hardCodedCredentials.password) {
            alert('Connexion réussie');
        } else {
            alert('Identifiants incorrects');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Nom d'utilisateur" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Mot de passe" required />
            <button type="submit">Se connecter</button>
        </form>
    );
}

export default Login;
