cat > src/components/Header.jsx << 'EOF'
import { HeaderContainer, Title, ThemeButton } from '../styles/components/Header.styles';

export default function Header({ toggleTheme, isDark }) {
  return (
    <HeaderContainer>
      <Title>📝 Minhas Tarefas</Title>
      <ThemeButton onClick={toggleTheme}>
        {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
      </ThemeButton>
    </HeaderContainer>
  );
}
EOF