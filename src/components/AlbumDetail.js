import React from "react";

const AlbumDetail = props => ( 
  <div className="text-center">
    <img
      alt={props.title}
      className="img-fluid"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3><b>Artist:</b> {props.artist}</h3>
    <h3><b>Album:</b> {props.title}</h3>
    <h3><b>Genre:</b> {props.genre}</h3>
    <h3><b>Released:</b> {props.released}</h3>
  </div>
);

export default AlbumDetail;
