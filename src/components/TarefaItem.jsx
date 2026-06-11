import { ItemContainer, TaskText, ButtonGroup, ActionButton } from '../styles/components/Tarefa.styles';

export default function TarefaItem({ tarefa, toggleConcluida, removerTarefa }) {
  return (
    <ItemContainer>
      <TaskText
        $concluida={tarefa.concluida}
        onClick={() => toggleConcluida(tarefa.id)}
      >
        {tarefa.texto}
      </TaskText>
      <ButtonGroup>
        <ActionButton onClick={() => toggleConcluida(tarefa.id)}>
          {tarefa.concluida ? '↺' : '✓'}
        </ActionButton>
        <ActionButton $perigo onClick={() => removerTarefa(tarefa.id)}>
          ✗
        </ActionButton>
      </ButtonGroup>
    </ItemContainer>
  );
}