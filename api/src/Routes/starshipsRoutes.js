const { Router } = require("express");
const { getStarshipById } = require("../controllers/starshipControllers");

const router = Router();

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let charInfo = await getStarshipById(id);

    res.status(200).json(charInfo);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});


module.exports = router;