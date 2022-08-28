const { Router } = require("express");
const charactersRoutes = require("./charactersRoutes");
const starShipRoutes = require("./starshipsRoutes");

const router = Router();

router.use("/characters", charactersRoutes);
router.use("/starships", starShipRoutes);

module.exports = router;
