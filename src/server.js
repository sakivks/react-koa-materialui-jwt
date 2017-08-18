require("dotenv").config();
const path = require("path");
const Koa = require("koa");
const logger = require("koa-logger");
const serve = require('koa-static');
const app = new Koa();

//++++++++++ Webpack dev middleware +++++++++++++//
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev") {
  const middleware = require("koa-webpack");
  const webpackConfig = require("./../webpack.development.config");
  app.use(middleware({ config: webpackConfig }));
}
//++++++++++++++++++++++++++++++++++++++++++++++//

app.use(logger());
app.use(serve('public'));

//+++++++++++++++ Code Logic ++++++++++++++++++//
const middlewareProcesses = require("./middlewareProcesses");
const coreRoutes = require("./coreRoutes");

app.use(middlewareProcesses.routes());
app.use(middlewareProcesses.allowedMethods());
app.use(coreRoutes.routes());
app.use(coreRoutes.allowedMethods());
//++++++++++++++++++++++++++++++++++++++++++++++//

app.listen(process.env.PORT || process.argv[2] || 4000);
console.log(`Server listening on ${process.env.PORT || process.argv[2] || 4000}`);
