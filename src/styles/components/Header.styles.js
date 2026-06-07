import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.taskBorder};
`;

export const ToggleButton = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;
