import React from 'react'

export default class Pokemon extends React.Component {

  render() {
    return (
      <div className="card" >
        <img className="card-img-top" src={this.props.pokemonImg} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{this.props.pokemonName}</h5>
            <p className="card-text">{this.props.pokemonInfo}</p>
          </div>
      </div>
    )
  }
}

