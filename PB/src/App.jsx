import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import FichaCliente from './components/FichaCliente';
import FichaProductos from './components/FichaProductos';
import FichaEmpleado from './components/FichaEmpleado';
import FichaVenta from './components/FichaVenta';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/clientes" element={<FichaCliente />} />
        <Route path="/productos" element={<FichaProductos />} />
        <Route path="/empleados" element={<FichaEmpleado />} />
        <Route path="/ventas" element={<FichaVenta />} />
      </Routes>
    </div>
  );
};

export default App;
