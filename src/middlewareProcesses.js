const Router = require("koa-router");
const router = new Router();
const jwt = require("jsonwebtoken");
const util = require("./util");
const fs = require("fs");

router.get("/", async ctx => {
  try {
    if (ctx.cookies.get("auth") !== undefined && jwt.verify(ctx.cookies.get("auth"), util.secret).username) {
      ctx.redirect("/home");
    }
  } catch (err) {
    console.error(err.message);
  }
  ctx.type = "html";
  ctx.body = fs.readFileSync("public/index.html", "utf8");
});

router.get("/home", async ctx => {
  try {
    if (!(ctx.cookies.get("auth") !== undefined) || !jwt.verify(ctx.cookies.get("auth"), util.secret).username) {
      ctx.redirect("/");
    }
  } catch (err) {
    console.error(err.message);
    ctx.redirect("/");
  }

  ctx.type = "html";
  ctx.body = fs.readFileSync("public/home.html", "utf8");
});

router.post("/login", async (ctx, next) => {
  util
    .verifyAuth(ctx.request.body)
    .then(user => {
      const token = jwt.sign({ username: ctx.request.body.username }, util.secret, { expiresIn: util.authCookieExpiresIn });
      ctx.body = { success: true, auth: token, user };
      ctx.cookies.set("auth", token, { signed: true });
      ctx.cookies.set("user.name", user, { signed: true });
    })
    .then(null, err => {
      ctx.body = {
        success: false,
        info: err.info
      };
    })
    .catch(err => {
      ctx.body = {
        success: false,
        info: err.info
      };
      console.log(err);
    });
});

module.exports = router;
