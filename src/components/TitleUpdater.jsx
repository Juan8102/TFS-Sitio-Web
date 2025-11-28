import React, { useEffect } from 'react';

const TitleUpdater = ({ title }) => {
    useEffect(() => {
        document.title = title || "T.F.S | Página de Inicio"; 
        
        return () => {
        };

    }, [title]);

    return null;
};

export default TitleUpdater;