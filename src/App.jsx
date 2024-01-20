import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import apiKey from './config';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import Photo from './components/Photo';

const App = () => {
  const [] = useState();

  const fetchData = (query) => {
  fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`)
  .then()
  }

  return (
    <div>
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={} />
        <Route path="cats" element={<PhotoList />} />
        <Route path="dogs" element={<PhotoList />} />
        <Route path="computers" element={<PhotoList />} />
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </div>
  )
}

export default App
