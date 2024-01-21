const Photo = ({ server, id, secret }) => {
  return (
    <li>
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg
`} alt="" />
    </li>
  );
}

export default Photo;