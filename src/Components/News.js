import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import defaultArticles from "./defarticle";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Initialized as an empty array
      loading: false,
      currentPage: 1,
      totalResults: 0,
     
    };
  }

  fetchArticles = async () => {
    const { currentPage } = this.state;
    const { articlesPerPage } = this.props;
    this.setState({ loading: true });
    this.props.setProgress(10)
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${currentPage}&pageSize=${articlesPerPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles && parsedData.articles.length > 0) {
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        });
        this.props.setProgress(40)
      } else {
        // If no articles returned, use the default articles
        this.setState({
          articles: defaultArticles.slice(
            (currentPage - 1) * articlesPerPage,
            currentPage * articlesPerPage
          ),
          totalResults: defaultArticles.length,
          loading: false,
        });
        this.props.setProgress(40)

      }
    } catch (error) {
      // On API failure, use the default articles
      this.setState({
        articles: defaultArticles.slice(
          (currentPage - 1) * articlesPerPage,
          currentPage * articlesPerPage
        ),
        totalResults: defaultArticles.length,
        loading: false,
      });
      this.props.setProgress(40)

    }
    this.props.setProgress(100)
  };

  async componentDidMount() {
    await this.fetchArticles();
  }

  handlePageChange = async (pageNumber) => {
    this.setState({ currentPage: pageNumber }, () => {
      this.fetchArticles();
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // This ensures the scroll is immediate
    });
  };




  fetchMoreData = async() => {
   this.setState({currentPage:this.state.currentPage+1})
   const { currentPage } = this.state;
   const { articlesPerPage } = this.props;
   this.setState({ loading: true });
   this.props.setProgress(10)
   try {
     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${currentPage}&pageSize=${articlesPerPage}`;
     let data = await fetch(url);
     let parsedData = await data.json();

     if (parsedData.articles && parsedData.articles.length > 0) {
       this.setState({
         articles:this.state.articles.concat( parsedData.articles),
         totalResults: parsedData.totalResults,
         loading: false,
       });
       this.props.setProgress(40)
     } else {
       // If no articles returned, use the default articles
       this.setState({
         articles:  this.state.articles.concat(
          defaultArticles.slice(
            (currentPage - 1) * articlesPerPage,
            currentPage * articlesPerPage
          )
        ),
         totalResults: defaultArticles.length,
         loading: false,
       });
       this.props.setProgress(40)

     }
   } catch (error) {
     // On API failure, use the default articles
     this.setState({
       articles:  this.state.articles.concat(
          defaultArticles.slice(
            (currentPage - 1) * articlesPerPage,
            currentPage * articlesPerPage
          )
        ),
       totalResults: defaultArticles.length,
       loading: false,
     });
     this.props.setProgress(40)

   }
   this.props.setProgress(100)
  };










  render() {
    const { articles, currentPage, loading, totalResults } = this.state;
    const { articlesPerPage } = this.props;
    const totalPages = Math.ceil(totalResults / articlesPerPage);
    
    return (
      <>
        <div className="container my-3">
          <h2 className="display-4 mb-3 text-white">
            NewsMonkey - Top Headlines
          </h2>
          {/* {loading && <Spinner />} */}


          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >

<div className="container">
          <div className="row">
            {articles.length > 0
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
                          source={element.source.name}
                        />
                      </div>
                    );
                  }
                  return null;
                })
              : ""}
          </div>
          </div>
          </InfiniteScroll>
        </div>
        {!loading && !Spinner && <hr className="text-white" />}

{/*        
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
              disabled={currentPage >= totalPages}
              onClick={() => this.handlePageChange(currentPage + 1)}
              className="btn btn-primary"
              style={{ marginRight: "25px" }}
            >
              Next
            </button>
          </div> */}
        {/* </div> */}
      </>
    );
  }
}

export default News;
