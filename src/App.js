import React from "react";
import Agenda from "./Agenda";
import CadastrarContato from "./CadastrarContato";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contatos: [],
      version: 0
    };

    this.fetchContatos = this.fetchContatos.bind(this);
  }

  fetchContatos() {
    fetch("http://localhost:3001/contatos")
      .then((response) => response.json())
      .then((contatos) =>
        this.setState({ contatos: contatos, version: this.state.version + 1 })
      );
  }

  componentDidMount() {
    this.fetchContatos();
  }

  render() {
    return (
      <div className="container">
        <CadastrarContato cadastrarContatoCallback={this.fetchContatos} />
        <p> </p>
        <Agenda
          contatos={this.state.contatos}
          fetchContatosCallback={this.fetchContatos}
        />
      </div>
    );
  }
}