import React from "react";

const AlbumDetail = props => ( 
  <div className="text-center">
    <img
      alt={props.title}
      className="img-fluid"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3>Artist(s): {props.artistName}</h3>
    <h3>Genre: {props.primaryGenreName}</h3>
    <h3>Released: {props.releaseDate}</h3>
  </div>
);

export default AlbumDetail;
