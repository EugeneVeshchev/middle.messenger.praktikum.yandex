import Router from "./modules/router/Router";
import {ChatsPage} from "./pages/chats";
import {SignInPage} from "./pages/sign-in";
import {SignUpPage} from "./pages/sign-up";
import {ProfilePage} from "./pages/profile";

const router = new Router("#app");

router
    .use('/chats/', ChatsPage)
    .use('/sign-in/', SignInPage)
    .use('/sign-up/', SignUpPage)
    .use('/profile/', ProfilePage)
    .start()
