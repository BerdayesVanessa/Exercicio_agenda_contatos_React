import React from "react";

export default class CadastrarContato extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      email: "",
      telefone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(event) {
    this.setState({ nome: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ telefone: event.target.value });
  }

  save() {
    const newContato = {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone
    };

    fetch("http://localhost:3000/contatos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContato)
    });

    this.setState({ nome: "" });
    this.setState({ email: "" });
    this.setState({ telefone: "" });
    this.props.cadastrarContatoCallback();
  }

  render() {
    return (
      <div>
        <h3> Cadastro de contato </h3>
        <form action>
          <div>
            <label for="id"> Id: </label>
            <input type="text"></input>
          </div>
          <div>
            <label for="nome"> Nome: </label>
            <input type="text"></input>
          </div>
          <div>
            <label for="email"> Email: </label>
            <input type="text"></input>
          </div>
          <div>
            <label for="telefone"> Telefone: </label>
            <input type="text"></input>
          </div>
          <button>Cadastrar</button> {"  "}
          <button>Buscar</button>
        </form>
      </div>
    );
  }
}
