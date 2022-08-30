const { Router } = require("express");
const {
  getStarshipById,
  getAllStarships,
} = require("../controllers/starshipControllers");

const router = Router();

router.get("/", async (req, res) => {
  try {
     let page = req.query.page;
  if (!page) {
    page = 1;
  }
    const starships = await getAllStarships(page);
    console.log('---| STARSHIPS |--->', starships)
    res.json(starships)
  } catch (error) {
    console.log("error in  starship get / route", error);
  }
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let charInfo = await getStarshipById(id);

    res.json(charInfo);
  } catch (error) {
    console.log(error);
    res.send(400).send(error);
  }
});

module.exports = router;
