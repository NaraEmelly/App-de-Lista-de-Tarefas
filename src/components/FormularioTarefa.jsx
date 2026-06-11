import { useState } from 'react';
import { Form, Input, SubmitButton } from '../styles/components/Tarefa.styles';

export default function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      adicionarTarefa(texto);
      setTexto('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <SubmitButton type="submit">+ Adicionar</SubmitButton>
    </Form>
  );
}