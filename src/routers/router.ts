import { Router } from '@vaadin/router';

import '../pages/base-layout/base-layout';

const initRouter = (): void => {
  const router: Router = new Router(document.querySelector('#root')); 
  router.setRoutes([
    {
      path: '/',
      component: 'base-layout',
      children: [
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
}

window.addEventListener('load', () => { 
  initRouter();
});


