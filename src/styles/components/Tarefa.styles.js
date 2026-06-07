import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;

  `;

export const InputTarefa = styled.input`
  flex: 1;
  padding: 12px;
  border: 2px solid ${(props) => props.theme.taskBorder};
  border-radius: 6px;
  background-color: ${(props) => props.theme.taskBg};
  color: ${(props) => props.theme.text};
`;

export const BotaoTarefa = styled.button`
  padding: 12px 20px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const ItemLista = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: ${(props) => props.theme.taskBg};
  border: 1px solid ${(props) => props.theme.taskBorder};
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const TextoItem = styled.span`
  text-decoration: ${(props) => (props.$concluida ? 'line-through' : 'none')};
  color: ${(props) => (props.$concluida ? props.theme.completedText : props.theme.text)};
`;
