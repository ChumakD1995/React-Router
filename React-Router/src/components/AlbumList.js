import React, { useState } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';

function AlbumList({ userId }) {
  const [albums, setAlbums] = useState([]);
  
  const fetchAlbums = () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchAlbums}>Albums</button>
      {albums.map((album) => (
        <div key={album.id}>
          <h3>{album.title}</h3>
          <PhotoList albumId={album.id} />
        </div>
      ))}
    </div>
  );
}

export default AlbumList;
