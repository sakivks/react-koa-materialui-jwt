require('babel-register')
({
  only: ["/node_modules/koa-logger/*", "/node_modules/koa-static/*", "/node_modules/koa-send/*"]
});
require('./src/server');
