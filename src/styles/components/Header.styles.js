import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;
  padding: ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colors.card};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.primary};
`;

export const ThemeButton = styled.button`
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
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