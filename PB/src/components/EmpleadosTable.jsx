import React from "react";

const EmpleadosTable = ({ empleados }) => {
  if (!empleados || empleados.length === 0) {
    return <p>No se encontraron empleados.</p>;
  }

  return (
    <div className="w3-container">
      <h2>Tabla de Empleados</h2>
      <div className="w3-responsive">
        <table className="w3-table w3-bordered w3-striped w3-border">
          <thead>
            <tr className="w3-blue">
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Puesto</th>
              <th>Salario</th>
              <th>Fecha de Contratación</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.puesto}</td>
                <td>{empleado.salario}</td>
                <td>{empleado.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpleadosTable;
