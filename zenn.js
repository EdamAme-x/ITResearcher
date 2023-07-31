const fetch = require("node-fetch");
const cheerio = require("cheerio");

function get() {
  return fetch("https://zenn.dev")
    .then(res => res.text())
    .then(data => {
      const $ = cheerio.load(data);

      const viewArticlesContainers = $('[class^="View_articlesContainer"]');
      let result = "";

      viewArticlesContainers.each((index, element) => {
        const articleListContainers = $(element).find('[class^="ArticleList_listContainer"] > [class^="ArticleList_itemContainer"] > article > div > a');

        articleListContainers.each((index, articleElement) => {
          const href = $(articleElement).attr("href");
          const text = $(articleElement).text();
          result += `<a href="https://zenn.dev${href}">${text}</a>`;
        });
      });

      return result;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      return "";
    });
}

module.exports = get;
