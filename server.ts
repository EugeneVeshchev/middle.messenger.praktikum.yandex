// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/static`, {
  extensions: ['svg', 'png', 'ico'],
}));
app.use(express.static(`${__dirname}/dist`, {
  extensions: ['js', 'css'],
}));

app.get('/*', (_, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
