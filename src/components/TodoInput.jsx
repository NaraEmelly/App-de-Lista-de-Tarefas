import React, { useState } from 'react';
import styled from 'styled-components';


const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  width: 100%;
`;


const StyledInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid ${(props) => props.theme.taskBorder};
  border-radius: 8px;
  background-color: ${(props) => props.theme.taskBg};
  color: ${(props) => props.theme.text};
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme.buttonBg};
  }
`;


const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

function TodoInput({ aoAdicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const enviosDoFormulario = (evento) => {
    evento.preventDefault();
    
    
    if (!texto.trim()) return;

    
    aoAdicionarTarefa(texto);
    
    
    setTexto('');
  };

  return (
    <FormContainer onSubmit={enviosDoFormulario}>
      <StyledInput
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
      />
      <StyledButton type="submit">Adicionar</StyledButton>
    </FormContainer>
  );
}

export default TodoInput;
