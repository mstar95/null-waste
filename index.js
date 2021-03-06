const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa';
});

app
    .use(router.routes());

app.listen(3000, () => console.log("Node server started"));