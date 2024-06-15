import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Producs = () => {
    const [newProduct, setNewProduct] = useState({
        id_producto: '',
        nom_producto: '',
        categoria: '',
        stock: '',
        precio_compra: '',
        precio_venta: ''
    });
};

export default Producs;
