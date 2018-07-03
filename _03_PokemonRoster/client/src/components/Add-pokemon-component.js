import React from 'react'

class AddPokemon extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      form: {
        pokemonName: '',
        pokemonImg: '',
        pokemonInfo: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    let key = event.target.name
    let value = event.target.value

    let newObj = {}
    newObj[key] = value
    this.setState({form: Object.assign(this.state.form, newObj)})
  }

  handleSubmit () {
    const url = 'http://localhost:5000/pokedex/create'
    const options = {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: {'content-type': 'application/json'},
    }

    fetch(url, options).catch(err => console.log("KUR " + err.message))
    window.location.href = '/all'
  }

  render () {
    return (
      <form className="form-add">
        <h1 className="h3 mb-3 font-weight-normal">Add pokemon</h1>
        <input onChange={this.handleChange} type="text" name="pokemonName" className="form-control"
               placeholder="Pokemon name"/>
        <input onChange={this.handleChange} type="url" name="pokemonImg" className="form-control"
               placeholder="Pokemon image"/>
        <input onChange={this.handleChange} type="text" name="pokemonInfo" className="form-control"
               placeholder="Pokemon info"/>
        <button onClick={this.handleSubmit} className="btn btn-lg btn-info btn-block" type="button">Add</button>
        <p className="mt-5 mb-3 text-muted">© 2018</p>
      </form>
    )
  }
}

export default AddPokemon