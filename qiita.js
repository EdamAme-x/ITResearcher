const fetch = require("node-fetch");
const cheerio = require("cheerio");

function get() {
  return fetch("https://qiita.com")
    .then(res => res.text())
    .then(data => {
      const $ = cheerio.load(data);

      const elements = $("main > div > article > h2 > a");
      let result = "";

      elements.each((index, element) => {
        result += $.html(element);
      });

      return result;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      return "";
    });
}

module.exports = get;
