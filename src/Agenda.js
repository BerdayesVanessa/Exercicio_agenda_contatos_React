import React from "react";
import Contatos from "./Contatos";

export default class Agenda extends React.Component {
  constructor() {
    super();

    this.state = {
      contatos: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/contatos")
      .then((response) => response.json())
      .then((contatos) => this.setState({ contatos: contatos }));
  }

  render() {
    const agendaContatos = this.state.contatos.map((contato) => {
      return <Contatos key={contato.id} contato={contato} />;
    });

    return <table>{agendaContatos}</table>;
  }
}
