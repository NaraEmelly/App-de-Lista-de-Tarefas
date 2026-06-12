import { HeaderContainer, Title, ThemeButton } from '../styles/components/Header.styles';

export default function Header({ toggleTheme, isDark }) {
  return (
    <HeaderContainer>
      <Title>Lista de Tarefas</Title>
      <ThemeButton onClick={toggleTheme}>
        {isDark ? '☀️' : '🌙'}
      </ThemeButton>
    </HeaderContainer>
  );
}