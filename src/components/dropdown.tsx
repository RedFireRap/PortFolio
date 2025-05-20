import React, { useState } from 'react';
import styled from 'styled-components';
import { styles } from '../styles/drop';

const Dropdown: React.FC = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    setIsOpen(!isOpen);  // Alterna o estado do dropdown
  };

  return (

    <div style={{ position: 'relative', display: 'inline-block' }}>
    {/* O link 'Projetos' que, ao ser clicado, abre o dropdown */}
    <a 
      href="#" 
      style={styles.link}
      onClick={toggleDropdown} // Ao clicar no link 'Projetos', o dropdown abre/fecha
    >
        Projetos
    </a>
    
    {/* Exibe o dropdown apenas se o estado 'isOpen' for true */}
    {isOpen && (
      <ul style={styles.dropdownMenu}>
        <li>
          <a style={{textDecoration:'none', color:'yellow'}} href="https://redfirerap.github.io/Projeto-Nike/" target="_blank" rel="noopener noreferrer">Projeto Nike</a>
        </li>
        
        <li>
          <a style={{textDecoration:'none', color:'goldenrod'}} href="https://redfirerap.github.io/Projeto-StarBucks/" target='_blank'>Projeto StarBucks</a>
        </li>
      </ul>
    )}
  </div>
);
};

export default Dropdown;