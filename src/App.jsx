import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/Header';
import FormularioTarefa from './components/FormularioTarefa';
import TarefaItem from './components/TarefaItem';
import Filtros from './components/Filtros';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas'); // 'todas', 'ativas', 'concluidas'

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const adicionarTarefa = (texto) => {
    setTarefas([...tarefas, { id: Date.now(), texto, concluida: false }]);
  };

  const alternarStatus = (id) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const deletarTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  // Filtragem das tarefas antes de renderizar
  const tarefasFiltradas = tarefas.filter(t => {
    if (filtro === 'ativas') return !t.concluida;
    if (filtro === 'concluidas') return t.concluida;
    return true;
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <main style={{ width: '100%', maxWidth: '500px' }}>
        <Header isDarkMode={isDarkMode} toggleTema={() => setIsDarkMode(!isDarkMode)} />
        <FormularioTarefa adicionarTarefa={adicionarTarefa} />
        <Filtros filtroAtual={filtro} setFiltro={setFiltro} />
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tarefasFiltradas.map(tarefa => (
            <TarefaItem 
              key={tarefa.id} 
              tarefa={tarefa} 
              alternarStatus={alternarStatus} 
              deletarTarefa={deletarTarefa} 
            />
          ))}
        </ul>
      </main>
    </ThemeProvider>
  );
}

export default App;
