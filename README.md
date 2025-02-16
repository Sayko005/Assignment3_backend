E-commerce Web Application (MongoDB & Deployment)

Project Overview

This project is a RESTful API-based e-commerce platform built using Node.js, Express.js, and MongoDB. It provides CRUD operations for managing products, users, and orders. Additionally, it features authentication, order management, and deployment to a cloud platform.

Features

User Authentication: User registration & login (with password hashing)

Product Management: Add, update, delete, and retrieve products

Order Management: Users can create and retrieve orders

MongoDB Integration: NoSQL database with schemas for users, products, and orders

RESTful API: Well-structured endpoints for seamless data communication

Deployment: Deployed to a cloud platform (Heroku or Render)

Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app

2. Install dependencies

npm install

3. Setup environment variables

Create a .env file in the root directory and add the following:

MONGODB_URI=your-mongodb-connection-string
PORT=5000
JWT_SECRET=your-jwt-secret

4. Start the server

npm start

API Endpoints

User Routes

Method

Endpoint

Description

POST

/api/users/register

Register a new user

POST

/api/users/login

Login a user

Product Routes

Method

Endpoint

Description

POST

/api/products

Add a new product

GET

/api/products

Retrieve all products

GET

/api/products/:id

Get product by ID

PUT

/api/products/:id

Update product

DELETE

/api/products/:id

Delete product

Order Routes

Method

Endpoint

Description

POST

/api/orders

Create an order

GET

/api/orders/:userId

Get orders for a user

Deployment

1. Deploy to Heroku

heroku login
heroku create your-app-name
git push heroku master

2. Deploy to Render

Create an account on Render.

Create a new web service.

Connect it to your GitHub repository.

Set build command: npm install.

Set start command: node server.js.

Deploy and get the live URL.

Project Structure

📦 ecommerce-app
├── 📂 models          # Database schemas
│   ├── productModel.js
│   ├── userModel.js
│   └── orderModel.js
├── 📂 routes          # API endpoints
│   ├── productRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
├── 📂 controllers     # Business logic
│   ├── productController.js
│   ├── userController.js
│   └── orderController.js
├── server.js         # Main backend file
├── .env              # Environment variables
├── package.json      # Dependencies
└── README.md         # Documentation

Technologies Used

Node.js - Backend runtime

Express.js - Web framework

MongoDB & Mongoose - Database

JWT & bcrypt - Authentication & security

Heroku/Render - Deployment

Screenshots

Database Schema in MongoDB Compass

API Testing in Postman

Live Deployment Screenshot

Authors

Yerassyl Sansyzbay ans Sayat Nurbolat

License

This project is licensed under the MIT License.