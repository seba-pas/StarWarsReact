const { Router } = require("express");
const charactersRoutes = require("./charactersRoutes");


const router = Router();

router.use("/characters", charactersRoutes);


module.exports = router;