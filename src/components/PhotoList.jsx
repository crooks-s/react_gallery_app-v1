import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import NotFound from './NotFound';

const PhotoList = ({ handleQuery, title, photos }) => {
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      handleQuery(query);
    } else {
      handleQuery(props.title)
    }
  }, [query, title]);

  const foundResults = () => {
    if (photos.length > 0) {
      return (
        <ul>
          {photos.map(photo => (
            <Photo
              key={photo.id}
              id={photo.id}
              server={photo.server}
              secret={photo.secret}
            />
          ))}
        </ul>
      );
    } else {
      return (<NotFound />);
    }
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      {foundResults()}
    </div>
  );
}

export default PhotoList;