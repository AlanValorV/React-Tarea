import React, { useState, useEffect } from "react";
import ProductosTable from "./ProductosTable";
import ClientesTable from "./ClientesTable";
import EmpleadosTable from "./EmpleadosTable";
import VentasTable from "./VentasTable";

export const Insertar = () => {
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    categoria: "",
  });
  const [cliente, setCliente] = useState({
    id: "",
    nombre: "",
    direccion: "",
    correo: "",
    telefono: "",
  });

  const [empleado, setEmpleado] = useState({
    id: "",
    nombre: "",
    apellido: "",
    puesto: "",
    salario: "",
    fecha: "",
  });

  const [venta, setVenta] = useState({
    id: "",
    fecha: "",
    total: 0,
  });

  const [mensaje, setMensaje] = useState("");
  const [productos, setProductos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    // Cargar datos de productos desde el archivo JSON al cargar el componente
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      setProductos(JSON.parse(productosData));
    }
    // Cargar datos de clientes desde el archivo JSON al cargar el componente
    const clientesData = localStorage.getItem("clientes");
    if (clientesData) {
      setClientes(JSON.parse(clientesData));
    }
    // Cargar datos de empleados desde el archivo JSON al cargar el componente
    const empleadosData = localStorage.getItem("empleados");
    if (empleadosData) {
      setEmpleados(JSON.parse(empleadosData));
    }
    // Cargar datos de ventas desde el archivo JSON al cargar el componente
    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      setVentas(JSON.parse(ventasData));
    }
  }, []);

  const guardarDatos = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleClienteChange = (event) => {
    const { name, value } = event.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleProductoChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleEmpleadoChange = (event) => {
    const { name, value } = event.target;
    setEmpleado({ ...empleado, [name]: value });
  };

  const handleVentaChange = (event) => {
    const { name, value } = event.target;
    setVenta({ ...venta, [name]: value });
  };

  const handleSubmitCliente = (event) => {
    event.preventDefault();
    // Asignar un ID único al nuevo cliente
    const nuevoCliente = { ...cliente, id: Date.now().toString() };
    // Agregar nuevo cliente
    const nuevosClientes = [...clientes, nuevoCliente];
    setClientes(nuevosClientes);
    // Guardar clientes en el archivo JSON
    guardarDatos("clientes", nuevosClientes);
    // Limpiar formulario y mostrar mensaje
    setCliente({ id: "", nombre: "", direccion: "", correo: "", telefono: "" });
    setMensaje("Cliente agregado correctamente.");
  };

  const handleSubmitProducto = (event) => {
    event.preventDefault();
    // Asignar un ID único al nuevo producto
    const nuevoProducto = { ...producto, id: Date.now().toString() };
    // Agregar nuevo producto
    const nuevosProductos = [...productos, nuevoProducto];
    setProductos(nuevosProductos);
    // Guardar productos en el archivo JSON
    guardarDatos("productos", nuevosProductos);
    // Limpiar formulario y mostrar mensaje
    setProducto({
      id: "",
      nombre: "",
      descripcion: "",
      precio: 0,
      stock: 0,
      categoria: "",
    });
    setMensaje("Producto agregado correctamente.");
  };

  const handleSubmitEmpleado = (event) => {
    event.preventDefault();
    // Asignar un ID único al nuevo empleado
    const nuevoEmpleado = { ...empleado, id: Date.now().toString() };
    // Agregar nuevo empleado
    const nuevosEmpleados = [...empleados, nuevoEmpleado];
    setEmpleados(nuevosEmpleados);
    // Guardar empleados en el archivo JSON
    guardarDatos("empleados", nuevosEmpleados);
    // Limpiar formulario y mostrar mensaje
    setEmpleado({
      id: "",
      nombre: "",
      apellido: "",
      puesto: "",
      salario: "",
      fecha: "",
    });
    setMensaje("Empleado agregado correctamente.");
  };

  const handleSubmitVenta = (event) => {
    event.preventDefault();
    // Asignar un ID único a la nueva venta
    const nuevaVenta = { ...venta, id: Date.now().toString() };
    // Agregar nueva venta
    const nuevasVentas = [...ventas, nuevaVenta];
    setVentas(nuevasVentas);
    // Guardar ventas en el archivo JSON
    guardarDatos("ventas", nuevasVentas);
    // Limpiar formulario y mostrar mensaje
    setVenta({ id: "", fecha: "", total: 0 });
    setMensaje("Venta agregada correctamente.");
  };

  return (
    <div className="w3-container">
      {/* Mensaje de éxito o error */}
      {mensaje && <p>{mensaje}</p>}

      {/* Formulario para agregar clientes */}
      <form
        className="w3-container w3-card-4"
        style={{ backgroundColor: "#cd5c5c", color: "#ffffff", margin: "10px" }}
        onSubmit={handleSubmitCliente}
      >
        <h2>Agregar Cliente</h2>
        <p>
          <label className="w3-text-white">
            <b>Nombre del cliente</b>
          </label>
          <input
            name="nombre"
            type="text"
            value={cliente.nombre}
            onChange={handleClienteChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Teléfono</b>
          </label>
          <input
            name="telefono"
            type="text"
            value={cliente.telefono}
            onChange={handleClienteChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Dirección</b>
          </label>
          <input
            name="direccion"
            type="text"
            value={cliente.direccion}
            onChange={handleClienteChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Correo electrónico</b>
          </label>
          <input
            name="correo"
            type="email"
            value={cliente.correo}
            onChange={handleClienteChange}
            className="w3-input w3-border"
          />
        </p>
        <button type="submit" className="w3-btn w3-blue w3-margin-top">
          Agregar Cliente
        </button>
      </form>

      {/* Formulario para agregar productos */}
      <form
        className="w3-container w3-card-4"
        style={{ backgroundColor: "#5f9ea0", color: "#ffffff", margin: "10px" }}
        onSubmit={handleSubmitProducto}
      >
        <h2>Agregar Producto</h2>
        <p>
          <label className="w3-text-white">
            <b>Nombre del producto</b>
          </label>
          <input
            name="nombre"
            type="text"
            value={producto.nombre}
            onChange={handleProductoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Categoría</b>
          </label>
          <input
            name="categoria"
            type="text"
            value={producto.categoria}
            onChange={handleProductoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Descripción</b>
          </label>
          <input
            name="descripcion"
            type="text"
            value={producto.descripcion}
            onChange={handleProductoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Stock</b>
          </label>
          <input
            name="stock"
            type="number"
            value={producto.stock}
            onChange={handleProductoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Precio</b>
          </label>
          <input
            name="precio"
            type="number"
            value={producto.precio}
            onChange={handleProductoChange}
            className="w3-input w3-border"
          />
        </p>
        <button type="submit" className="w3-btn w3-green w3-margin-top">
          Agregar Producto
        </button>
      </form>

      {/* Formulario para agregar empleados */}
      <form
        className="w3-container w3-card-4"
        style={{ backgroundColor: "#191970", color: "#ffffff", margin: "10px" }}
        onSubmit={handleSubmitEmpleado}
      >
        <h2>Agregar Empleado</h2>
        <p>
          <label className="w3-text-white">
            <b>Nombre del empleado</b>
          </label>
          <input
            name="nombre"
            type="text"
            value={empleado.nombre}
            onChange={handleEmpleadoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Apellido</b>
          </label>
          <input
            name="apellido"
            type="text"
            value={empleado.apellido}
            onChange={handleEmpleadoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Puesto</b>
          </label>
          <input
            name="puesto"
            type="text"
            value={empleado.puesto}
            onChange={handleEmpleadoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Salario</b>
          </label>
          <input
            name="salario"
            type="number"
            value={empleado.salario}
            onChange={handleEmpleadoChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Fecha de contratación</b>
          </label>
          <input
            name="fecha"
            type="date"
            value={empleado.fecha}
            onChange={handleEmpleadoChange}
            className="w3-input w3-border"
          />
        </p>
        <button type="submit" className="w3-btn w3-yellow w3-margin-top">
          Agregar Empleado
        </button>
      </form>

      {/* Formulario para agregar ventas */}
      <form
        className="w3-container w3-card-4"
        style={{ backgroundColor: "#ba55d3", color: "#ffffff", margin: "10px" }}
        onSubmit={handleSubmitVenta}
      >
        <h2>Agregar Venta</h2>
        <p>
          <label className="w3-text-white">
            <b>Nombre del producto vendido</b>
          </label>
          <input
            name="nombre"
            type="text"
            value={venta.nombre}
            onChange={handleVentaChange}
            className="w3-input w3-border"
          />
        </p>
        <p>
          <label className="w3-text-white">
            <b>Fecha</b>
          </label>
          <input
            name="fecha"
            type="date"
            value={venta.fecha}
            onChange={handleVentaChange}
            className="w3-input w3-border"
            />
          </p>
          <button type="submit" className="w3-btn w3-red w3-margin-top">
            Agregar Venta
          </button>
        </form>
      </div>
    );
  
    
  };