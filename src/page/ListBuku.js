import React from 'react';

const Style = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  
function ListBuku () {
   const bukus = [
    { label: 'anak', value: 'siKancil' },
    { label: 'anak', value: 'siBeruang' },
    { label: 'anak', value: 'siKucing' },
  ];

  return (
    <div style={Style}>
      <h2>List Buku</h2>
      {bukus.map(function(data) {
      return (
        <div>
           {data.value}
        </div>
      )
    })}
    </div>

    
  );
  
};

export default ListBuku;
