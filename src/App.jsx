import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import FormularioTarefa from './components/FormularioTarefa';
import Filtros from './components/Filtros';
import TarefaItem from './components/TarefaItem';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [isDark, setIsDark] = useState(false);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const toggleConcluida = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'ativas') return !tarefa.concluida;
    if (filtro === 'concluidas') return tarefa.concluida;
    return true;
  });

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        <FormularioTarefa adicionarTarefa={adicionarTarefa} />
        <Filtros filtroAtual={filtro} setFiltro={setFiltro} />
        {tarefasFiltradas.map(tarefa => (
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            toggleConcluida={toggleConcluida}
            removerTarefa={removerTarefa}
          />
        ))}
        {tarefasFiltradas.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>Nenhuma tarefa encontrada</p>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;