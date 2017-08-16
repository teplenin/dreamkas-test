import koaRouter from 'koa-router';

import roomsRouter from '../routes/rooms';

export function routesMiddleware(options = {}) {
    const router = new koaRouter({ prefix: '/api' });

    router.use('/rooms', roomsRouter.routes());

    return router;
}
