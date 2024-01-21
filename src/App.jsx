import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import apiKey from './config';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import NotFound from "./components/NotFound";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cats");

  const fetchData = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setPhotos(responseData.photos.photo))
      .catch(err => console.log("Error fetching and parsing data", err))
  }

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
    fetchData(newQuery);
  }

  return (
    <div>
      <Search handleQuery={handleQuery} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="cats" element={<PhotoList photos={photos} title={'cats'} handleQuery={handleQuery} />} />
        <Route path="dogs" element={<PhotoList photos={photos} title={'dogs'} handleQuery={handleQuery} />} />
        <Route path="computers" element={<PhotoList photos={photos} title={'computers'} handleQuery={handleQuery} />} />
        <Route path="/search/:query" element={<PhotoList photos={photos} handleQuery={handleQuery} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;