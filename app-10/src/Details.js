import React, { Component } from 'react';

class Details extends Component {
  constructor(){
    super();
    this.state = {
      pokemon: null
    }
  }
  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      this.setState({
        pokemon: {
          name: res.name,
          height: res.height,
          weight: res.weight,
          img: res.sprites.front_default,
          abilities: res.abilities.map(e => e.ability.name),
          stats: res.stats.map(e => {
            return {statName: e.stat.name, statValue: e.base_stat};
          }),
          moves: res.moves.map(e => e.move.name),
          types: res.types.map(e => e.type.name)
        }
      })
    })
    .catch(err => {
      console.error(err);
    })
  }
  pokemon = () => {
    if (this.state.pokemon) {
      return (
        <div className="pokemon">
          <h1>{this.state.pokemon.name}</h1>
          <img src={this.state.pokemon.img} alt={this.state.pokemon.name}/>
          <p>Height: {this.state.pokemon.height}</p>
          <p>Weight: {this.state.pokemon.weight}</p>
          <div className="types">Types: {
            this.state.pokemon.types.map((e,i) => {
              return (
                <div className="type" key={i}>
                  {e}
                </div>
              )
            })
          }</div>
          <div className="moves">Moves: {
            this.state.pokemon.moves.map((e,i) => {
              return (
                <div className="move" key={i}>
                  {e}
                </div>
              )
            })
          }</div>
          <div className="stats">Stats: {
            this.state.pokemon.stats.map((e,i) => {
              return (
                <div className="stat" key={i}>
                  {e.statName}: {e.statValue}
                </div>
              )
            })
          }</div>
          <div className="abilities">Abilities: {
            this.state.pokemon.abilities.map((e,i) => {
              return (
                <div className="ability" key={i}>
                  {e}
                </div>
              )
            })
          }</div>
        </div>
      )
    }
  }
  render(){
    return (
      <div className="details">
        {this.pokemon()}
      </div>
    )
  }
}

export default Details;