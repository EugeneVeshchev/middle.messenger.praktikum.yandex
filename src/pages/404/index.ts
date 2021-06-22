import render from "../../utils/renderDom";
import ErrorPage from "../../components/common/error-page";

render(
    '#app',
    new ErrorPage({
        code: 404,
        message: 'Не можем найти такую страницу :)'
    })
)
