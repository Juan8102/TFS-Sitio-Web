// src/components/Layout.jsx
import React from 'react';
import Header from './Header.jsx'; // Importa el Header
import Footer from './Footer.jsx'; // Importa el Footer

const Layout = ({ children }) => {
    return (
        <>
            <Header /> {/* Componente fijo */}
            
            <main>
                {/* Aquí se renderizará el contenido específico de cada página (LandingPage, Galeria, etc.) */}
                {children} 
            </main>
            
            <Footer /> {/* Componente fijo */}
        </>
    );
}

export default Layout;