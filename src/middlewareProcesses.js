const Router = require("koa-router");
const router = new Router();
const jwt = require('jsonwebtoken');

router.post("/login", async (ctx, next) => {
  verifyAuth(ctx.request.body)
    .then(user => {
      const token = jwt.sign({ username: ctx.request.body.username }, "alittleretsec", { expiresIn: "2m" });
      ctx.body = { success: true, auth: token, user };
      ctx.cookies.set('auth', token, { signed: true });
      ctx.cookies.set('user.name', user, { signed: true });
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



const verifyAuth = credential => {
  return new Promise((resolve, reject) => {
    if (credential.password === "asdf") {
      console.log(`Authenticated : ${credential.username}`);
      resolve(credential.username);
    } else {
      console.log(`Invalid Username/Password : ${credential.username}`);
      reject({ info: "Invalid username/password" });
    }
  });
};

module.exports = router;
