import React from "react";

const VentasTable = ({ ventas }) => {
  if (!ventas || ventas.length === 0) {
    return <p>No se encontraron ventas.</p>;
  }

  return (
    <div>
      <h2>Tabla de Ventas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr key={venta.id}>
              <td>{venta.id}</td>
              <td>{venta.fecha}</td>
              <td>{venta.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentasTable;
