import React from "react";

export default class EditarContato extends React.Component {
  constructor(props) {
    super(props);

    const { nome, email, telefone } = props.contato;

    this.state = {
      nome: nome,
      email: email,
      telefone: telefone
    };

    this.updateNome = this.updateNome.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateTelefone = this.updateTelefone.bind(this);
  }

  updateNome(event) {
    this.setState({ nome: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updateTelefone(event) {
    this.setState({ telefone: event.target.value });
  }

  render() {
    return (
      <div>
        <label>
          Editar Nome:
          <input
            type="text"
            value={this.state.nome}
            onChange={this.updateNome}
          />
        </label>

        <label>
          Editar Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.updateEmail}
          />
        </label>

        <label>
          Editar Telefone:
          <input
            type="text"
            value={this.state.telefone}
            onChange={this.updateTelefone}
          />
        </label>

        <button>Salvar</button>
      </div>
    );
  }
}
