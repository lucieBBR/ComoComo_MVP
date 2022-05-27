var express = require("express");
var router = express.Router();
const db = require("../model/helper");


// GET all favorites
router.get("/", async (req, res) => {
  try {
      let results = await db('SELECT * FROM favorites'); // get all favorite recipes
      let favorites = results.data;
      res.send(favorites);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
    let { recipe_id, recipe_title, recipe_img } = req.body;

    let sql = `
        INSERT INTO favorites (recipe_id, recipe_title, recipe_img)
        VALUES (${recipe_id}, '${recipe_title}', '${recipe_img}');`;

    try {
        await db(sql);  // add new recipe
        let result = await db('SELECT * FROM favorites');
        let favorites = result.data;
        res.status(201).send(favorites);  // return updated array (with 201 for "new resource created")
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    let recipeId = req.params.id;

    try {
        let result = await db(`SELECT * FROM favorites WHERE recipe_id = ${recipeId}`);  // does recipe exist?
        if (result.data.length === 0) {
            res.status(404).send({ error: 'Recipe not found' });
        } else {
            await db(`DELETE FROM favorites WHERE recipe_id = ${recipeId}`);  // delete recipe
            result = await db('SELECT * FROM favorites');
            let favorites = result.data;
            res.send(favorites);  // return updated array
        } 
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

 module.exports = router