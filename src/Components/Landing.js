import React, { Component } from "react"

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }

  handleSearch = e => {
    e.preventDefault()
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
