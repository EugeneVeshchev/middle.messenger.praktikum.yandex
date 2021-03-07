import render from "../../utils/renderDom";
import ErrorPage from "../../components/common/ErrorPage/index";

render(
    '#app',
    new ErrorPage({
        code: 500,
        message: 'Что-то сломалось, но мы все поправим :)'
    })
)