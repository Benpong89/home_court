//Working Solution

// let city = "Boston";
// let url =
//   "https://newsapi.org/v2/everything?" +
//   `q=(NHL OR NFL OR NBA) AND ${city}&` +
//   "language=en&" +
//   "from=2018-09-29&" +
//   "sortBy=popularity&" +
//   "apiKey=2980c7dbc07f435491969d70e3e589d1";
//
// export async function getNews() {
//   let result = await fetch(url).then(response => response.json());
//   console.log(result);
//   return result.articles;
// }
////

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     };
//   }
//
//   render() {
//     return (
//       //...
//       <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
//       //...
//     );
//   },
//
//   updateInputValue(evt) {
//     this.setState({
//       inputValue: evt.target.value
//     });
//   }
// });

// 'sources =bleacher-report&'
//Class Method test
////// import React from "react";
//
// class News extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.getNews = this.getNews.bind(this);
//   }
//
//   getNews() {
//     let url =
//       "https://newsapi.org/v2/everything?" +
//       "sources=bleacher-report&" +
//       "q=Sports&" +
//       "from=2018-09-30&" +
//       "sortBy=popularity&" +
//       "apiKey=2980c7dbc07f435491969d70e3e589d1";
//
//     let result = fetch(url).then(response => response.json());
//     console.log(result);
//     return result.articles;
//   }
//
//   render() {
//     return <Main func={this.getNews} />;
//   }
// }
//
// export default News;
