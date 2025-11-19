import React from 'react';

// 1. Importar el componente Link
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Usamos Link en lugar de <a> para navegar en React */}
                <Link to="/" className="logo-text-wrapper"> 
                    <span className="logo-text">Task Force Sentinel</span>
                </Link>
                <nav className="nav">
                    {/* Enlaces de navegación usando Link y la ruta definida en Routes */}
                    <Link to="/" className="nav-link">Inicio</Link> 
                    <Link to="/galeria" className="nav-link">Galería</Link>
                    <Link to="/formulario" className="nav-link">Formulario de ingreso</Link>
                    <Link to="/politicas" className="nav-link">Políticas</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;