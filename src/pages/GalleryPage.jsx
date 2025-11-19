// src/pages/GalleryPage.jsx

import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
    // 💡 NOTA: Reemplaza estos nombres de archivo con los nombres reales de tus imágenes
    const images = [
        'galeria_1.jpg',
        'galeria_2.jpg',
        'galeria_3.jpg',
        'galeria_4.jpg',
        'galeria_5.jpg',
        'galeria_6.jpg'
    ];

    return (
        // Usamos la clase 'container' para limitar el ancho y centrar, y padding para el margen superior/inferior
        <div className="galeria-page-content container section-light">
            <h2>📸 Galería de Misiones</h2>
            <p>Un vistazo a la acción y el entrenamiento de Task Force Sentinel.</p>

            {/* Contenedor de la Cuadrícula */}
            <div className="gallery-grid-2-col">
                {images.map((imageName, index) => (
                    // Cada foto es un item de la cuadrícula
                    <div key={index} className="gallery-item-wrapper">
                        {/* La ruta es absoluta desde la carpeta 'public/images/' */}
                        <img 
                            src={`/images/${imageName}`} 
                            alt={`Imagen de Galería ${index + 1}`} 
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>
            {/* Opcional: Más secciones de galería aquí */}
        </div>
    );
}

export default GalleryPage;