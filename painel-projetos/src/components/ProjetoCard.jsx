
import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";
import "./ProjetoCard.css";


function ProjetoCard({ titulo,descricao, responsavel, status, tecnologias,destaque}) {
  return (
    <article className={`projeto-card ${destaque ? "destaque" : ""}`}>
      {destaque && <strong>Projeto em destaque</strong>}

      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>Responsável: {responsavel}</p>

      <StatusBadge status={status} />

      <div className="projeto-tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard;
