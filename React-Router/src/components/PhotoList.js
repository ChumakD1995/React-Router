import React, { useState } from 'react';
import axios from 'axios';

function PhotoList({ albumId }) {
  const [photos, setPhotos] = useState([]);
  
  const fetchPhotos = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchPhotos}>Photos</button>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}

export default PhotoList;
