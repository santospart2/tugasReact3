import React, { useState } from 'react';
import BookList from './component/BookList';
import BorrowBook from './component/BorrowBook';
import BookBorrowerView from './component/BookBorrowerView';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    // Add more books
  ]);

  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const borrowerName = "John"; // Replace with dynamic data

  const handleBorrow = bookId => {
    const bookToBorrow = books.find(book => book.id === parseInt(bookId));
    if (bookToBorrow) {
      setBorrowedBooks([...borrowedBooks, bookToBorrow]);
    }
  };

  return (
    <div>
      <BookList books={books} />
      <BorrowBook books={books} onBorrow={handleBorrow} />
      <BookBorrowerView borrowerName={borrowerName} borrowedBooks={borrowedBooks} />
    </div>
  );
};

export default App;
