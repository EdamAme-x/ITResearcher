let colis = require("./coliss");
let qiita = require("./qiita");
let zenn = require("./zenn");
let NumHash = require("./NumHash");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const icons = ["🔥", "💧", "🍂", "🍁", "🦊", "💳", "🌤"];

function getIcon() {
    return icons[Math.floor(Math.random() * icons.length)];
}

async function getArticles() {
    let rc = await colis();
    let rq = await qiita();
    let rz = await zenn();

    let returner = rc + rq + rz;

    let b = returner.split("</a>");

    b = shuffleArray(b);

    let newTags = "";
    for (let i = 0; i < b.length; i++) {
        const hash = NumHash(b[i]).slice(5);
        const icon = `<a id="icon">${getIcon()}</a>`;
        if (i === b.length - 1) {
            newTags += "<article-" + hash + " id='art'>" + icon + b[i] + "</article-" + hash + ">";
        } else {
            newTags += "<article-" + hash + " id='art'>" + icon + b[i] + "</a></article-" + hash + ">";
        }
    }

    return newTags;
}

module.exports = {
    getArticles
};
