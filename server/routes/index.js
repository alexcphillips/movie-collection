const router = require("express").Router();
const { health } = require("./health");
const movies = require("./movies");

router.get("/health", health);

router.post("/movies", movies.insertMany);
router.delete("/movie/:id", movies.deleteById);

module.exports = router;
