const Authentication = require("./controllers/CulinaAuth");
const Company = require("./controllers/Companies");
const CompanyUser = require("./controllers/CompanyUser");
// const pasportService = require("./services/pasport");

const requireAuth = require("./services/requireAuth");

module.exports = function (app) {
  //culina admin users
  app.post("/auth/signup", Authentication.culinaSignup);
  app.post("/auth/signin", Authentication.culinaSignin);
  app.get("/auth", requireAuth, Authentication.getUser);

  // companies
  app.post("/companies", requireAuth, Company.newOrUpdate);
  app.get("/companies/all", requireAuth, Company.allCompanies);
  app.get("/companies/:id", requireAuth, Company.companyProfile);
  app.delete("/companies/:id", requireAuth, Company.removeCompany);
  app.post("/companies/:id/user/new", requireAuth, CompanyUser.newCompanyUser);
  app.get("/companies/:id/user/:id", requireAuth, CompanyUser.companyUserById);

  //  app.post("/api/drink", requireAuth, Drink.newDrink);
  //  app.get("/api/drinks", requireAuth, Drink.getDrinks);
  //  app.get("/api/drink/:name", requireAuth, Drink.getSelectedDrink);
  //  app.delete("/api/drink/:name", requireAuth, Drink.removeSelectedDrink);
};
