/* create products table */
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  price integer NOT NULL,
  category VARCHAR(255)
);