import Router from '../modules/router/Router';

export const navigateTo = (path: string) => (e: Event) => {
  e.preventDefault();
  console.log('path', path);
  const router = new Router();
  router.go(`${path}/`);
};
