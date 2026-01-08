import React, { useState } from 'react';
import api from '../lib/axios';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/books', {
        title,
        author,
        isbn,
        price: parseFloat(price),
        stock: parseInt(stock),
        description,
        categories: [] // ileride category seçimi ekle
      });
      alert('Kitap eklendi!');
      // formu temizle
      setTitle('');
      setAuthor('');
      setIsbn('');
      setPrice('');
      setStock('');
      setDescription('');
    } catch (err) {
      alert('Kitap eklenemedi – ADMIN token kontrol et.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '30px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Admin Panel - Kitap Ekle</h1>
      <form onSubmit={handleAddBook}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: 'white' }}>Başlık:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: 'white' }}>Yazar:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: 'white' }}>ISBN:</label>
          <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: 'white' }}>Fiyat:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: 'white' }}>Stok:</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: 'white' }}>Açıklama:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', height: '100px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}>
          Kitap Ekle
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;