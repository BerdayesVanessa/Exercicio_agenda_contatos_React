import React from "react";
import EditarContato from "./EditarContato";

export default class Contatos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.delete = this.delete.bind(this);
    this.switchEdit = this.switchEdit.bind(this);
  }

  delete() {
    const { id } = this.props.contato;
    const url = `http://localhost:3000/contatos/${id}`;

    fetch(url, {
      method: "DELETE"
    });

    this.props.fetchContatosCallback();
  }

  switchEdit() {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    const { id, nome, email, telefone } = this.props.contato;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{id}</td>
              <td>{nome}</td>
              <td>{email}</td>
              <td>{telefone}</td>
              <td>
                <button onClick={this.delete}>Apagar</button>
              </td>
              {"  "}
              <td>
                <button onClick={this.switchEdit}>Editar</button>

                {this.state.editing ? (
                  <EditarContato
                    contato={this.props.contato}
                    fetchContatosCallback={this.props.fetchContatosCallback}
                  />
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
