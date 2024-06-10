import React, { useState } from "react";

export const Buscar = () => {
  const [clienteQuery, setClienteQuery] = useState("");
  const [empleadoQuery, setEmpleadoQuery] = useState("");
  const [productoQuery, setProductoQuery] = useState("");
  const [ventaQuery, setVentaQuery] = useState("");
  const [result, setResult] = useState(null);
  const [queryType, setQueryType] = useState("");

  const handleClienteQueryChange = (event) => {
    setClienteQuery(event.target.value);
  };

  const handleEmpleadoQueryChange = (event) => {
    setEmpleadoQuery(event.target.value);
  };

  const handleProductoQueryChange = (event) => {
    setProductoQuery(event.target.value);
  };

  const handleVentaQueryChange = (event) => {
    setVentaQuery(event.target.value);
  };

  const handleClienteSubmit = (event) => {
    event.preventDefault();
    const cliente = buscarCliente(clienteQuery);
    setQueryType("cliente");
    setResult(cliente);
  };

  const handleEmpleadoSubmit = (event) => {
    event.preventDefault();
    const empleado = buscarEmpleado(empleadoQuery);
    setQueryType("empleado");
    setResult(empleado);
  };

  const handleProductoSubmit = (event) => {
    event.preventDefault();
    const producto = buscarProducto(productoQuery);
    setQueryType("producto");
    setResult(producto);
  };

  const handleVentaSubmit = (event) => {
    event.preventDefault();
    const venta = buscarVenta(ventaQuery);
    setQueryType("venta");
    setResult(venta);
  };

  const buscarCliente = (nombre) => {
    // Lógica para buscar clientes en el almacenamiento local
    return null;
  };

  const buscarEmpleado = (nombre) => {
    // Lógica para buscar empleados en el almacenamiento local
    return null;
  };

  const buscarProducto = (id) => {
    // Lógica para buscar productos en el almacenamiento local
    return null;
  };

  const buscarVenta = (id) => {
    // Lógica para buscar ventas en el almacenamiento local
    return null;
  };

  return (
    <div className="w3-container">
      <h2>Buscar</h2>

      <form onSubmit={handleClienteSubmit} className="w3-container w3-card-4 w3-pale-blue w3-text-blue w3-margin">
        <h3>Buscar Cliente</h3>
        <label htmlFor="clienteQuery" className="w3-label">Nombre del cliente:</label>
        <input
          id="clienteQuery"
          type="text"
          value={clienteQuery}
          onChange={handleClienteQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-blue w3-margin-top">Buscar</button>
      </form>

      <form onSubmit={handleEmpleadoSubmit} className="w3-container w3-card-4 w3-pale-yellow w3-text-yellow w3-margin">
        <h3>Buscar Empleado</h3>
        <label htmlFor="empleadoQuery" className="w3-label">Nombre del empleado:</label>
        <input
          id="empleadoQuery"
          type="text"
          value={empleadoQuery}
          onChange={handleEmpleadoQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-yellow w3-margin-top">Buscar</button>
      </form>

      <form onSubmit={handleProductoSubmit} className="w3-container w3-card-4 w3-pale-green w3-text-green w3-margin">
        <h3>Buscar Producto</h3>
        <label htmlFor="productoQuery" className="w3-label">ID del producto:</label>
        <input
          id="productoQuery"
          type="text"
          value={productoQuery}
          onChange={handleProductoQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-green w3-margin-top">Buscar</button>
      </form>

      <form onSubmit={handleVentaSubmit} className="w3-container w3-card-4 w3-pale-red w3-text-red w3-margin">
        <h3>Buscar Venta</h3>
        <label htmlFor="ventaQuery" className="w3-label">ID de la venta:</label>
        <input
          id="ventaQuery"
          type="text"
          value={ventaQuery}
          onChange={handleVentaQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-red w3-margin-top">Buscar</button>
      </form>

      {result && (
        <div>
          {queryType === "cliente" && <ClientesTable clientes={[result]} />}
          {queryType === "empleado" && <EmpleadosTable empleados={[result]} />}
          {queryType === "producto" && <ProductosTable productos={[result]} />}
          {queryType === "venta" && <VentasTable ventas={[result]} />}
        </div>
      )}

      {!result && (
        <div>
          {queryType === "cliente" && <p>No se encontró el cliente.</p>}
          {queryType === "empleado" && <p>No se encontró el empleado.</p>}
          {queryType === "producto" && <p>No se encontró el producto.</p>}
          {queryType === "venta" && <p>No se encontró la venta.</p>}
        </div>
      )}
    </div>
  );
};
