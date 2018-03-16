import React, { Component } from "react"

import Navbar from "./Navbar"
import MovieCard from "./MovieCard"

export default class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null
    }
  }
  componentDidMount = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0324eb4b8130330ff1662244a7f60777&query=${
        this.props.match.params.query
      }&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data.results })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="movie-cards-container">
          {this.state.results
            ? this.state.results.map(movie => {
                if (movie.adult === false && movie.poster_path) {
                  return (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      posterSize={200}
                      posterPath={movie.poster_path}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      overview={movie.overview}
                    />
                  )
                } else return null
              })
            : "Loading..."}
        </div>
      </div>
    )
  }
}
