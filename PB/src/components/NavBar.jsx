import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w3-bar' style={{ backgroundColor: '#FF7F50' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'>
          <Link to="/clientes" style={{ color: 'white' }}>Clientes</Link>
        </li>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'>
          <Link to="/productos" style={{ color: 'white' }}>Productos</Link>
        </li>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'>
          <Link to="/empleados" style={{ color: 'white' }}>Empleados</Link>
        </li>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'>
          <Link to="/ventas" style={{ color: 'white' }}>Ventas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
