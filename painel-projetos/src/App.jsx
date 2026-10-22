import ProjetoCard from "./components/ProjetoCard";
import Secao from "./components/Secao"
import Resumo from "./components/Resumo";
import Rodape from "./components/Rodape";
const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao:"Controle de produtos",
    responsavel: "Ana",
    status:"Concluído",
    tecnologias:["React","Node.js","PostgreSQL","PHP"],
    destaque:true
  },

  {
    id:2,
    titulo:"Organiza +",
    descricao:"Organizador de Tarefas",
    responsavel: "Luan",
    status:"Concluído",
    tecnologias:["JavaScript","HTML","CSS"],
    destaque:true
  },

  {
    id: 3,
    titulo:"Feira Digital de Trocas",
    descricao:"Troque seus itens virtualmente",
    responsavel:"Luan",
    status:"Concluído",
    tecnologias:["JavaScript","HTML","CSS"],
    destaque:true
  },

  {
    id: 4,
    titulo:"Sistema de Agendamento",
    descricao:"Sistema para pequenas empresas controlarem produtos e movimentações",
    responsavel:"Jackson",
    status:"Em desenvolvimento",
    tecnologias:["React","JavaScript","Node.js","CSS","mySQL"],
    destaque:true
  },

  {
    id:5,
    titulo:"Sistema de chamados técnicos",
    descricao:"Ideal simular um sistema utilizado por uma equipe de TI",
    responsavel:"Yago",
    status:"Planejamento",
    tecnologias:["React","JavaScript","Node.js","CSS","PostgreSQL"],
    destaque:true
  },

  {
    id:6,
    titulo:"Biblioteca Digital - Gestão de empréstimos",
    descricao:"Sistema web para gerenciar uma biblioteca, permitindo cadastrar livros e leitores, controlar empréstimos e devoluções e acompanhar atrasos de forma eficiente",
    responsavel:"Pedro",
    status:"Em desenvolvimento",
    tecnologias:["React","JavaScript","Node.js","CSS","mySQL"],
    destaque:true
  },
  {
    id:7,
    titulo:"Mini RPG",
    descricao:"Mini RPG para se divertir",
    responsavel:"Luan",
    status:"Concluído",
    tecnologias:["JavaScript","CSS","HTML"],
    destaque: false
  }
]



function App(){
  const total = projetos.length;

const concluidos = projetos.filter(
  (projeto) => projeto.status === "Concluído"
).length;

const emDesenvolvimento = projetos.filter(
  (projeto) => projeto.status === "Em desenvolvimento"
).length;
  return(
    <>
    <h1>Lista de Projetos Desenvolvidos</h1>

  <Secao titulo="Resumo do painel">
    <Resumo
      total={total}
      concluidos={concluidos}
      emDesenvolvimento={emDesenvolvimento}
    />
  </Secao>

  <Secao titulo="Projetos da turma">
    <div className="projetos-lista">
      {projetos.map((projeto) => (
        <ProjetoCard
          key={projeto.id}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
          responsavel={projeto.responsavel}
          status={projeto.status}
          tecnologias={projeto.tecnologias}
          destaque={projeto.destaque}
        />
      ))}
    </div>
  </Secao>
  <Secao>
  <div className="projetos-lista">
  </div>
</Secao>

<Rodape />

  
     
    </>
  )
}

export default App;