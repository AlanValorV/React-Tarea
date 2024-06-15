import React, { useState, useEffect } from 'react';

const FichaVentas = () => {
    const [fecha, setFecha] = useState('');
    const [total, setTotal] = useState('');
    const [ventas, setVentas] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [modoEdicion, setModoEdicion] = useState(false);
    const [ventaEditar, setVentaEditar] = useState(null);

    useEffect(() => {
        cargarVentas();
    }, []); // Se ejecuta solo una vez al montar el componente

    const cargarVentas = () => {
        fetch('http://localhost/backend/leerventas.php')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica la respuesta del servidor en la consola
                setVentas(data); // Actualiza el estado de ventas con los datos recibidos
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const venta = {
            id: ventaEditar ? ventaEditar.id : null,
            fecha,
            total: parseFloat(total),
        };
    
        const url = modoEdicion ? 'http://localhost/backend/modificarventa.php' : 'http://localhost/backend/insertarventas.php';
    
        fetch(url, {
            method: modoEdicion ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(venta),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.message === (modoEdicion ? 'Venta actualizada correctamente' : 'Venta insertada correctamente')) {
                setMensaje(`Venta ${data.id} ${modoEdicion ? 'actualizada' : 'insertada'} correctamente.`);
                cargarVentas();
                cancelarEdicion();
            } else {
                setMensaje(`Error al intentar ${modoEdicion ? 'actualizar' : 'guardar'} la venta.`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setMensaje('Error en la conexión o servidor.');
        });
    };

    const handleEliminarVenta = (id) => {
        fetch(`http://localhost/backend/eliminarventas.php?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verifica la respuesta del servidor en la consola
            
            if (data.message === 'Venta eliminada correctamente') {
                setMensaje(`Venta con ID ${id} eliminada correctamente.`);
                cargarVentas(); // Vuelve a cargar la lista de ventas después de eliminar una
            } else {
                setMensaje('Error al intentar eliminar la venta.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setMensaje('Error en la conexión o servidor.');
        });
    };

    const cancelarEdicion = () => {
        setModoEdicion(false);
        setVentaEditar(null);
        setFecha('');
        setTotal('');
    };

    return (
        <div>
            <h2 style={{ color: 'white' }}>Ficha de Ventas</h2>
            {modoEdicion ? (
                <form className="w3-container w3-card-4 w3-text-white" style={{ backgroundColor: '#FF7F50', margin: '16px' }} onSubmit={handleSubmit}>
                    <label>Fecha:</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Total:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <button type="submit" className="w3-button w3-block w3-section" style={{ backgroundColor: '#DC143C' }}>Guardar Cambios</button>
                    <button type="button" className="w3-button w3-block w3-section" style={{ backgroundColor: '#DC143C' }} onClick={cancelarEdicion}>Cancelar</button>
                </form>
            ) : (
                <form className="w3-container w3-card-4 w3-text-white" style={{ backgroundColor: '#FF7F50', margin: '16px' }} onSubmit={handleSubmit}>
                    <label>Fecha:</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <label>Total:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        required
                        className="w3-input"
                    /><br />
                    <button type="submit" className="w3-button w3-block w3-section" style={{ backgroundColor: '#DC143C' }}>Guardar Venta</button>
                </form>
            )}

            {mensaje && <p>{mensaje}</p>}

            <h2 style={{ color: 'white' }}>Lista de Ventas</h2>
            <table className="w3-table w3-striped w3-bordered w3-hoverable w3-text-white" style={{ backgroundColor: '#483D8B' }}>
                <thead>
                    <tr style={{ backgroundColor: '#DC143C' }}>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map(venta => (
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

export default FichaVentas;
