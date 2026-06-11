import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const TaskText = styled.span`
  flex: 1;
  text-decoration: ${props => props.$concluida ? 'line-through' : 'none'};
  opacity: ${props => props.$concluida ? 0.7 : 1};
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.small};
`;

export const ActionButton = styled.button`
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.$perigo ? props.theme.colors.danger : props.theme.colors.primary};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.large};
  justify-content: center;
`;

export const Input = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.small};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const FilterButton = styled.button`
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  background-color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.card};
  color: ${props => props.$active ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;