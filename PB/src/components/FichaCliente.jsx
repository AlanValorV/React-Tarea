import React, { useState, useEffect } from 'react';

const FichaClientes = () => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [clientes, setClientes] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [modoEdicion, setModoEdicion] = useState(false);
    const [clienteEditar, setClienteEditar] = useState(null);

    useEffect(() => {
        cargarClientes();
    }, []); // Se ejecuta solo una vez al montar el componente

    const cargarClientes = () => {
        fetch('http://localhost/backend/leerclientes.php')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica la respuesta del servidor en la consola
                setClientes(data); // Actualiza el estado de clientes con los datos recibidos
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const cliente = {
            id: clienteEditar ? clienteEditar.id : null,
            nombre,
            direccion,
            correo,
            telefono,
        };
    
        const url = modoEdicion ? 'http://localhost/backend/modificarcliente.php' : 'http://localhost/backend/insertarclientes.php';
    
        fetch(url, {
            method: modoEdicion ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.message === (modoEdicion ? 'Cliente actualizado correctamente' : 'Cliente insertado correctamente')) {
                setMensaje(`Cliente ${data.id} ${modoEdicion ? 'actualizado' : 'insertado'} correctamente.`);
                cargarClientes();
                cancelarEdicion();
            } else {
                setMensaje(`Error al intentar ${modoEdicion ? 'actualizar' : 'guardar'} el cliente.`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setMensaje('Error en la conexión o servidor.');
        });
    };

    const handleEliminarCliente = (id) => {
        fetch(`http://localhost/backend/eliminarclientes.php?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verifica la respuesta del servidor en la consola
            
            if (data.message === 'Cliente eliminado correctamente') {
                setMensaje(`Cliente con ID ${id} eliminado correctamente.`);
                cargarClientes(); // Vuelve a cargar la lista de clientes después de eliminar uno
            } else {
                setMensaje('Error al intentar eliminar el cliente.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setMensaje('Error en la conexión o servidor.');
        });
    };

    const cancelarEdicion = () => {
        setModoEdicion(false);
        setClienteEditar(null);
        setNombre('');
        setDireccion('');
        setCorreo('');
        setTelefono('');
    };

    return (
        <div>
            <h2>Ficha de Clientes</h2>
            {modoEdicion ? (
                <form className="w3-container w3-card-4 w3-text-white" style={{ backgroundColor: '#FF7F50', margin: '16px' }} onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Dirección:</label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Correo:</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <button type="submit" className="w3-button w3-block w3-section" style={{ backgroundColor: '#DC143C' }}>Guardar Cambios</button>
                    <button type="button" className="w3-button w3-block w3-section" style={{ backgroundColor: '#DC143C' }} onClick={cancelarEdicion}>Cancelar</button>
                </form>
            ) : (
                <form className="w3-container w3-card-4 w3-text-white" style={{ backgroundColor: '#FF7F50', margin: '16px' }} onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Dirección:</label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Correo:</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <button type="submit" className="w3-button w3-block w3-section" style={{ backgroundColor: '#DC143C' }}>Guardar Cliente</button>
                </form>
            )}

            {mensaje && <p>{mensaje}</p>}

            <h2>Lista de Clientes</h2>
            <table className="w3-table w3-striped w3-bordered w3-hoverable w3-text-white" style={{ backgroundColor: '#483D8B' }}>
                <thead>
                    <tr style={{ backgroundColor: '#DC143C' }}>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FichaClientes;
