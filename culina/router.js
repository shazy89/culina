const Authentication = require("./controllers/culinaAuth");
const Company = require("./controllers/newCompany");
// const Drink = require("./controllers/drink");
// const pasportService = require("./services/pasport");
const passport = require("passport");
const requireAuth = require("./services/requireAuth");

module.exports = function (app) {
  app.post("/company/signup", Authentication.culinaSignup);
  app.post("/company/signin", Authentication.culinaSignin);
  app.post("/companies", requireAuth, Company.newOrUpdate);
  app.get("/companies/all", Company.allCompanies);
  app.get("/companies/:id", requireAuth, Company.companyProfile);
  //  app.post("/api/drink", requireAuth, Drink.newDrink);
  //  app.get("/api/drinks", requireAuth, Drink.getDrinks);
  //  app.get("/api/drink/:name", requireAuth, Drink.getSelectedDrink);
  //  app.delete("/api/drink/:name", requireAuth, Drink.removeSelectedDrink);
};
