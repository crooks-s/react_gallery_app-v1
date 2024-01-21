import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import NotFound from './NotFound';

const PhotoList = (props) => {
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      props.handleQuery(query);
    } else {
      props.handleQuery(props.title)
    }
  }, [query, props.title]);

  const foundResults = () => {
    if (props.photos.length > 0) {
      return (
        <ul>
          {props.photos.map(photo => (
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