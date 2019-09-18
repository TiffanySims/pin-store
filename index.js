const routes = require("./routes/routes");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });

const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.post("/signin", requireSignin, routes.signin);
  app.post("/signup", routes.signup);
  app.get("/items", routes.items);
};
