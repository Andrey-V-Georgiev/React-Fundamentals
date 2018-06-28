import React, { Component } from 'react'
import fetcher from '../../fetcher'

const EPISODE_ENDPOINT = '/episodePreview/'

export default class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null,
      url: null
    }
  }

  fetchEpisode (id) {
    fetcher.get(EPISODE_ENDPOINT + id, data => {
      this.setState(data)
    })
  }

  componentDidMount () {
    this.fetchEpisode(0)
  }

  render () {
    return (
      <section id="slider">
        <img className="button"
             src="/left.png"
             title="previous"
             alt="nav"
             onClick={() => this.fetchEpisode(this.state.id - 1)}
        />
        <div className="image-container">
          <img src={this.state.url}
               alt="episode"/>
        </div>
        <img className="button"
             src="/right.png"
             title="next"
             alt="nav"
             onClick={() => this.fetchEpisode(this.state.id + 1)}
        />
      </section>
    )
  }
}



