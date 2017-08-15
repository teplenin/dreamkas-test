import Koa from 'koa';
import err from './middleware/error';
import { routesMiddleware } from './middleware/routes';

const app = new Koa();
const router = routesMiddleware();

app.use(err);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, function () {
    console.log('Server listening at port 3000');
});
