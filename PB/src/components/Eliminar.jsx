import React, { useState } from "react";

export const Eliminar = () => {
  const [clienteNombre, setClienteNombre] = useState("");
  const [productoId, setProductoId] = useState("");
  const [empleadoNombre, setEmpleadoNombre] = useState("");
  const [ventaId, setVentaId] = useState("");
  const [message, setMessage] = useState("");

  const handleClienteNombreChange = (event) => {
    setClienteNombre(event.target.value);
  };

  const handleProductoIdChange = (event) => {
    setProductoId(event.target.value);
  };

  const handleEmpleadoNombreChange = (event) => {
    setEmpleadoNombre(event.target.value);
  };

  const handleVentaIdChange = (event) => {
    setVentaId(event.target.value);
  };

  const eliminarCliente = (nombre) => {
    // Lógica para eliminar cliente
    setMessage(`Cliente con nombre "${nombre}" eliminado.`);
  };

  const eliminarProducto = (id) => {
    // Lógica para eliminar producto
    setMessage(`Producto con ID ${id} eliminado.`);
  };

  const eliminarEmpleado = (nombre) => {
    // Lógica para eliminar empleado
    setMessage(`Empleado con nombre "${nombre}" eliminado.`);
  };

  const eliminarVenta = (id) => {
    // Lógica para eliminar venta
    setMessage(`Venta con ID ${id} eliminada.`);
  };

  const handleClienteSubmit = (event) => {
    event.preventDefault();
    eliminarCliente(clienteNombre);
    setClienteNombre("");
  };

  const handleProductoSubmit = (event) => {
    event.preventDefault();
    eliminarProducto(productoId);
    setProductoId("");
  };

  const handleEmpleadoSubmit = (event) => {
    event.preventDefault();
    eliminarEmpleado(empleadoNombre);
    setEmpleadoNombre("");
  };

  const handleVentaSubmit = (event) => {
    event.preventDefault();
    eliminarVenta(ventaId);
    setVentaId("");
  };

  return (
    <div className="w3-container">
      <h2>Formato de Eliminaciones</h2>

      <form onSubmit={handleClienteSubmit} className="w3-container w3-card-4 w3-pale-blue w3-text-blue w3-margin">
        <h3>Eliminar Cliente</h3>
        <label htmlFor="clienteNombre" className="w3-label">Nombre del cliente:</label>
        <input
          id="clienteNombre"
          type="text"
          value={clienteNombre}
          onChange={handleClienteNombreChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-blue w3-margin-top">Eliminar</button>
      </form>

      <form onSubmit={handleProductoSubmit} className="w3-container w3-card-4 w3-pale-green w3-text-green w3-margin">
        <h3>Eliminar Producto</h3>
        <label htmlFor="productoId" className="w3-label">ID del producto:</label>
        <input
          id="productoId"
          type="text"
          value={productoId}
          onChange={handleProductoIdChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-green w3-margin-top">Eliminar</button>
      </form>

      <form onSubmit={handleEmpleadoSubmit} className="w3-container w3-card-4 w3-pale-yellow w3-text-yellow w3-margin">
        <h3>Eliminar Empleado</h3>
        <label htmlFor="empleadoNombre" className="w3-label">Nombre del empleado:</label>
        <input
          id="empleadoNombre"
          type="text"
          value={empleadoNombre}
          onChange={handleEmpleadoNombreChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-yellow w3-margin-top">Eliminar</button>
      </form>

      <form onSubmit={handleVentaSubmit} className="w3-container w3-card-4 w3-pale-red w3-text-red w3-margin">
        <h3>Eliminar Venta</h3>
        <label htmlFor="ventaId" className="w3-label">ID de la venta:</label>
        <input
          id="ventaId"
          type="text"
          value={ventaId}
          onChange={handleVentaIdChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-red w3-margin-top">Eliminar</button>
      </form>

      {message && <p className="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow w3-margin-top">{message}</p>}
    </div>
  );
};
