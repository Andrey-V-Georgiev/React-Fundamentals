import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import RegisterComponent from './components/Register-component'
import LoginComponent from './components/Login-component'
import HeaderComponent from './components/Header-component'
import AddPokemonComponent from './components/Add-pokemon-component'
import AllPokemonsComponent from './components/All-pokemons-component'
import ErrorComponent from './components/ErrorComponent'
import Switch from 'react-router-dom/es/Switch'
import Redirect from 'react-router-dom/es/Redirect'

class App extends Component {

  render () {
    let routes = window.localStorage.getItem('authtoken') ?
      (
        <div className="App">
          <HeaderComponent/>
          <Switch>
            <Route path="/register" component={RegisterComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/add" component={AddPokemonComponent}/>
            <Route path="/all" component={AllPokemonsComponent}/>
            <Route component={ErrorComponent}/>
          </Switch>
        </div>
      ) :
      (
        <div className="App">
          <HeaderComponent/>
          <Switch>
            <Route path="/register" component={RegisterComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <Redirect to="/login"/>
          </Switch>
        </div>
      )


    return routes
  }
}

export default App
