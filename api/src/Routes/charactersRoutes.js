const { Router } = require("express");
// const server = require("../app");
const {
  getCharacters,
  getCharacterById,
  getHomePageCharacters,
} = require("../controllers/charactersControllers");

const router = Router();

router.get("/", async (req, res) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  let allCharacters = await getCharacters(page);
  res.status(200).json(allCharacters);
});

router.get("/all", async (req, res) => {
  let page = req.query.page;
  
  let allCharacters = await getHomePageCharacters(page);
  res.status(200).json(allCharacters);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let charInfo = await getCharacterById(id);

    res.status(200).json(charInfo);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
