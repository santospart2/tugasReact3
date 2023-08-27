import React, { useState } from 'react';
import ListBuku from './ListBuku';
// import '../formStyle.css'

const Style = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px' 

  };

const Pinjam = () => {
  const [formData, setFormData] = useState({
    judulBuku: '',
    namaPeminjam: '',
    tanggalPinjam: '',
  });

  // const bukus = [
  //   { label: 'anak', value: 'siKancil' },
  //   { label: 'anak', value: 'siBeruang' },
  //   { label: 'anak', value: 'siKucing' },
  // ];

  const ListBuku = (ListBuku) => {
    setData(ListBuku);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
        e.preventDefault();

        alert(JSON.stringify(formData));
        
    }

  return (
    <div style={Style} className="form-pinjam">
      <h2>Form Pinjam</h2>
      <form onSubmit={handleSubmit}>

        <label>
          Judul Buku :
          <select value={formData.judulBuku} name='judulBuku' onChange={handleChange}>
           {bukus.map((buku) => (
            <option value={buku.value}>{buku.value}</option>
          ))}
        </select>
        </label>

        <label>
          Nama Peminjam :
          <input
            type="text"
            name="namaPeminjam"
            value={formData.namaPeminjam}
            onChange={handleChange}
          />
        </label>
        <label>
          Tanggal Pinjam :
          <input
            type="date"
            name="tanggalPinjam"
            value={formData.tanggalPinjam}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Pinjam</button>
      </form>

      
    </div>
  );
};

export default Pinjam;