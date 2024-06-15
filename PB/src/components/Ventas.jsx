import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VentaP = () => {
    const [newPedido, setNewPedido] = useState({
        id_pedido: '',
        fecha_pedido: '',
        id_producto: '',
        cantidad_solicitada: '',
        costo_pedido: ''
    });

   
};

export default VentaP;
