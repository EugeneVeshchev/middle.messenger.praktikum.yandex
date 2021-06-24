import render from '../../utils/renderDom';
import ErrorPage from '../../components/common/error-page';

render(
  '#app',
  new ErrorPage({
    code: 500,
    message: 'Что-то сломалось, но мы все поправим :)',
  }),
);
