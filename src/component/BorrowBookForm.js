import React, { useState } from 'react';
// import "./Form.css";

const BorrowBookForm = () => {
  const [formData, setFormData] = useState({
    judulBuku: '',
    namaPeminjam: '',
    tanggalPinjam: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
        e.preventDefault();

        //react convert object to string
        alert(JSON.stringify(formData));
    }

  return (
    <div className="borrow-book-form">
      <h2>Form Pinjam</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Judul Buku:
          <input
            type="text"
            name="judulBuku"
            value={formData.bookTitle}
            onChange={handleChange}
          />
        </label>
        <label>
          Nama Peminjam:
          <input
            type="text"
            name="namaPeminjam"
            value={formData.borrowerName}
            onChange={handleChange}
          />
        </label>
        <label>
          Tanggal Pinjam:
          <input
            type="date"
            name="tanggalPinjam"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Pinjam</button>
      </form>
    </div>
  );
};

export default BorrowBookForm;
