/* create orderProducts table */
CREATE TABLE orderProducts (
  id SERIAL PRIMARY KEY,
  quantity integer,
  order_id integer REFERENCES orders(id) NOT NULL,
  product_id integer REFERENCES products(id) NOT NULL
);