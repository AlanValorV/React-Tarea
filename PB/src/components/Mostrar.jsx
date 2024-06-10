import React, { useState, useEffect } from "react";
import ClientesTable from "./ClientesTable";
import EmpleadosTable from "./EmpleadosTable";
import ProductosTable from "./ProductosTable";
import VentasTable from "./VentasTable";

export const Mostrar = () => {
  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    // Cargar datos de clientes desde el almacenamiento local al cargar el componente
    const clientesData = localStorage.getItem("clientes");
    if (clientesData) {
      setClientes(JSON.parse(clientesData));
    }

    // Cargar datos de empleados desde el almacenamiento local al cargar el componente
    const empleadosData = localStorage.getItem("empleados");
    if (empleadosData) {
      setEmpleados(JSON.parse(empleadosData));
    }

    // Cargar datos de productos desde el almacenamiento local al cargar el componente
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      setProductos(JSON.parse(productosData));
    }

    // Cargar datos de ventas desde el almacenamiento local al cargar el componente
    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      setVentas(JSON.parse(ventasData));
    }
  }, []);

  return (
    <div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-blue">Clientes</h2>
        <ClientesTable clientes={clientes} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-yellow">Empleados</h2>
        <EmpleadosTable empleados={empleados} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-green">Productos</h2>
        <ProductosTable productos={productos} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-red">Ventas</h2>
        <VentasTable ventas={ventas} />
      </div>
    </div>
  );
};
