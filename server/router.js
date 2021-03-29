const Authentication = require("./controllers/culinaAuth");
const Company = require("./controllers/newCompany");
// const Drink = require("./controllers/drink");
// const pasportService = require("./services/pasport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = function (app) {
  app.post("/employe/signup", Authentication.culinaSignup);
  app.post("/employe/signin", Authentication.culinaSignin);
  app.post("/company/new", Company.newCompany);
  //  app.post("/api/todo", requireAuth, Todo.todo);
  //  app.post("/api/drink", requireAuth, Drink.newDrink);
  //  app.get("/api/drinks", requireAuth, Drink.getDrinks);
  //  app.get("/api/drink/:name", requireAuth, Drink.getSelectedDrink);
  //  app.delete("/api/drink/:name", requireAuth, Drink.removeSelectedDrink);
};
