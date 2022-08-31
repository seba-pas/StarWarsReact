const { Router } = require("express");
const charactersRoutes = require("./charactersRoutes");
const starShipRoutes = require("./starshipsRoutes");
const speciesRoutes = require("./speciesRoutes");
const filmsRoutes = require('./filmsRoutes')

const router = Router();

router.use("/characters", charactersRoutes);
router.use("/starships", starShipRoutes);
router.use('/species', speciesRoutes)
router.use('/films', filmsRoutes)

module.exports = router;
