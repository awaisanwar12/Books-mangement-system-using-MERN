**Mern Book mangemnt sysytem is a simple application that helps manage a book collection and its processes like stocking,deleting and updating books. With this application users are able to create, update and delete books.
Table of Contents
Features
Technologies
Installation and Setup
How to Contribute
Frequently Asked Questions
Support or New Features
License
Features
Book mangement consists of the following features:

Authentication
It uses JSON Web Token (JWT) for authentication.
Token is generated on user login
Token is perpetually verified to check the state of the user if logged in or not.
User is assigned normal role on registration
Admin User is pre-seeded into the application with administrative priviledges
Normal Users
Users can register
Users can log in
Users can view all books in the library
Users can borrow books
Users can return books
User can view borrowing history
Admin Users
Admin Users have all priviledges as Normal Users.
Admin Users can log in
Admin Users can Add, Modify & Delete Books
Admin Users can manage application Users
Admin Users sort & categorize books
Technology
Book mangement system makes use of a host of modern technologies. The core ones are:

REACT: This project makes use of the REACT Javascript library to build the interface. REACT is used for building web pages that are structured as a collection of components. For more information about See this link.
ECMAScript 6: Also known as ES2015, this is a version of Javascript with next-generation features like arrow functions, generators, enhanced object literals, spread operators and more. The ES2015 is used in many areas of this project. See this link for details.
NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side. See this link for details.
ExressJS: ExpressJS, is a web application framework for Node.js, It is designed for building web applications and APIs. see this link.
MongoDB. This application uses MongoDb for Datebase mangement.



Installation
Git clone this repository

CD to the created directory

run npm install

run npm start to start server

Install sequelize-cli, Create MongoDb database, Navigate to server directory and run migrations:



Sample environment config
SecretKey=mysecretkey
DATABASE_TEST_URL=Localhost://127.0.0.1:5000/

run npm start
API Routes
POST : /api/db/users/signup API routes for users to create accounts and login to the application

POST : /api/db/users/signin (username, password) An API route that allow users add new book:

GET : /api/books An API route that allow users to get all books in the library

PUT : /api/books:id An API route that allow users to modify book in the library

GET : /api/books?returned=false An API route that allow users to get all the books that the user has borrowed but has not returned

POST : /api/users/<userId>/books An API route that allow user to borrow a book

PUT : /api/users/<userId>/books An API route that allow user to return a book

DELETE : /api/v1/books/delete/:bookId An API route that allows admin to delete books

GET : /api/v1/users/all An API route that allows admin to get all users

GET : /api/v1/books/:bookId An API route that allows users get a specific book

GET : /api/v1/books/logs/:userId An API route that allows users see rented book history



[author]: Muhammad Awais Anwar
 

