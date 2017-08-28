var Router = require('koa-router');
var router = new Router();


router.get(/(|^$)/, async (ctx) => { // final route if nothing matches
  ctx.redirect('/');
});

module.exports = router;