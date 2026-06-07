import React, { useState } from 'react';
import { FormContainer, InputTarefa, BotaoTarefa } from '../styles/components/Tarefa.styles';

function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const lidarComEnvio = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    adicionarTarefa(texto);
    setTexto('');
  };

  return (
    <FormContainer onSubmit={lidarComEnvio}>
      <InputTarefa
        type="text"
        placeholder="Nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <BotaoTarefa type="submit">Adicionar</BotaoTarefa>
    </FormContainer>
  );
}

export default FormularioTarefa;
