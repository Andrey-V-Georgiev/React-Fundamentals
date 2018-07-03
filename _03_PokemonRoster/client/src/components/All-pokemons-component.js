import React from 'react'
import Pokemon from './Pokemon-component'

class AllPokemons extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      allPokemons: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:5000/pokedex/pokedex')
      .then(rawData => rawData.json())
      .then(allPokemons => this.setState({allPokemons: allPokemons.pokemonColection}))
  }

  render () {
    return (
      <div className="container allPokemonsFrame">
        <div className="row">
          {this.state.allPokemons.map((pokemon, index) => <Pokemon
            key={index}
            pokemonName={pokemon.pokemonName}
            pokemonImg={pokemon.pokemonImg}
            pokemonInfo={pokemon.pokemonInfo}
          />)}
        </div>
      </div>
    )
  }
}

export default AllPokemons

