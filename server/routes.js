const router = require("express").Router();
const userRoutes = require("./controllers/userController"); // Update the path to userRoutes.js based on your folder structure

router.use("/users", userRoutes);

module.exports = router;
