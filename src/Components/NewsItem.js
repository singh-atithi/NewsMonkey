import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, publishedAt, author } =
      this.props;
    return (
      <div
        className="card my-3 bg-dark py-3 px-3  "
        style={{ borderRadius: "2rem" }}
      >
        <img
          src={urlToImage}
          className="card-img-top"
          alt="..."
          style={{ border: "2px solid white", borderRadius: "2rem" }}
        />
        <div className="card-body">
          <h5 className="card-title text-white mb-3">{title}...</h5>
          <p className="card-text text-white">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By "{!author ? "Unknown" : author}" on "
              {new Date(publishedAt).toGMTString()} "
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-light btn-primary "
          >
            Read More
          </a>
          <pre
            className="card-text text-white"
            style={{ marginTop: "10px" }}
          ></pre>
        </div>
      </div>
    );
  }
}

export default NewsItem;
