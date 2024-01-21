import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import NoResults from './NoResults';
import PropTypes from 'prop-types';

const PhotoList = ({ handleQuery, title, photos }) => {
  const { query } = useParams();

  useEffect(() => {
    const searchQuery = query || title;
    handleQuery(searchQuery)
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
      return (<NoResults />);
    }
  }

  return (
    <div className="photo-container">
      <h2>Results for {query || title}</h2>
      {foundResults()}
    </div>
  );
}

PhotoList.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array,
  handleQuery: PropTypes.func.isRequired
}

export default PhotoList;