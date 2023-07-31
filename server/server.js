const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 2189;

const { getArticles } = require("../getArticles");

app.get('/', async (req, res) => {
    try {
        const articles = await getArticles();

        const htmlData = await fs.readFile('./page/index.html', 'utf8');
        const html = htmlData.replace("${articles}", articles);

        res.send(html);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

// /:path => ./page/:path
app.get('/:path', async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../page', req.params.path);
        const extname = path.extname(filePath);

        if (extname === '.html') {
            const htmlData = await fs.readFile(filePath, 'utf8');
            res.send(htmlData);
        } else {
            res.sendFile(filePath);
        }
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
