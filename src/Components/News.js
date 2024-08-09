import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: [], // Initialized as an empty array
      loading: false,
      currentPage: 1,
    };
  }

  async componentDidMount() {
    await this.fetchArticles();
  }

  fetchArticles = async () => {
    this.setState({ loading: true });
    const { currentPage } = this.state;
    const { articlesPerPage } = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=758095a5ffd144209113833257f14700&page=${currentPage}&pageSize=${articlesPerPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlePageChange = async (pageNumber) => {
    this.setState({ currentPage: pageNumber }, () => {
      this.fetchArticles(); // Fetch new articles when the page changes
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // This ensures the scroll is immediate
    });
  };

  render() {
    const { articles, currentPage, loading } = this.state;
    const { articlesPerPage } = this.props;
    const { category } = this.props;
    const { author } = this.props;
    const indexofLastArticle = currentPage * articlesPerPage;
    const indexofFirstArticle = indexofLastArticle - articlesPerPage;

    return (
      <>
        <div className="container my-3">
          <h2 className="display-4 mb-3 text-white">
            NewsMonkey - Top Headlines
          </h2>
          {loading && <Spinner />}
          <div className="row">
            {!loading && articles.length > 0
              ? articles.map((element) => {
                  if (element.title && element.title !== "[Removed]") {
                    return (
                      <div className="col-md-4 col-sm-6 mb-3" key={element.url}>
                        <NewsItem
                          title={element.title}
                          description={
                            element.description
                              ? element.description
                              : "Open To View"
                          }
                          publishedAt={element.publishedAt}
                          urlToImage={
                            element.urlToImage
                              ? element.urlToImage
                              : "https://random.imagecdn.app/500/150"
                          }
                          author={element.author}
                          newsUrl={element.url}
                        />
                      </div>
                    );
                  }
                  return null;
                })
              : ""}
          </div>
        </div>

        <hr className="text-white" />
        <div
          style={{
            width: "100vw",
            position: "fixed",
            bottom: "0",
            backgroundColor: "#8d99ae",
            border: "2px solid white",
            borderRadius: "5px",
          }}
        >
          <div className="d-flex justify-content-between pt-1 pb-1">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => this.handlePageChange(currentPage - 1)}
              className="btn btn-primary"
              style={{ marginLeft: "25px" }}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={articles.length < articlesPerPage}
              onClick={() => this.handlePageChange(currentPage + 1)}
              className="btn btn-primary"
              style={{ marginRight: "25px" }}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
