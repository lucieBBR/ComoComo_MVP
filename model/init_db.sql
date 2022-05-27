DROP TABLE IF EXISTS favorites; 
 
CREATE TABLE favorites ( 
    recipe_id INT NOT NULL PRIMARY KEY,
    recipe_title VARCHAR(100), 
    recipe_img VARCHAR(100),
    notes TEXT(255)
); 

INSERT INTO favorites (recipe_id, recipe_title, recipe_img )
VALUES
    (1, 'rec one', 'rvr3vvr3v'),
    (2, 'rec two', 'iuo3frvvr3v')