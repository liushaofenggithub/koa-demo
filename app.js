const Koa = require("koa");
const Router = require("@koa/router");
const app = new Koa();
const router = new Router();

// 配置中间件
// ctx 上下文 context，包含request 和 response
// 标识访问所有路由都会触发
app.use(async (ctx, next) => {
  console.log('执行')
  // 让程序继续向下执行
  next() 
});

// 配置路由
router.get('/', async(ctx) => {
  ctx.body = '你好 我是首页'
})
router.get('/news', async(ctx) => {
  ctx.body = '你好 我是新闻'
})

// 启动router
app
  .use(router.routes())
  .use(router.allowedMethods());
  
app.listen(3000);