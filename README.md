Mern Book mangemnt sysytem is a simple application that helps manage a book collection and its processes like stocking,deleting and updating books. With this application users are able to create, update and delete books.
Table of Contents
Features
## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [API Routes](#api-routes)

- [Frequently Asked Questions](#frequently-asked-questions)

## Features
Book mangement consists of the following features:

Authentication
- Authentication
  - It uses JSON Web Token (JWT) for authentication.
  - Token is generated on user login.
  - Token is perpetually verified to check the state of the user if logged in or not.
  - User is assigned normal role on registration.
  - Admin User is pre-seeded into the application with administrative privileges.
- Normal Users
  - Users can register.
  - Users can log in.
  - Users can view all books in the library.
  - Users can borrow books.
  - Users can return books.
  - User can view borrowing history..
## Technologies

Book management system makes use of a host of modern technologies. The core ones are:

- **React**: This project makes use of the React JavaScript library to build the interface. React is used for building web pages that are structured as a collection of components. For more information, see [this link](https://reactjs.org/).
- **ECMAScript 6**: Also known as ES2015, this is a version of JavaScript with next-generation features like arrow functions, generators, enhanced object literals, spread operators, and more. ES2015 is used in many areas of this project. See [this link](https://www.ecma-international.org/ecma-262/6.0/) for details.
- **Node.js**: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side. See [this link](https://nodejs.org/en/) for details.
- **Express.js**: Express.js is a web application framework for Node.js. It is designed for building web applications and APIs. See [this link](https://expressjs.com/) for details.
- **MongoDB**: This application uses MongoDB for database management.
## Installation and Setup

To install this application, follow these steps:

1. Git clone this repository
2. CD to the created directory
3. Run `npm install`
4. Run `npm start` to start the server
5. Install MongoDB
6. Create a MongoDB database
7. Navigate to the server directory and run migrations





run npm start
# API Routes

Here are the available API routes for this application:

- `POST: /api/db/users/signup` API route for users to create accounts and login to the application.
- `POST: /api/db/users/signin` (username, password) API route that allows users to add new books.
- `GET: /api/books` API route that allows users to get all books in the library.
- `PUT: /api/books:id` API route that allows users to modify a book in the library.
- `GET: /api/books?returned=false` API route that allows users to get all the books that they have borrowed but have not returned.
- `POST: /api/users/<userId>/books` API route that allows a user to borrow a book.
- `PUT: /api/users/<userId>/books` API route that allows a user to return a book.
- `DELETE: /api/v1/books/delete/:bookId` API route that allows an admin to delete books.
- `GET: /api/v1/users/all` API route that allows an admin to get all users.
- `GET: /api/v1/books/:bookId` API route that allows a user to get a specific book.
- `GET: /api/v1/books/logs/:userId` API route that allows a user to see their rented book history.

For more details on the available API routes, see [API Routes](#api-routes) section.
# Frequently Asked Questions

Here are some frequently asked questions about this application:

- Q: How do I add a new book to the library?
  - A: To add a new book, use the `POST: /api/db/users/signin` API route.
- Q: How do I modify a book in the library?
  - A: To modify a book, use the `PUT: /api/books:id` API route.
- Q: How do I delete a book from the library?
  - A: To delete a book, use the `DELETE: /api/v1/books/delete/:bookId` API route.



[author]: Muhammad Awais Anwar
 

