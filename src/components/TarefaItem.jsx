import React from 'react';
import { ItemLista, TextoItem } from '../styles/components/Tarefa.styles';

function TarefaItem({ tarefa, alternarStatus, deletarTarefa }) {
  return (
    <ItemLista>
      <TextoItem 
        $concluida={tarefa.concluida} 
        onClick={() => alternarStatus(tarefa.id)}
        style={{ cursor: 'pointer', flex: 1 }}
      >
        {tarefa.texto}
      </TextoItem>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button onClick={() => alternarStatus(tarefa.id)}>Concluir</button>
        <button onClick={() => deletarTarefa(tarefa.id)}>Excluir</button>
      </div>
    </ItemLista>
  );
}

export default TarefaItem;
