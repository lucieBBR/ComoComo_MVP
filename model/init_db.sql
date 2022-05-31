DROP TABLE IF EXISTS favorites; 
 
CREATE TABLE favorites ( 
    recipe_id INT NOT NULL PRIMARY KEY,
    recipe_title VARCHAR(100), 
    recipe_img VARCHAR(100),
    notes TEXT(255),
    posted DATETIME DEFAULT CURRENT_TIMESTAMP
); 

INSERT INTO favorites (recipe_id, recipe_title, recipe_img)
VALUES
    (661447, 'Square Deviled Eggs', 'https://spoonacular.com/recipeImages/661447-312x231.jpg'),
    (640513, 'Cream Cheese with Sun Dried Tomatoes and Pesto Pastry', 'https://spoonacular.com/recipeImages/640513-312x231.jpg'); 

