import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px', backgroundColor: '#0a0a0a' }}>
      <h1 style={{ fontSize: '60px', color: '#00bfff', marginBottom: '20px' }}>
        Hoş Geldin Kitapçı'ya! 📚
      </h1>
      <p style={{ fontSize: '28px', color: '#ffffff', maxWidth: '800px', marginBottom: '40px' }}>
        Binlerce kitap, en iyi fiyatlarla seni bekliyor. Hemen giriş yap ve keşfetmeye başla!
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/books">
          <button style={{
            padding: '15px 40px',
            fontSize: '20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 6px 12px rgba(0,0,0,0.4)'
          }}>
            Kitapları Gör
          </button>
        </Link>
        <Link to="/login">
          <button style={{
            padding: '15px 40px',
            fontSize: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 6px 12px rgba(0,0,0,0.4)'
          }}>
            Giriş Yap
          </button>
        </Link>
      </div>
      <p style={{ marginTop: '60px', color: '#aaa', fontSize: '18px' }}>
        Yeni üye misin? <Link to="/register" style={{ color: '#00bfff', textDecoration: 'none' }}>Hemen kayıt ol!</Link>
      </p>
    </div>
  );
};

export default Home;