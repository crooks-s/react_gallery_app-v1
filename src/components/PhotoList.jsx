import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import NotFound from './NotFound';
import PropTypes from 'prop-types';

const PhotoList = ({ handleQuery, title, photos }) => {
  const { query } = useParams();

  useEffect(() => {
    if (query) {
    handleQuery(query);
    } else {
      handleQuery(title)
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

PhotoList.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array,
  handleQuery: PropTypes.func.isRequired
}

export default PhotoList;