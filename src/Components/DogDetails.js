import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogDetails.css'

export default class DogDetails extends Component {
  render() {
    let dog = this.props.dog
    return (
      <div className='container'>
        <div className="row justify-content-center my-5">
          <div className="col-11 col-lg-5">
            <div className="card dog-details-card">
              <img className='card-img-top img-fluid' src={dog.src} alt="" />
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
              <div className="card-body">
                <Link exact to='/'>Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
