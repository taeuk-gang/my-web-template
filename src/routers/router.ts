import { Router } from '@vaadin/router';

import '../pages/base-layout/base-layout';

export let router: Router;

const initRouter = (): Router => {
  const router: Router = new Router(document.querySelector('#root')); 
  router.setRoutes([
    {
      path: '/',
      component: 'base-layout',
      children: [
        {
          path: '/', 
          component: 'page-home',
          action: async () => {
            await import('../pages/page-home/page-home');
          },
        },
        {
          path: '/test', 
          component: 'page-test',
          action: async () => {
            await import('../pages/page-test/page-test');
          },
        },
      ]
    },
    {
      path: '(.*)', 
      component: 'page-404',
      action: async () => {
        await import('../pages/page-404/page-404');
      },
    }
  ]);

  return router;
}

window.addEventListener('load', () => { 
  router = initRouter();
});


