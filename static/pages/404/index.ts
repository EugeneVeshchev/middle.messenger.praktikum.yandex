import render from "../../utils/renderDom";
import ErrorPage from "../../components/common/ErrorPage/index";

render(
    '#app',
    new ErrorPage({
        code: 404,
        message: 'Не можем найти такую страницу :)'
    })
)