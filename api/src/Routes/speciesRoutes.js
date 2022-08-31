const { Router } = require("express");
const {
  getAllSpecies,
  getSpeciesById,
} = require("../controllers/speciesControllers");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let page = req.query.page;
    if (!page) {
      page = 1;
    }
    const species = await getAllSpecies(page);
   
    res.json(species);
  } catch (error) {
    console.log("error in  species get / route", error);
  }
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let charInfo = await getSpeciesById(id);

    res.json(charInfo);
  } catch (error) {
    console.log(error);
    res.send(400).send(error);
  }
});

module.exports = router;
