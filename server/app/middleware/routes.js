import Router from 'koa-router';

export function routesMiddleware(options = {}) {
    const router = new Router();

    router.get('/', async (ctx, next) => {
        ctx.body = 'Hello world'
    });

    return router;
}
