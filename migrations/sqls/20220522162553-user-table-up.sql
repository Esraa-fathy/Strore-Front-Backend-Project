/* create user table */
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
 first_name VARCHAR(100) ,
  last_name  VARCHAR(100) ,
  email VARCHAR(100) NOT NULL ,
  pass VARCHAR(255) NOT NULL
);