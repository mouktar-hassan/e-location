import React, { useState, useEffect } from 'react';
import Property from '../Property/Property';

function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Récupère les données en dur
        const propertyData = [
            { 
                name: 'Maison de campagne', 
                location: 'Provence', 
                price: 300000, 
                image: 'image1.jpg' 
            },
            { 
                name: 'Appartement en ville', 
                location: 'Paris', 
                price: 500000, 
                image: 'image2.jpg' 
            },
            // d'autres propriétés ici
        ];

        setProperties(propertyData);
    }, []);

    return (
        <div>
            {properties.map((property, index) => (
                <Property key={index} property={property} />
            ))}
        </div>
    );
}

export default PropertyList;
