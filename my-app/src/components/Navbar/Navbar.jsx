import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <h1>Nébula Criativa</h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={menuOpen ? 'show' : ''}>
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#galery">Catalogo</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}
