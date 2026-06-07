import React from 'react';

function Filtros({ filtroAtual, setFiltro }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <button disabled={filtroAtual === 'todas'} onClick={() => setFiltro('todas')}>Todas</button>
      <button disabled={filtroAtual === 'ativas'} onClick={() => setFiltro('ativas')}>Ativas</button>
      <button disabled={filtroAtual === 'concluidas'} onClick={() => setFiltro('concluidas')}>Concluídas</button>
    </div>
  );
}

export default Filtros;
