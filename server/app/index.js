import Koa from 'koa';
import cors from 'koa2-cors';

import { routesMiddleware } from './middleware/routes';
import errorMiddleware from './middleware/error';

const app = new Koa();
const router = routesMiddleware();

app.use(errorMiddleware);

app.use(cors({ origin: '*' }));

app.use(router.routes());
app.use(router.allowedMethods());

app.use(function (ctx, next) {
    ctx.statusCode = 404;
    ctx.body = { status: 'error', message: 'Not found' }
});

app.listen(3000, function () {
    console.log('Server listening at port 3000');
});
