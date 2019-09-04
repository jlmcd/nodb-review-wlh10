import React, { Component } from 'react'
import Grass from './Grass'
import axios from 'axios'

export default class Finder extends Component {
  constructor() {
    super()
    this.state = {
      wildPokemonArr: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/wild-pokemon')
      .then(res => this.setState({ wildPokemonArr: res.data }))
  }

  render() {
    return (
      <div className="finder">
        {this.state.wildPokemonArr.map(el => (
        <Grass 
          catchFn={this.props.catchFn}
          key={el.name} 
          pokemonData={el} 
        />))}
      </div>
    )
  }
}
