import React from "react";

export default class Contatos extends React.Component {
  constructor(props) {
    super(props);
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
                <button>Apagar</button>
              </td>
              {"  "}
              <td>
                <button>Atualizar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
