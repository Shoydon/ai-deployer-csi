import React, { useState, useEffect } from 'react';

function Card({ data }) {
    return (
      <div className="card">
        {/* Display card content based on your data structure */}
        <img src={data.image} alt={data.title} />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        {/* ...other card content */}
      </div>
    );
  }

  export default Card;