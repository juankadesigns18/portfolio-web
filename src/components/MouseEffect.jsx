import React, { useState, useEffect } from 'react';
import './MouseEffect.css';  // Asegúrate de que el archivo de estilos tenga el nombre correcto

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Actualiza la posición según el movimiento del mouse
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Escucha el evento de movimiento del mouse
    window.addEventListener('mousemove', handleMouseMove);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-effect"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: `translate(-50%, -50%)`,  // Centra el círculo en el cursor
      }}
    />
  );
};

export default MouseEffect;
