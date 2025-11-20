import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ... Importaciones de componentes ...
import Layout from './components/Layout.jsx'; 
import LandingPage from './pages/LandingPage.jsx'; 
import GalleryPage from './pages/GalleryPage.jsx'; 

function App() {
    return (
        // CLAVE: ELIMINAMOS basename. BrowserRouter trabajará con las rutas relativas.
        <BrowserRouter> 
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} /> 
                    <Route path="/galeria" element={<GalleryPage />} /> 
                    {/* ... otras rutas ... */}
                    <Route path="*" element={<h1>404 | Página No Encontrada</h1>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;