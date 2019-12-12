import React, { Component } from 'react'
import './DogsList.css'
export class DogsList extends Component {

  render() {
    return (
      <div>
        <div className="dog-list">
          <div className="container">
            <div className="row no-gutters">
              {this.props.dogs.map(d => (
                <div className="dog col-4 text-center">
                  <div key={d.name}>
                    <img src={d.src} alt={d.name} />
                    <h1>{d.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DogsList
