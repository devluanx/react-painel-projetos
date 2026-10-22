import StatusBadge from "./components/StatusBadge";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao:"Controle de produtos",
    responsavel: "Ana",
    status:"Concluído",
    tecnologias:["React","Node.js","PostgreSQL"],
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
  }
]



function App(){
  return(
    <>
    Lista de Projetos Desenvolvidos
    <StatusBadge status="Concluído" />
      <StatusBadge status="Em desenvolvimento" />
      <StatusBadge status="Planejamento" />
     
    </>
  )
}

export default App;