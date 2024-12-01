import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import defaultArticles from "./defarticle";
import InfiniteScroll from "react-infinite-scroll-component";

const  News=(props)=> {
const [articles,setArticles]=useState([])
const[loading,setLoading]=useState(false)
const[currentPage,setCurrentPage]=useState(1)
const[totalResults,setTotalResults]=useState(0)

  const fetchArticles = async () => {
    setLoading(true);
    props.setProgress(10);
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${currentPage}&pageSize=${articlesPerPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles && parsedData.articles.length > 0) {
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
       
        props.setProgress(40);
      } else {
        // If no articles returned, use the default articles
        setArticles(defaultArticles.slice(
          (currentPage - 1) * articlesPerPage,
          currentPage * articlesPerPage
        ))
        setTotalResults(defaultArticles.length)
        setLoading(false)
        props.setProgress(40);
      }
    } catch (error) {
      // On API failure, use the default articles
      setArticles(defaultArticles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
      ))
      setTotalResults(defaultArticles.length)
      setLoading(false)
      props.setProgress(40);
    }
    props.setProgress(100);
  };

  useEffect(() => {
    const fetchInitialArticles = async () => {
      await fetchArticles();
    };
    fetchInitialArticles();
  }, []); // Empty dependency array ensures this runs once on mount
  

  const handlePageChange = async (pageNumber) => {
    setCurrentPage( pageNumber)
    fetchArticles()
    
  };

  const fetchMoreData = async () => {
    setLoading(true);
    props.setProgress(10);
  
    try {
      // Use currentPage + 1 to fetch the next page of data
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${currentPage + 1}&pageSize=${articlesPerPage}`;
      let response = await fetch(url);
      let parsedData = await response.json();
  
      if (parsedData.articles && parsedData.articles.length > 0) {
        setArticles(prevArticles => prevArticles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults); // Correct setting totalResults
      } else {
        // If no articles returned, use the default articles
        setArticles(prevArticles => {
          const newArticles = defaultArticles.slice(
            (currentPage) * articlesPerPage,
            (currentPage + 1) * articlesPerPage
          );
          return prevArticles.concat(newArticles);
        });
        setTotalResults(defaultArticles.length);
      }
  
      setCurrentPage(prevPage => prevPage + 1); // Increment page only after fetching
    } catch (error) {
      // On API failure, use the default articles
      setArticles(prevArticles => {
        const newArticles = defaultArticles.slice(
          (currentPage) * articlesPerPage,
          (currentPage + 1) * articlesPerPage
        );
        return prevArticles.concat(newArticles);
      });
      setTotalResults(defaultArticles.length);
    } finally {
      setLoading(false);
      props.setProgress(40);
      props.setProgress(100);
    }
  };
  

    const { articlesPerPage } = props;
    const totalPages = Math.ceil(totalResults / articlesPerPage);

    return (
      <>
        <div className="container">
          <h2
            className="display-4 mt-5 pt-2"
            style={{ color: "#8a0000", fontWeight: "600" ,marginTop:"100px"}}
          >
            NewsMonkey - Top Headlines
          </h2>
          {/* {loading && <Spinner />} */}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !==totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articles.length > 0
                  ? articles.map((element) => {
                      if (element.title && element.title !== "[Removed]") {
                        return (
                          <div
                            className="col-md-4 col-sm-6 mb-3"
                            key={element.url}
                          >
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
      </>
    );
}

export default News;
