import React, { useState } from 'react';

const BorrowBook = ({ books, onBorrow }) => {
  const [selectedBookId, setSelectedBookId] = useState('');

  const handleBorrow = () => {
    if (selectedBookId) {
      onBorrow(selectedBookId);
      setSelectedBookId('');
    }
  };

  return (
    <div>
      <h2>Borrow a Book</h2>
      <select value={selectedBookId} onChange={e => setSelectedBookId(e.target.value)}>
        <option value="">Select a Book</option>
        {books.map(book => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>
      <button onClick={handleBorrow}>Borrow</button>
    </div>
  );
};

export default BorrowBook;
