let { getArticles } = require("./getArticles");

async function main() {
    const articles = await getArticles();
    console.log(articles);
}

module.exports = main;
