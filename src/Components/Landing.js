import React, { Component } from "react"

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      movieID: 284054, //Interstellar
      movie: {}
    }
  }

  componentDidMount = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.state.movieID
      }?&api_key=0324eb4b8130330ff1662244a7f60777`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ movie: data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSearch = e => {
    e.preventDefault()
    console.log(this.state.query)
    this.props.history.push(`/results/${this.state.query}`)
  }

  render() {
    return (
      <div className="landing-background">
        <div className="landing-container">
          <h1> Movie Search </h1>
          <form>
            <input
              type="text"
              placeholder="Find Movies, TV Shows and more..."
              onChange={e => this.setState({ query: e.target.value })}
            />
            <button type="submit" onClick={this.handleSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}
