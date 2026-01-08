import React, { useState, useEffect } from 'react';
import api from '../lib/axios';

interface Category {
  id: number;
  name: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  price: number;
  stock: number;
  description: string;
  categories: Category[];
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ color: 'white', textAlign: 'center', fontSize: '28px', marginTop: '100px' }}>Yükleniyor...</p>;

  return (
    <div style={{ minHeight: 'calc(100vh - 100px)', backgroundColor: '#0a0a0a' }}>
      <div style={{ padding: '60px 40px' }}>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '48px', marginBottom: '60px' }}>
          Tüm Kitaplar
        </h1>
        {books.length === 0 ? (
          <p style={{ color: '#aaa', textAlign: 'center', fontSize: '28px' }}>Henüz kitap eklenmemiş.</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '50px',
            width: '100%',
            maxWidth: '1600px',
            margin: '0 auto'
          }}>
            {books.map(book => (
              <div
                key={book.id}
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,191,255,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.7)';
                }}
              >
                <h2 style={{ color: '#00bfff', fontSize: '30px', marginBottom: '20px' }}>{book.title}</h2>
                <p style={{ color: '#ccc', fontSize: '18px' }}><strong>Yazar:</strong> {book.author}</p>
                <p style={{ color: '#ccc', fontSize: '18px' }}><strong>ISBN:</strong> {book.isbn}</p>
                <p style={{ color: '#28a745', fontSize: '28px', margin: '20px 0' }}><strong>{book.price} TL</strong></p>
                <p style={{ color: '#ccc', fontSize: '18px' }}><strong>Stok:</strong> {book.stock} adet</p>
                <p style={{ color: '#aaa', fontSize: '16px', marginTop: '20px' }}>{book.description}</p>
                {book.categories.length > 0 && (
                  <p style={{ color: '#00bfff', fontSize: '18px', marginTop: '20px' }}>
                    <strong>Kategoriler:</strong> {book.categories.map(c => c.name).join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;