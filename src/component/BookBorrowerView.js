import React from 'react';

const BookBorrowerView = ({ borrowerName, borrowedBooks }) => {
  return (
    <div>
      <h2>{borrowerName}'s Borrowed Books</h2>
      <ul>
        {borrowedBooks.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookBorrowerView;
