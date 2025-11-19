import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                
                {/* 1. Navegación Izquierda: Inicio y Galería */}
                <nav className="nav nav-left">
                    <Link to="/" className="nav-link">Inicio</Link> 
                    <Link to="/galeria" className="nav-link">Galería</Link>
                </nav>

                {/* 2. Logo Central */}
                <Link to="/" className="logo-text-wrapper"> 
                    <img 
                        src="images/logo.png" 
                        alt="Logo de Task Force Sentinel" 
                        className="header-logo" 
                    />
                </Link>

                {/* 3. Navegación Derecha: Formulario y Políticas */}
                <nav className="nav nav-right">
                    <Link to="/formulario" className="nav-link">Sé parte</Link>
                    <Link to="/politicas" className="nav-link">Políticas</Link>
                </nav>

            </div>
        </header>
    );
}

export default Header;