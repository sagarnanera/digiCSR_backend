const {
  CompanySignup,
  VerifyCompany,
} = require("../Controllers/AuthController");
const { NGOSignup , VerifyNGO } = require("../Controllers/AuthNGOController");

const AuthRoutes = (app) => {
  app.post("/company/signup", CompanySignup);
  app.post("/company/verify", VerifyCompany);
  app.post("/ngo/signup", NGOSignup);
<<<<<<< HEAD
=======
  app.post("/ngo/verify", VerifyNGO);

>>>>>>> d1ed9d0fe59d62f077c2af5ae5263a622da88578
};
module.exports = AuthRoutes;
