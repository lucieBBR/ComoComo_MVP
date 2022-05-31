var express = require("express");
var router = express.Router();
const db = require("../model/helper");


// GET all favorites ordered by date and time posted, ascending order
router.get("/", async (req, res) => {
  try {
      let results = await db('SELECT * FROM favorites ORDER BY posted ASC'); // get all favorite recipes
      let favorites = results.data;
      res.send(favorites);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// POST recipe in favorites table
router.post("/", async (req, res) => {
    let { recipe_id, recipe_title, recipe_img} = req.body;

    try {
        let prevFav = await db(`SELECT * FROM favorites WHERE recipe_id = ${recipe_id}`); 
        if (prevFav.data.length !== 0) { // checking if the recipe isn't already included in the database
        res.status(404).send({ error: "Recipe is already in favorites" });
        return;
        }

        let sql = `
        INSERT INTO favorites (recipe_id, recipe_title, recipe_img)
        VALUES (${recipe_id}, '${recipe_title}', '${recipe_img}');`;

        await db(sql);  // add new recipe
        let result = await db('SELECT * FROM favorites ORDER BY posted ASC'); //get all favorites ordered by date and time posted, ascending order
        let favorites = result.data;
        res.status(201).send(favorites);  // return updated array (with 201 for "new resource created")
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
  });

//DELETE recipe from favorites table
  router.delete("/:id", async (req, res) => {
    let recipeId = req.params.id;

    try {
        await db(`DELETE FROM favorites WHERE recipe_id = ${recipeId}`);  // delete recipe
        result = await db('SELECT * FROM favorites ORDER BY posted ASC'); //get all favorites ordered by date and time posted, ascending order
        let favorites = result.data;
        res.send(favorites);  // return updated array 
        } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

 module.exports = router