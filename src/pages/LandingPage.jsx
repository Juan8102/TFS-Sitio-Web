import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        // Usamos un Fragmento (<>...</>) para envolver todas las secciones
        <>
            {/* 1. HERO SECTION */}
            <section 
                className="hero-section" 
                // Estilo en línea convertido a objeto JS
                style={{backgroundImage: "url('images/fondo_1.png')"}}
            >
                <div className="hero-content">
                    <h1 className="hero-title">Task Force Sentinel</h1>
                    <p className="hero-subtitle">"celeritas et audacia"</p>
                </div>
            </section>

            {/* 2. SECCIÓN MODULAR 1 */}
            <section 
                id="seccion-1" 
                className="section section-dark custom-bg"
                // Estilo en línea convertido a objeto JS
                style={{backgroundImage: "url('images/fondo_seccion_2.webp')"}}
            >
                <div className="container section-content-wrapper">
                    <div className="section-text-content section-image-right">
                        <h2>Sobre nosotros</h2>
                        <p>Contenido principal de la primera sección. Esta sección tiene una imagen de fondo y la imagen principal está a la derecha.</p>
                    </div>
                    <div className="section-image-wrapper">
                        {/* Ruta actualizada a absoluta: /images/... */}
                        <img src="images/logo.png" alt="Imagen 1" /> 
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN MODULAR 2 */}
            <section id="seccion-2" className="section section-light">
                <div className="container section-content-wrapper reverse-layout">
                    <div className="section-image-wrapper">
                        {/* Ruta actualizada a absoluta: /images/... */}
                        <img src="images/logo.png" alt="Imagen 2" />
                    </div>
                    <div className="section-text-content section-image-left">
                        <h2>Misión</h2>
                        <p>Contenido de la segunda sección. Aquí demostramos la flexibilidad para colocar la imagen principal a la izquierda.</p>
                    </div>
                </div>
            </section>

            {/* 4. SECCIÓN MODULAR 3 */}
            <section id="seccion-3" className="section section-dark">
                <div className="container">
                    <h2>Sección 3: Precios (Solo Texto)</h2>
                    <p>Contenido de la tercera sección. Una sección tradicional sin imágenes laterales.</p>
                </div>
            </section>
        </>
    );
}

export default LandingPage;