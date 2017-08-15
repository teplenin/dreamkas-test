import koaRouter from 'koa-router';
import bodyParser from 'koa-body';

import roomsModel from '../models/rooms';

const router = new koaRouter();
const koaBody = bodyParser();

router.get('/', async (ctx) => {
        const data = await roomsModel.getAll();

        ctx.body = { status: 'success', data }
    })
    .get('/:id', async (ctx) => {
        const data = await roomsModel.get(ctx.params.id);

        ctx.body = { status: 'success', data }
    })
    .post('/', koaBody, async (ctx) => {
        const data = await roomsModel.add(ctx.request.body);

        ctx.body = { status: 'success', data }
    })
    .put('/:id', koaBody, async (ctx) => {
        const data = await roomsModel.update(ctx.params.id, ctx.request.body);

        ctx.body = { status: 'success', data }
    })
    .delete('/:id', async (ctx) => {
        await roomsModel.remove(ctx.params.id);

        ctx.body = { status: 'success' }
    })


export default router;
