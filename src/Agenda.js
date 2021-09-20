import React from "react";
import Contatos from "./Contatos";

export default function Agenda(props) {
  const agendaContatos = props.contatos.map((contato) => {
    return (
      <Contatos
        key={contato.id}
        contato={contato}
        fetchContatosCallback={props.fetchContatosCallback}
      />
    );
  });

  return <table>{agendaContatos}</table>;
}
