
function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div className="resumo">
      <div className="indicador">
        <h3>Total de projetos</h3>
        <p>{total}</p>
      </div>

      <div className="indicador">
        <h3>Concluídos</h3>
        <p>{concluidos}</p>
      </div>

      <div className="indicador">
        <h3>Em desenvolvimento</h3>
        <p>{emDesenvolvimento}</p>
      </div>
    </div>
  );
}

export default Resumo;
