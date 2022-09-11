import React from "react";

export default class Home extends React.Component {
  state = {
    frutas: [
      "banana",
      "maça",
      "laranja",
      "limao",
      "melancia",
      "tangerina",
      "abacate",
      "açaí",
      "graciola"
    ],
    listaFiltrada: []
  };

  filterFrutas = (e) => {
    const Filtro = this.state.frutas.filter((item) => {
      if (item.includes(e.target.value)) {
        return true;
      } else {
        return "";
      }
    });
    this.setState({ listaFiltrada: Filtro });
  };

  render() {
    return (
      <>
        <h1>MariFlix</h1>

        <input onChange={this.filterFrutas} />
        <ul>
          {this.state.listaFiltrada.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <h2>Cinemou!!</h2>
      </>
    );
  }
}
