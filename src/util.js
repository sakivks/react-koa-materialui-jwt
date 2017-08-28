const util = {
  square(x) {
    return x * x;
  },

  secret: "alittleretsec",
  authCookieExpiresIn: "2m",

  verifyAuth(credential) {
    return new Promise((resolve, reject) => {
      if (credential.password === "asdf") {
        console.log(`Authenticated : ${credential.username}`);
        resolve(credential.username);
      } else {
        console.log(`Invalid Username/Password : ${credential.username}`);
        reject({ info: "Invalid username/password" });
      }
    });
  }
};

module.exports = util;
