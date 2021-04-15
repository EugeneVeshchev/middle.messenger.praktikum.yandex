const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static(`${__dirname}/static`, {
    index: ['index.js', 'template.js'],
    extensions: ['js', 'css', 'svg', 'png']
}));

app.use('/*', express.static(`${__dirname}/static`))

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
