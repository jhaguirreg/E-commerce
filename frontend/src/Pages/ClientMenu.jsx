import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ClientMenu.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ClientMenu = () => {
    const [clientInfo, setClientInfo] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { idClie, logout } = useContext(ShopContext);

    const handleLogout = () => {
        logout();
        navigate('/loginlog');
    };

    const infoCliente = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/cliente', {
                id_clie: idClie 
            });
            setClientInfo(response.data);
        } catch (err) {
            setError('Error al cargar la información del cliente');
        }
    };

    useEffect(() => {
        if (idClie) {
            infoCliente();
        }
    }, [idClie]);

    return (
        <div className="clientmenu">
            <div className="clientmenu-container">
                <h1>Bienvenido!</h1>
                {error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : clientInfo ? (
                    <div>
                        <p>Nombre: {clientInfo.nombre}</p>
                        <p>Fecha de Nacimiento: {clientInfo.fecha_nac}</p>
                        <p>Correo: {clientInfo.correo}</p>
                        <p>Teléfono: {clientInfo.tel}</p>
                        <p>Dirección: {clientInfo.dir}</p>
                    </div>
                ) : (
                    <p>Cargando información del cliente...</p>
                )}
                <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
        </div>
    );
};
