import React from 'react';

function Property({ property }) {
    return (
        <div>
            <h2>{property.name}</h2>
            <p>{property.location}</p>
            <p>{property.price} €</p>
            <img src={property.image} alt={property.name} />
        </div>
    );
}

export default Property;
