const express = require("express");
const passport = require("passport");

const router = express.Router();

const controller = require("./../controllers/userController");
const roleManager = require("./../middleware/roleManager");

//these routes can be accessed without a token.
router.get("/config/pulldata", controller.updateapi);
router.post("/register", controller.registerUser);
router.post("/login", controller.login);
router.get("/logout", controller.logout);
router.use(passport.authenticate("jwt", { session: false })); //from here on we add in the passport authenticate middleware
//this routes need a token to be accessed.
router.get("/list", controller.listUsers);

router.get("/profile", controller.profile);
module.exports = router;
