import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import apiKey from './config';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cats");

  const fetchData = (query) => {
  fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
  .then(response => response.json())
  .then(responseData => setPhotos(responseData.photos.photo))
  .catch(err => console.log("Error fetching and parsing data", err))
  }

  useEffect(() => {
    fetchData(query)
  }, [query]);

  return (
    <div>
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="cats" element={<PhotoList photos={photos} title={'cats'} />} />
        <Route path="dogs" element={<PhotoList photos={photos} title={'dogs'} />} />
        <Route path="computers" element={<PhotoList photos={photos} title={'computers'} />} />
        <Route path="/search/:query" element={<PhotoList photos={photos} />} />
      </Routes>
    </div>
  )
}

export default App
