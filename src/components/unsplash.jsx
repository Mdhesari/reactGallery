import React, { Component } from "react";

const Unsplash = ({ url, key }) => (
  <div className="image-item" key={key}>
    <img src={url} />
  </div>
);

export default Unsplash;
