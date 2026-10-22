
import "./StatusBadge.css";

function StatusBadge({ status }) {
  const classe =
    status === "Concluído"
      ? "concluido"
      : status === "Em desenvolvimento"
      ? "em-desenvolvimento"
      : status === "Planejamento"
      ? "planejamento"
      : "outro-status";

  return <span className={`status-badge ${classe}`}>{status}</span>;
}

export default StatusBadge;
