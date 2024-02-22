import React, { useState, useEffect } from 'react';
import './card.css'

function Card({ data }) {
    return (
      <div className="card">
        {/* Display card content based on your data structure */}
        <img src={`../images/1.jpg`} alt={data.title} style={{ width: '200px', height: '200px' }}/>
        <h2>{data.brand}</h2>
        <p>{data.model}</p>
        <p>{data.year_of_release}</p>
        {/* ...other card content */}
      </div>
    );
  }

  export default Card;