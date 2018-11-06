import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], input: "New York", show: false };
    this.fetchNews = this.fetchNews.bind(this);
    this.getNews = this.getNews.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  async getNews() {
    console.log(`${process.env.REACT_APP_NEWS_API_KEY}`);
    let url =
      "https://newsapi.org/v2/everything?" +
      `q=(NHL OR NFL OR NBA OR MLB) AND ${this.state.input}&` +
      "language=en&" +
      "from=2018-10-31&" +
      "sortBy=publishedAt&" +
      `apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    let result = await fetch(url).then(response => response.json());
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

  componentDidMount() {
    this.setState({
      input: ""
    });
  }

  render() {
    const newsArticlesA = this.state.articles
      .slice(0, this.state.articles.length / 2)
      .map((article, idx) => {
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

    const newsArticlesB = this.state.articles
      .slice(this.state.articles.length / 2)
      .map((article, idx) => {
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

    const Modal = ({ toggleModal, show }) => {
      return (
        <div className={show ? "modal show" : "modal hide"}>
          <section className="modal-main">
            Test Modal Message
            <button onClick={toggleModal}>Close Modal</button>
          </section>
        </div>
      );
    };

    return (
      <div className="main-container">
        <h1 className="main-title text1">HOME COURT</h1>
        <div className="credit">
          <a href="https://github.com/Benpong89">Github</a>
          <a href="https://www.linkedin.com/in/ben-pongsanarakul-bb21922b">
            LinkedIn
          </a>
        </div>
        <h3 className="main-title text2">
          Get updated on your favorite sports!
        </h3>
        <form className="search-box" onSubmit={this.handleSubmit}>
          <input
            className="search-box-input"
            placeholder="type your search here..."
            value={this.state.input}
            onChange={e => this.updateInputValue(e)}
          />
          <input className="hidden" type="submit" />
        </form>
        <div className="articles-container">
          <ul>{newsArticlesA}</ul>
          <ul>{newsArticlesB}</ul>
        </div>
        );
      </div>
    );
  }
}

export default Main;
