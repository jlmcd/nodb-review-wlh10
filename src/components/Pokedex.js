import React from 'react'
import Pokemon from './Pokemon'

export default (props) => {
  return (
    <div className="pokedex">
      {props.pokemonList.map(el => (
        <Pokemon 
          key={el.id} 
          name={el.name} 
          img={el.img} 
          id={el.id}
          saveFn={props.saveFn}
          releaseFn={props.releaseFn}
        />
      ))}
    </div>
  )
}