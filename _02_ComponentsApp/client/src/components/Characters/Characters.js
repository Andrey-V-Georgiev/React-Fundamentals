import React from 'react'

import Roster from './Roster'
import Details from './Details'
import fetcher from '../../fetcher'

const ROSTER_ENDPOINT = '/roster'
const DETAILS_ENDPOINT = '/character/'

export default class Characters extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [],
      details: {id: null, name: null, url: null, bio: null}
    }
  }

  componentDidMount () { this.fetchRoster() }

  fetchRoster = () =>
    fetcher.get(ROSTER_ENDPOINT, data => this.setState(this.mapImages(data)))

  mapImages = data => {
    return {
      images: data.map(i => ({id: i.id, url: i.url}))
    }
  }

  fetchDetails = id =>
    fetcher.get(DETAILS_ENDPOINT + id, data => this.setState({details: data}))

  render () {
    return (
      <div>
        <Roster images={this.state.images} select={this.fetchDetails}/>
        <Details {...this.state.details}/>
      </div>
    )
  }
}