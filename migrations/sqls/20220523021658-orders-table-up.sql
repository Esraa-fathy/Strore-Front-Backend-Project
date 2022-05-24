/*create orders table*/
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) NOT NULL,
  status VARCHAR(20)
);