import React from 'react';
// 1. Importar componentes de enrutamiento
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Importar componentes de Layout y Páginas
import Layout from './components/Layout.jsx'; 
import LandingPage from './pages/LandingPage.jsx'; 
import GalleryPage from './pages/GalleryPage.jsx'; 
// (Asegúrate de tener un componente para 404/Error, opcionalmente)

function App() {
    return (
        // BrowserRouter envuelve toda la aplicación para manejar las URLs
        <BrowserRouter>
            {/* Layout ahora contiene los Routes y el contenido se renderiza dentro de <main> */}
            <Layout>
                <Routes>
                    {/* 3. Definir las rutas */}
                    
                    {/* Ruta de inicio (http://localhost:5173/) */}
                    <Route path="/" element={<LandingPage />} /> 

                    {/* Ruta de galería (http://localhost:5173/galeria) */}
                    <Route path="/galeria" element={<GalleryPage />} /> 

                    {/* Puedes añadir más rutas aquí (ej: /formulario, /politicas) */}
                    {/* Ruta para cualquier otra URL (Página no encontrada) */}
                    <Route path="*" element={<h1>404 | Página No Encontrada</h1>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;