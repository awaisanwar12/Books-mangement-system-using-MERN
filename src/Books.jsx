import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Space, Button, Input, Modal, message } from "antd";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((response) => {
      setBooks(response.data);
    });
  }, []);
  function getBooks() {
    axios.get("http://localhost:5000/books").then((response) => {
      setBooks(response.data);
    });
  }
  const handleAddBook = () => {
    const newBook = { title, author, year };

    axios
      .post("http://localhost:5000/books", newBook)
      .then((response) => {
        setBooks([...books, response.data]);
        setTitle("");
        setAuthor("");
        setYear("");
      })
      .then(() => getBooks());
  };

  const handleDeleteBook = (_id) => {
    axios.delete(`http://localhost:5000/books/${_id}`).then(() => {
      setBooks(books.filter((book) => book._id !== _id));
    });
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure you want to delete this file?",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        message.success("Deleted successfully");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleUpdateBook = (book) => {
    setSelectedBook(book);
    setTitle(book.title);
    console.log(book);
    setAuthor(book.author);
    setYear(book.year);
    setIsModalOpen(true);
  };
  const okUpdate = () => {
    axios
      .put(`http://localhost:5000/books/${selectedBook._id}`, {
        title,
        author,
        year,
      })
      .then((response) => {
        const updatedBook = response.data;
        setBooks(
          books.filter((book) =>
            book._id === updatedBook._id ? updatedBook : book
          )
        );
        setSelectedBook("");
        setTitle("");

        setAuthor("");
        setYear("");

        setIsModalOpen(false);
        message.success("Book updated successfully");
      })
      .then(getBooks);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      // width: "10%"
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      // width: "10%"
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      // width: "10%"
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (record) => (
        <Space>
          <Button onClick={() => handleDeleteBook(record._id)}>Delete</Button>

          <Button onClick={() => handleUpdateBook(record)}>Update</Button>
        </Space>
      ),
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (selectedBook) {
      okUpdate();
      return;
    }
    if (title && author && year) {
      // check if required fields are not empty

      handleAddBook(); // call the add function

      setIsModalOpen(false); // close the modal on successful submission
      message.success("Data added successfully");
    } else {
      // show error message if required fields are empty
      message.error("Author and Year are required");
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="books">
      <h1 className="h1">Books</h1>
      <div className="div">
        <Button size="small" type="primary" onClick={showModal}>
          Add Book
        </Button>
      </div>
      <Table
        className="table"
        columns={columns}
        dataSource={books}
        pagination={{ pageSize: 3 }}
        scroll={{ y: 240 }}
        bordered
        size="small"
      />

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>
          Title:
          <Input
            style={{ width: "20%" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Author:
          <Input
            style={{ width: "20%" }}
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Year:
          <Input
            style={{ width: "20%" }}
            placeholder="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <br />
      </Modal>
    </div>
  );
};

export default Books;
