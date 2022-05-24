DROP TABLE IF EXISTS favorites; 
 
CREATE TABLE favorites ( 
    recipe_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    recipe_title VARCHAR(100), 
    recipe_img VARCHAR(100),
    notes TEXT(255)
); 