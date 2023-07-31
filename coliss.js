const fetch = require("node-fetch");
const cheerio = require("cheerio");

function get() {
  return fetch("https://coliss.com/")
    .then(res => res.text())
    .then(data => {
      const $ = cheerio.load(data);
      const ulElement = $("#pickupEntry > ul > li > a");
      return $.html(ulElement);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      return "";
    });
}

module.exports = get;
