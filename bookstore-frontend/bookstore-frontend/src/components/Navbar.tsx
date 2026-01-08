import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Çıkış yapıldı!');
    navigate('/login');
  };

  return (
    <nav style={{
      backgroundColor: '#121212',
      padding: '20px 100px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100vw',
      left: 0,
      boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <h2 style={{ color: '#00bfff', margin: 0, fontSize: '28px' }}>📚 Kitapçı</h2>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Ana Sayfa</Link>
          <Link to="/books" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Kitaplar</Link>
          {token && <Link to="/admin" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>Admin Panel</Link>}
        </div>
      </div>
      <div>
        {token ? (
          <button onClick={handleLogout} style={{
            padding: '12px 30px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            Çıkış Yap
          </button>
        ) : (
          <Link to="/login" style={{ color: '#00bfff', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Giriş Yap</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;