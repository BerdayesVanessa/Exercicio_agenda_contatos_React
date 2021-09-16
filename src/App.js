import React from "react";
import Agenda from "./Agenda";
import CadastrarContato from "./CadastrarContato";


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contatos: []
    };

    this.fetchContatos = this.fetchContatos.bind(this);
  }

  fetchContatos() {
    fetch("http://localhost:3000/contatos")
      .then((response) => response.json())
      .then((contatos) => this.setState({ contatos: contatos }));
  }

  componentDidMount() {
    this.fetchContatos();
  }

  render() {
    return (
      <div className="App">
        <CadastrarContato cadastrarContatoCallback={this.fetchContatos} />

        <Agenda contatos={this.state.contatos} />
      </div>
    );
  }
}
