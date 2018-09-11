import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const foodUrl = "https://api.nal.usda.gov/ndb/V2/reports?ndbno=";
const searchUrl="https://api.nal.usda.gov/ndb/search/?q=";
const urlEnd = "&api_key=5yNUXFSZhMNXMoJdVpkBTp864Kibs2MAzd04p71G";
const exampleSearch = "pineapple";


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      numberOfResults: 1,
      foods: []
    }
  }
  componentDidMount(){
    this.getFood(exampleSearch,1);
  }
  getFood = (searchTerm,resultsToGet) => {
    axios.get(`${searchUrl}${searchTerm}${urlEnd}`)
      .then(res => {
        const promises = res.data.list.item.map(e => {
          return axios.get(`${foodUrl}${e.ndbno}${urlEnd}`)
        })
        return Promise.all(promises);
      })
      .then(res => {
        for (let i = 0;i < resultsToGet;i++){
          let name = res[i].data.foods[0].food.desc.name;
          if (name.includes(', UPC:')){
            name = name.substring(0,name.indexOf(', UPC:'));
          }
          this.setState({
            foods: this.state.foods.concat([{
              name: name,
              manu: res[i].data.foods[0].food.desc.manu,
              nutrients: res[i].data.foods[0].food.nutrients.map(e => {
                return {
                  name: e.name,
                  value: e.value,
                  unit: e.unit
                }
              })
            }])
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({
          foods: [{
            name: 'food not found',
            manu: '',
            nutrients: []
          }]
        })
      });
  }
  handleChange = event => {
    this.setState({input: event.target.value});
  }
  handleClick = () => {
    this.setState({foods: []})
    this.getFood(this.state.input,this.state.numberOfResults);
  }
  handleNumber = event => {
    this.setState({numberOfResults: event.target.value});
  }
  eachFood = (e,i) => {
    return (
      <div className="food" key={i}>
        <h1>{e.name}</h1>
        <h4>{e.manu}</h4>
        {e.nutrients.map((e,i) => {
          return (
            <p key={i}><strong>{e.name}</strong>: {e.value}{e.unit}</p>
          )
        })}
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Use my form to search for foods!</h1>
        <p>Search Term</p>
        <input onChange={this.handleChange} />
        <p>Number of results to get</p>
        <input type="number" onChange={this.handleNumber} />
        <p>Go get it!</p>
        <button onClick={this.handleClick}>
          search
        </button>
        {this.state.foods.map(this.eachFood)}
      </div>
    );
  }
}

export default App;
