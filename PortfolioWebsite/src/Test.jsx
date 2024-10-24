import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './test.css';

function Test() {
  const [numSquares, setNumSquares] = useState(0);
  const squareSize = 25; // Taille d'un carré (en pixels)
  const gapSize = 10; // Espace entre les carrés

  // Fonction pour calculer le nombre de carrés en fonction des dimensions de la fenêtre
  const calculateSquares = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculer combien de colonnes et de lignes peuvent être affichées
    const numCols = Math.floor(screenWidth / (squareSize + gapSize));
    const numRows = Math.floor(screenHeight / (squareSize + gapSize));

    // Nombre total de carrés
    setNumSquares(numCols * numRows);
  };

  // Appeler la fonction au chargement et lors du redimensionnement de la fenêtre
  useEffect(() => {
    calculateSquares();
    window.addEventListener('resize', calculateSquares);
    
    // Nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => window.removeEventListener('resize', calculateSquares);
  }, []);

  // Générer le nombre de carrés calculé
  const squares = Array.from({ length: numSquares }, (_, index) => <Square key={index} />);

  return (
    <div className="App">
      <div className="grid-container">
        {squares}
      </div>
    </div>
  );
}

function Square() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="square"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered ? "rgba(18, 151, 52, 0.5)" : "transparent",
        scale: isHovered ? 1.3 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={`hover-effect ${isHovered ? 'active' : ''}`}></div>
      <div className='hover-area'></div>
    </motion.div>
  );
}

export default Test;
