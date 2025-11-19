// src/pages/GalleryPage.jsx

import React from 'react';
import './GalleryPage.css'; // Asegúrate de importar el CSS local

const GalleryPage = () => {
    // Lista de imágenes para la cuadrícula
    const images = [
        'galeria_1.jpg',
        'galeria_2.jpg',
        'galeria_3.jpg',
        'galeria_4.jpg',
        'galeria_5.jpg',
        'galeria_6.jpg'
    ];

    return (
        // Contenedor principal de la página, usa la clase gallery-page-content
        <div className="gallery-page-content container section-light">
            
            {/* Contenedor de Altura Fija para Títulos */}
            <div className="page-header-content">
                <h2>Galería de Misiones</h2>
                <p>Un vistazo a la acción y el entrenamiento de Task Force Sentinel.</p>
            </div>
            
            {/* Contenedor de la Cuadrícula */}
            <div className="gallery-grid-2-col">
                {images.map((imageName, index) => (
                    <div key={index} className="gallery-item-wrapper">
                        {/* Ruta absoluta para las imágenes */}
                        <img 
                            src={`images/${imageName}`} 
                            alt={`Imagen de Galería ${index + 1}`} 
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryPage;