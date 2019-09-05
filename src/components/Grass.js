import React, {Component} from 'react'
import grass from '../assets/grass.png'

export default class Grass extends Component {
  constructor() {
    super()
    this.state = {
      grassClicked: false,
      clicksToCatch: Math.ceil(Math.random() * 10)
    }
  }

  checkGrass() {
    if (!this.state.grassClicked) {
      return this.setState({grassClicked: true})
    } else {
      this.catchPokemon()
    }
  }

  catchPokemon() {
    this.props.catchFn({
      name: this.props.pokemonData.name,
      img: this.props.pokemonData.sprites.front_default
    })
    this.props.refreshFn()
  }

  render() {
    const {pokemonData} = this.props

    return (
      <div className='grass'>
        <img 
          onClick={() => this.checkGrass()}
          src={this.state.grassClicked ? pokemonData.sprites.front_default : grass} 
          alt={pokemonData.name}/>
      </div>
    )
  }
}