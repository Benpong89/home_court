import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], input: "New York" };
    this.fetchNews = this.fetchNews.bind(this);
    this.getNews = this.getNews.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getNews() {
    console.log(`${process.env.REACT_APP_NEWS_API_KEY}`);
    let url =
      "https://newsapi.org/v2/everything?" +
      `q=(NHL OR NFL OR NBA OR MLB) AND ${this.state.input}&` +
      "language=en&" +
      "from=2018-09-29&" +
      "sortBy=popularity&" +
      `apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    let result = await fetch(url).then(response => response.json());
    // console.log(result);
    return result.articles;
  }

  fetchNews(e) {
    this.getNews().then(articles => this.setState({ articles }));
  }

  componentWillMount() {
    this.fetchNews();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchNews();
  }

  updateInputValue(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    const newsArticles = this.state.articles.map((article, idx) => {
      return (
        <div className="article-box" key={idx}>
          <li className="article-title">
            <a className="article-title" href={article.url}>
              {article.title}
            </a>
          </li>
          <img className="article-image" src={article.urlToImage} alt="" />
          <li className="article-description">{article.description}</li>
          <li className="article-source">Source: {article.source.name}</li>
          <li className="article-time">{article.publishedAt}</li>
        </div>
      );
    });

    return (
      <div className="main-container">
        <h1 className="main-title">HOME COURT</h1>
        <h3 className="sub-main-title">
          Get updated on your favorite sports. Search by city or state.{" "}
        </h3>
        <form className="search-box" onSubmit={this.handleSubmit}>
          <input
            className="search-box-input"
            value={this.state.input}
            onChange={e => this.updateInputValue(e)}
          />
          <input className="hidden" type="submit" />
        </form>
        <ul>{newsArticles}</ul>
      </div>
    );
  }
}

export default Main;
