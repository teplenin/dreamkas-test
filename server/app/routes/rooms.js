import koaRouter from 'koa-router';
import bodyParser from 'koa-body';

import roomsModel from '../models/rooms';

const router = new koaRouter();
const koaBody = bodyParser();

router.get('/', async (ctx) => {
        const data = await roomsModel.getItems(ctx.query.offset, ctx.query.count);
        const total = await roomsModel.getItemsTotal();

        ctx.body = { status: 'success', total, data }
    })
    .get('/:id', async (ctx) => {
        const data = await roomsModel.getItem(ctx.params.id);

        ctx.body = { status: 'success', data }
    })
    .post('/', koaBody, async (ctx) => {
        const data = await roomsModel.addItem(ctx.request.body);

        ctx.body = { status: 'success', data }
    })
    .put('/:id', koaBody, async (ctx) => {
        const data = await roomsModel.updateItem(ctx.params.id, ctx.request.body);

        ctx.body = { status: 'success', data }
    })
    .delete('/:id', async (ctx) => {
        await roomsModel.removeItem(ctx.params.id);

        ctx.body = { status: 'success' }
    })


export default router;
