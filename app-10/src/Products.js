import React, { Component } from 'react';

class Products extends Component {
  constructor(){
    super();
    this.state = {
      productIDs: [],
      creatures: [],
    }
  }
  handleChange = event => {
    this.setState({productIDs: event.target.value.split(',')});
  }
  mapCreature = (e,i) => {
    return (
      <div className="creature" key={i}>
        <p>name: {e.name}</p>
        <p>id: {e.id}</p>
        <img src={e.img} alt={e.name}/>
        <a href={`./details/${e.id}`}>
          More details...
        </a>
      </div>
    )
  }
  handleClick = () => {
    this.setState({creatures: []});
    this.state.productIDs.map(e => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          creatures: this.state.creatures.concat([{
            name: res.name,
            id: res.id,
            img: res.sprites.front_default
          }])
        });
      })
      .catch(err => {
        console.error(err);
      })
      return null;
    })
  }
  render() {
    return (
      <div className="products">
        <div className="pick-creatures">
          <p>put the ids you want here, comma separated:</p>
          <input onChange={this.handleChange}/>
          <p>hit the button below to try to show the creatures</p>
        </div>
        <button onClick={this.handleClick}>
          show creatures
        </button>
        <div className="creatures">
          {
            this.state.creatures.map(this.mapCreature)
          }
        </div>
      </div>
    )
  }
}

export default Products;