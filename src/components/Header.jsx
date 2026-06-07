import React from 'react';
import { HeaderContainer, ToggleButton } from '../styles/components/Header.styles';

function Header({ isDarkMode, toggleTema }) {
  return (
    <HeaderContainer>
      <h1>Lista de Tarefas</h1>
      <ToggleButton onClick={toggleTema}>
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </ToggleButton>
    </HeaderContainer>
  );
}

export default Header;
