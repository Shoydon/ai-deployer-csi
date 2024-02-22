import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import cardData from '../data/cars.json'; // Import your data
import { map } from 'lodash';

function Home() {

  useEffect(() => {
    // Check if data is available before fetching
    if (cardData?.length > 0) {
      // setCardData(data);
      console.log("done");
    } else {
      console.error('Error fetching data from data.json.');
    }
  }, []);

  return (
    <div>
      Home
      <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
    </div>
  )
}

export default Home
