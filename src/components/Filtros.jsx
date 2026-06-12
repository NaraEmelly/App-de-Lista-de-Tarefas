import { FilterContainer, FilterButton } from '../styles/components/Tarefa.styles';

export default function Filtros({ filtroAtual, setFiltro }) {
  const filtros = [
    { valor: 'todas', label: 'Todas' },
    { valor: 'ativas', label: 'Ativas' },
    { valor: 'concluidas', label: 'Concluídas' }
  ];

  return (
    <FilterContainer>
      {filtros.map(filtro => (
        <FilterButton
          key={filtro.valor}
          $active={filtroAtual === filtro.valor}
          onClick={() => setFiltro(filtro.valor)}
        >
          {filtro.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}