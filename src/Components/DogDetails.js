import React, { Component } from 'react'
import './DogDetails.css'

export default class DogDetails extends Component {
  render() {
    let dog = this.props.dog
    return (
      <div className='container'>
        <div className="row">
          <div className="col-11 col-lg-5">
            <div className="card dog-details-card">
              <img src={dog.src} alt="" />
              <div className="card-body">
                <div className="card-title">
                  {dog.name}
                </div>
                <div className="card-subtitle text-muted">
                  {dog.age} years old
                </div>
              </div>
              <ul className='list-group list-group-flush'>
                {dog.facts.map((fact, i) => (
                  <li className='list-group-item' key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
