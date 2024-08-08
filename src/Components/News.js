import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles:[
       ],
      loading: false,
    };
  }

  async componentDidMount() {
    let url = "https://feeds.bbci.co.uk/news/technology/rss.xml";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({ articles: parsedData.data });
//     BASE_URL = ""
// top_headlines_api = "<BASE_URL>/"
// everything_api = 
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="display-4 mb-3">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            // Only render NewsItem if title is not null, not empty, and not "Removed"
            if (element.title && element.title !== "[Removed]") {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={element.description ? element.description.slice(0, 60) : ""}
                    imageUrl={element.urlToImage?element.urlToImage:"https://uploads.metroimg.com/wp-content/uploads/2024/08/06182234/GettyImages-632549212.jpg"}
                    newsUrl={element.url}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

export default News;
