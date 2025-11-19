import React from 'react';
import './Footer.css';

// Asegúrate de que los íconos de Font Awesome estén disponibles globalmente.

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>

                <div className="footer-info">
                    <p>&copy; 2025 Task Force Sentinel</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;