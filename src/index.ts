import Router from './modules/router/Router';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Profile } from './pages/profile';
import { Chats } from './pages/chats';

const router = new Router('#app');

router
  .use('/', Chats)
  .use('/chats/', Chats)
  .use('/sign-in/', SignIn)
  .use('/sign-up/', SignUp)
  .use('/profile/', Profile)
  .start();
