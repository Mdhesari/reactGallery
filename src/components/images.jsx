import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./image";
import { toJson } from "unsplash-js";

class Images extends Component {
  setupUnsplash() {
    const Unsplash = require("unsplash-js").default;

    return new Unsplash({
      applicationId:
        "ff743195ea365b0a790a6bfbedffcba6ea4fb7173bfc89ff8517041e5a196109",
      secret: "24ec669236e980af76a7865c148fbd7edd91668c278992e4713e13f41c299d0d"
    });
  }
  state = {
    unsplash: this.setupUnsplash(),
    images: [],
    count: 10,
    start: 1
  };

  componentDidMount = () => {
    const { unsplash, count, start } = this.state;
    unsplash.photos
      .listPhotos(start, count, "latest")
      .then(toJson)
      .then(images => {
        this.setState({ images });
      });
  };

  fetchImages = () => {
    let { unsplash, count, start } = this.state;
    start += 1;
    this.setState({start});
    unsplash.photos
      .listPhotos(start, count, "latest")
      .then(toJson)
      .then(images => {
        this.setState({ images: this.state.images.concat(images) });
      });
  };
  render() {
    return (
      <div className="images">
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
