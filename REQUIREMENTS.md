# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.


These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

### Endpoints requirements
#### Products 
- displayAllproducts
- showOneProduct (args: product id)
- Create (args: Product)[token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- displayAllusers [token required]
- showOneUsr (args: id)[token required]
- Create (args: User)[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## API Endpoints 

e.g authorization header for endpoints that require token
```json
{ "Authorization": "Bearer <long-user-token>" }
```

### Products Endpoints
* Index of all products

```bash
GET /products
```

* Show details for product with your choise id

```bash
GET /products/:id
```

* Create new product 

```bash
POST /products
```
e.g req.body json

```json
{ 
    "name": "Friedchecken",
    "price": 100,
    "category": "food" 
}
```

*Delete products with your choise id

```bash
DELETE /products
```

*Update products you want 

```bash
PUT /products/:id
```

### Users Endpoints
* Index of all users

```bash
GET /products
```

* Show details for user with your choise id

```bash
GET /products/:id
```

* Create new user

```bash
POST /users
```

e.g req.body json

```json
{ 
    "first_name": "Esraa",
    "last_name": "fathy",
    "email": "esraafathy219@gmail.com",
    "pass": "test5555" 
}
```

* User login

```bash
POST /login
```
e.g req.body json

```json
{ 
    "email": "esraafathy219@gmail.com",
    "pass": "test55555" 
}
```

### Orders Endpoints
* Index of all orders (token required)

```bash
GET /orders
```
* Show order you choise

```bash
GET /orders/:id
```

* Create new order 

```bash
POST /orders
```
e.g req.body json 

```json
{ 
    "user_id": "1",
    "status":"active"
}
```


> Note - no payload json required for this endpoint if status of order to be created is "active"


## Database Tables and Schemas

### Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- email
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## *products* Table
| Column   | Data Type      |
| -------- | -----------    |
| id       | PRIMARY SERIAL KEY
| name     | VARCHAR(150)
| price    |integer
| category | VARCHAR(255)

## *users* Table
| Column          | Data Type      |
| -----------     | -----------    |
|id               | PRIMARY SERIAL KEY |
| first_name      |  VARCHAR(100) |
| last_name       | VARCHAR(100) |
| email           | VARCHAR(100) |
| passw           | VARCHAR(255) |

## *orders* Table
| Column   | Data Type      |
| ---------| -----------    |
| id       | PRIMARY SERIAL KEY
| user_id  | integer REFERENCES users(id) 
| status   | VARCHAR(20)

## *order_products* Table
| Column      | Data Type      |
| ----------- | -----------    |
| id          | PRIMARY SERIAL KEY
| quantity    | integer
| product_id  | integer REFERENCES products(id) 
| order_id    | integer REFERENCES orders(id) 
